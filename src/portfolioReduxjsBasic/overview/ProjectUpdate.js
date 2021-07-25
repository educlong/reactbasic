import React, { Component } from 'react';
import {connect} from 'react-redux' /**Chú ý để kết nối cần import connect vs store ra */

/**KẾT NỐI VS FIREBASE */
// import { FirebaseConfig } from '../FirebaseConfig'; /**FirebaseConfig trùng vs biến trong FirebaseConfig.js*/
import firebase from 'firebase/app';    /**chú ý cần import và require firebase vào */


class ProjectUpdate extends Component {
    constructor(props) {
        super(props);
        this.state={
            projectTitle:"",
            projectContent:"",
            projectId:""
        }
    }
    
    ischange=((event)=>{
        var nameTarget=event.target.name;
        var valueTarget=event.target.value;
        this.setState({[nameTarget]: valueTarget}); 
    })
    
    componentWillMount() {
        if (this.props.update1Project)  /**ban đầu kiểm tra xem có dữ liệu ko, có id ko, nếu có thì update */
            this.setState({             /**nếu có thì set cho các state ban đầu chính bằng zá trị của props*/
                projectTitle:this.props.update1Project.title,        /**đc đưa vào */
                projectContent:this.props.update1Project.content,
                projectId:this.props.update1Project.id
            })    
        
    }
    
    titleForAddAndUpdate=()=>{
        if (this.state.projectId)
            return <h3>Update content projects</h3>;
        else   return <h3>Add content projects</h3>;
    }
    render() {
        return (
            <form className="col-md-4 text-left">
                {this.titleForAddAndUpdate()}
                <div className="form-group ">
                    <label htmlFor="projectTitle">Project Title</label>
                    <input type="text" className="form-control" name="projectTitle" id="projectTitle" 
                            aria-describedby="helpIdProjectTitle"  placeholder="Project Title" 

                            onChange={(event)=>this.ischange(event)} /*lấy nội dung input nhập vào, lưu vào state*/
                            defaultValue={this.props.update1Project.title}/>{/**lấy data ra từ Store*/}

                    <small id="helpIdProjectTitle" className="form-text text-muted">Change your Project Title</small>
                </div>
                <div className="form-group">
                    <label htmlFor="projectContent">Project Content</label>
                    <textarea type="text" className="form-control" name="projectContent" id="projectContent" 
                            aria-describedby="helpIdProjectContent" placeholder="Project Content" 
                            
                            onChange={(event)=>this.ischange(event)} /*lấy nội dung input nhập vào, lưu vào state*/
                            defaultValue={this.props.update1Project.content}></textarea> {/**lấy data ra từ Store*/}

                    <small id="helpIdProjectContent" className="form-text text-muted">Change your Project Content</small>
                </div>
                <button type="reset" className="btn btn-primary btn-block"/*đặt type="reset" để clearData saukhi click*/
                
                    onClick={()=>{/*trước tiên phải check có id ko, nếu có id rồi thì update, nếu chưa có thì add mới*/
                        if (this.state.projectTitle && this.state.projectContent){/*nếu input k đc nhập thì k làm zì
                            GỬI LÊN STORE XỬ LÝ ADD/UPDATE VÀ Ở COMPONENT CON NHẬN DATA GỬI VỀ*/
                            if (this.state.projectId){   /**trường hợp có id rồi  thì update*/
                                this.props.firebaseUpdate({
                                    "id": this.state.projectId,
                                    "title":this.state.projectTitle,
                                    "content":this.state.projectContent
                                }); /**nhấn vào lưu thì update, sau đó hiển thị alert thông báo*/
                                this.props.alertOnStatus("Update "+this.state.projectTitle+" success","warning")  
                            }
                            else{                      /**trường hợp k có id thì insert */
                                this.props.firebaseAdd({"title":this.state.projectTitle,"content":this.state.projectContent});
                                this.props.alertOnStatus("Add "+this.state.projectTitle+" success","success")
                                }   /**nhấn vào lưu thì add, sau đó hiển thị alert thông báo*/
                            }
                        }}>Save</button> {/**truyền đối số vào cho props và gửi lên store xử lý add, k xử lý add ở đây*/}
                
            </form> /**TỪ STORE TRUYỀN ACTION XUỐNG COMPONENT -> SỬ DỤNG mapDispatchToProps*/
        );          /**TỪ COMPONENT TRUYỀN ACTION LÊN STORE -> SỬ DỤNG THAM SỐ TRUYỀN VÀO, STORE NHẬN: action.<tham số>*/
    }
}



/**Bước 2: kết nối vs Store.js (Bước 1 tại Store.js) */
/**TRUYỀN STATE TRONG STORE QUA CÁC COMPONENT DƯỚI DẠNG PROPS */
const mapStateToProps = (state, ownProps) => {/**lấy dữ liệu store từ Store.js ra, phím tắt: map...*/
    return { /*lấy state selectFirebase trong Store ra và lưu vào props của ProjectUpdate. như zậy*/
        selectFirebase: state.firebaseProjectReducer.selectFirebase,/*state của store1 đc truyền qua*/
        update1Project: state.firebaseProjectReducer.update1Project,/*ProjectUpdate thông qua 1props*/
        alertShow: state.alertReducer.alertShow /*tên là selectFirebase. Hoặc có thể lấy state khác*/
    }   /**alertShow: PHẦN XỬ LÝ ALERT */       /**(ko cần phải lấy hết state) */
}

/**TRUYỀN CÁC ACTION TRONG STORE QUA CÁC COMPONENT DƯỚI DẠNG PROPS (thông qua DISPATCH) */
const mapDispatchToProps = (dispatch, ownProps) => {
    return{/*tạo 1 hàm firebaseAdd để gọi action, vs nội dụng là action ADD_DATA_TO_FIREBASE*/
        firebaseAdd: (newProject) => {    /** trong Store. Có thể truyền bất kỳ tham số nào cho*/
            dispatch({type:"ADD_DATA_TO_FIREBASE", newProject}) /**action ở bất kỳ đâu*/
        },/*dispatch này thực thi vs tham số đầu vào là newProject-> khi gọi dispatch cần có tham số*/
        firebaseUpdate: (update1Project)=> {/*lúc này firebaseAdd sẽ biến thành 1 props trong component này*/
            dispatch({type:"UPDATE_DATA_TO_FIREBASE", update1Project})
        },
        /**PHẦN XỬ LÝ HIỂN THỊ THÔNG BÁO ALERT (phần này làm cuối cùng) */
        alertOnStatus: (alertAnnouncement, alertType)=> {
            dispatch({type:"ALERT_ON_STATUS",alertAnnouncement, alertType})
        },
        alertOffStatus: ()=> {
            dispatch({type:"ALERT_OFF_STATUS"})
        }
    }   
}

/**Để kết nối vs Store.js -> cần export default từ hàm connect ra và truyền vào ProjectUpdate*/
export default connect(mapStateToProps, mapDispatchToProps)(ProjectUpdate) /**chú ý import */
/*Sau khi truyền vào rồi thì tại file index.js (cùng cấp vs App.js) phải nhận đc-> Bước 3: index.js*/

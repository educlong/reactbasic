import React, { Component } from 'react';
import {connect} from 'react-redux' /**Chú ý để kết nối cần import connect vs store ra */
import Project from './Project';

/**KẾT NỐI VS FIREBASE */
import { FirebaseConfig } from '../FirebaseConfig'; /**FirebaseConfig trùng vs biến trong FirebaseConfig.js*/
import firebase from 'firebase/app';    /**chú ý cần import và require firebase vào */


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state={
            dataProjectFromFirebase: []
        }
    }
    
    componentWillMount() {  /**ban đầu trước khi vào render thì lấy data đưa vào state trước*/
        /**SELECT: */
        var self = this;/**Lấy data từ firebase ra: toàn bộ data trong firebase đc lưu trong 1 khái niệm*/
        FirebaseConfig.on("value",(snapshot) => {/*đgl snapshot*/
            if(snapshot.val()){ 
                var arrProjects = [];/**firebase trả về là 1 đối tượng, do đó phải convert ra 1 mảng*/
                snapshot.forEach(aProject => {
                    arrProjects.push({
                        "id" :aProject.key,
                        "title": aProject.val().title,
                        "content":aProject.val().content
                    })
                });
                self.setState({ /**ko thể dùng this.setState vì this trỏ đến firebase -> cần đưa*/
                    dataProjectFromFirebase: arrProjects /**this ra ngoài và đặt thành biến self*/
                });
            }
        })
    } 
    render() {
        if (this.state.dataProjectFromFirebase) /**có dữ liệu mới return */
            return (
                <div className="col text-left" id="projectsList" role="tablist" aria-multiselectable="true">
                    <div className="col-sm-12 text-right">
                    <button className="btn btn-outline-secondary text-right" style={{border: 'white'}}
                            onClick={()=>this.props.firebaseAllow()}>   {/**click vào button (+) thì hiển thị form add mới*/}
                        <i className="fas fa-plus-circle fa-2x"></i>
                    </button>
                    </div>
                    {
                        this.state.dataProjectFromFirebase.map((aProject, key)=>(
                            <Project key={key} index={key} projectInfo={aProject}/>
                        )) /**truyền thông tin nhận đc qua từng component Project*/
                    }
                </div>
            );
        else return null;
    }
}



/**Bước 2: kết nối vs Store.js (Bước 1 tại Store.js) */
/**TRUYỀN STATE TRONG STORE QUA CÁC COMPONENT DƯỚI DẠNG PROPS */
const mapStateToProps = (state, ownProps) => {
    return {
        isUpdate: state.firebaseProjectReducer.isUpdate,
    }
}

/**TRUYỀN CÁC ACTION TRONG STORE QUA CÁC COMPONENT DƯỚI DẠNG PROPS (thông qua DISPATCH) */
const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        firebaseAllow: () => {
            dispatch({type:"ALLOW_UPDATE"});
        }
    }   
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
/*Sau khi truyền vào rồi thì tại file index.js (cùng cấp vs App.js) phải nhận đc-> Bước 3: index.js*/
import React, { Component } from 'react';
import {connect} from 'react-redux' /**Chú ý để kết nối cần import connect vs store ra */
// import firebase from 'firebase/app';    /**chú ý cần import và require firebase vào */

class Project extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id={"project"+this.props.index}>
                    <h5 className="mb-0 row">
                        <a data-toggle="collapse" className="col-sm-10" data-parent="#projectsList" href={"#contentProject"+this.props.index} 
                            aria-expanded="true" aria-controls={"contentProject"+this.props.index}>
                            {this.props.projectInfo.title}                            
                        </a>
                        <div className="col-sm-2 text-right">
                            <button className="btn btn-outline-warning text-right" style={{border: 'white'}} 
                                    onClick={
                                        ()=>{
                                                this.props.firebaseAllow();  /**thay đổi trạng thái hiển thị */
                                                // console.log(this.props.projectInfo);    /**lấy nội dung của phần tử update */
                                                this.props.firebaseUpdateById(this.props.projectInfo) /**và truyền vào store */
                                            }
                                    }>
                                <i className="fas fa-pencil-alt" />
                            </button>

                            <button className="btn btn-outline-secondary text-right" style={{border: 'white'}}
                                    onClick={()=>{  /*lấy thông tin cần xóa*/
                                        this.props.firebaseDelete(this.props.projectInfo);
                                        this.props.alertOnStatus("Delete "+this.props.projectInfo.title+" success","danger")
                                    }}>
                                <i className="fas fa-trash"></i>{/**truyền vào firebaseDelete, gửi lên store để thực hiện xóa*/}
                            </button> 
                        </div>
                    </h5>
                </div>
                <div id={"contentProject"+this.props.index} className="collapse in" role="tabpanel" aria-labelledby={"project"+this.props.index}>
                    <div className="card-body">
                        {this.props.projectInfo.content}
                    </div>
                    <div className="col-sm-6 offset-sm-3 text-center">
                        <div className="position-relative mb-5 ">
                            <img className="img-fluid rounded-3 mb-3" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..." />
                            <a className="h3 fw-bolder text-decoration-none link-dark stretched-link" href="#!">{this.props.projectInfo.title}</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



/**Bước 2: kết nối vs Store.js (Bước 1 tại Store.js) */
/**TRUYỀN STATE TRONG STORE QUA CÁC COMPONENT DƯỚI DẠNG PROPS */
const mapStateToProps = (state, ownProps) => {
    return {
        isUpdate: state.firebaseProjectReducer.isUpdate,
        update1Project: state.firebaseProjectReducer.update1Project
    }
}

/**TRUYỀN CÁC ACTION TRONG STORE QUA CÁC COMPONENT DƯỚI DẠNG PROPS (thông qua DISPATCH) */
const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        firebaseAllow: () => {
            dispatch({type:"ALLOW_UPDATE"});
        },
        firebaseUpdateById: (aProject) => {
            dispatch({type:"GET_PROJECT_BY_ID", aProject})
        },
        firebaseDelete: (aProjectDelete) => {
            dispatch({type:"DELETE_PROJECT_BY_ID", aProjectDelete})
        },
        /**PHẦN XỬ LÝ HIỂN THỊ THÔNG BÁO ALERT (phần này làm cuối cùng) */
        alertOnStatus: (alertAnnouncement, alertType)=> {
            dispatch({type:"ALERT_ON_STATUS",alertAnnouncement, alertType})
        },
    }   
}

export default connect(mapStateToProps, mapDispatchToProps)(Project)
/*Sau khi truyền vào rồi thì tại file index.js (cùng cấp vs App.js) phải nhận đc-> Bước 3: index.js*/
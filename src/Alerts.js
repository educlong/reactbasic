import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from 'react-redux';

/**Component hiển thị thông báo */
class Alerts extends Component {
    handleDismiss=()=>{
        this.props.alertOffStatus()
    }
    render() {  /**copy trên internet về cấu trúc của component này */
        if (this.props.alertShow) {
            return ( 
                <AlertContainer position="bottom-right" >
                    <Alert /**position: xác định vị trí hiển thị cho alert */
                        type={this.props.alertType} 
                        timeout={1000}  /**timeout: thời zan hiển thị 1s */
                        onDismiss={()=>this.handleDismiss()} /**Alert chỉ thực hiện khi có dismiss */
                    >  {this.props.alertAnnouncement}
                    </Alert>
                </AlertContainer>)
        }
        else return null
    }   /**sau khi cấu hình xong thì đặt khối này vào App.js */
}

const mapStateToProps = (state, ownProps) => {
    return {
        alertShow: state.alertReducer.alertShow,
        alertAnnouncement: state.alertReducer.alertAnnouncement,
        alertType: state.alertReducer.alertType
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        alertOffStatus: ()=> {
            dispatch({type:"ALERT_OFF_STATUS"})
        }
    }
}
/**ALERTS đc lưu tại StoreAlert.js, và được gọi tại ProjectUpdate.js để xác định là update hay add mới*/
export default connect(mapStateToProps, mapDispatchToProps)(Alerts)
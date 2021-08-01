const alertInitialState = {
    alertShow: false,
    alertAnnouncement: "",
    alertType:"info"
}
const alertReducer = (state = alertInitialState, action) => {
    switch (action.type) {
        case "ALERT_ON_STATUS":/**bật status alertShow lên và truyền thông số vào*/
            return {...state,
                    alertShow:true,
                    alertAnnouncement:action.alertAnnouncement, 
                    alertType:action.alertType}
        case "ALERT_OFF_STATUS":
            return {...state, alertShow:false}   /**tắt status alertShow đi*/
        default:
            return state
    }
}

export default alertReducer;

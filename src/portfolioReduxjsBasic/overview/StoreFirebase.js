/**KẾT NỐI VS FIREBASE */
import { FirebaseConfig } from '../FirebaseConfig'; /**FirebaseConfig trùng vs biến trong FirebaseConfig.js*/
import firebase from 'firebase/app';    /**chú ý cần import và require firebase vào */

const firebaseProjectInitialState = {
    selectFirebase:[],
    isUpdate : false,   /**cho phép hiển thị hay ko */
    update1Project: {}  /**lấy 1 đối tượng là 1 project ra, từ Project.js */
}
const firebaseProjectReducer = (state = firebaseProjectInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA_TO_FIREBASE": /*Có thể truyền bất kỳ tham số cho action ở bất kỳ đâu*/
            /**ADD */
            firebase.database().ref("projects").push({  /**Tiến hành add new data lên firebase */
                title: action.newProject.title,/*Gọi push để insert mới 1 database vào firebase (ko*/
                content: action.newProject.content})/*cần khai bào id). id do firebase cung cấp*/            
            return state
        case "ALLOW_UPDATE":
            return {...state,isUpdate:!state.isUpdate}  /**đảo ngược trạng thái của state cho phép update */
        case "GET_PROJECT_BY_ID": /**tác dụng của action GET_PROJECT_BY_ID là lấy aProject đẩy vào */
            return {...state,update1Project:action.aProject} /**update1Project để cập nhật state */
        case "UPDATE_DATA_TO_FIREBASE":
            firebase.database().ref("projects/"+action.update1Project.id).set({
                title:action.update1Project.title, 
                content:action.update1Project.content
            })
            return {...state,update1Project:{}} /**update1Project để cập nhật state */
        case "DELETE_PROJECT_BY_ID":    /**add thêm dòng comment dưới confirm mới chạy */
            // eslint-disable-next-line no-restricted-globals
            if(confirm("add project "+action.aProjectDelete.title+" success!")===true)
                FirebaseConfig.child(action.aProjectDelete.id).remove()
            return state;
        default:
            return state
    }
}

export default firebaseProjectReducer;
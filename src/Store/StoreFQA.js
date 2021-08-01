/**STORE ĐÓNG VAI TRÒ NHƯ CONTROLLER */

const axios = require('axios'); /**Sử dụng module axios để lấy data từ backend */
const fQAInitialState = { 
    usersFQA: axios.get('/fqa/indexFQA').then((response)=>(response.data)),     /**get all data */
    countUserFQA: axios.get('/fqa/countFQAs').then((response)=>(response.data)),/**count all data*/
    isShowEdit: -1   /**ban đầu vị trí hiển thị là 0, nhấn vào button pencil chỉnh*/
}   /** sửa thì truyền chỉ sổ qua để biết đang chỉnh sửa tại vị trí mấy*/
const fQAReducer = (state = fQAInitialState, action) => {
    switch (action.type) {
        case "DISPLAY_ROW_INDEX":
            return {...state,isShowEdit:action.isShowEdit}
        case "ADD_NEW_FQA_TO_DB":
            var username =action.newFqa.username;
            var useremail =action.newFqa.useremail;
            var userpassword =action.newFqa.userpassword;
            axios.post("/fqa/addDataPostgresqlDemo2",{username,useremail,userpassword})
                .then(res=>res.data) /*Chú ý: khi insert data từ frontend lên backend*/
                .then(resq=>console.log(resq))/*thì bị lỗi Access-Control-Allow-Origin*/
                /*==> Để fix lỗi này cần setup proxy cho */
            return {...state,usersFQA:axios.get('/fqa/indexFQA').then((response)=>(response.data)),
                             countUserFQA:axios.get('/fqa/countFQAs').then((response)=>(response.data))}
        case "UPDATE_FQA_TO_DB":    /**frontend tại reactbasic/package.json (line45) */
            var username =action.newFqa.username;
            var useremail =action.newFqa.useremail;
            var id =action.newFqa.__id;
            axios.post("/fqa/updatePostgresql-demo2/"+id,{useremail,username})
                .then(res=>res.data) /*Chú ý: khi insert data từ frontend lên backend*/
                .then(resq=>console.log(resq))/*thì bị lỗi Access-Control-Allow-Origin*/
            return {...state,usersFQA:axios.get('/fqa/indexFQA').then((response)=>(response.data)),
                             countUserFQA:axios.get('/fqa/countFQAs').then((response)=>(response.data))}
        case "DELETE_FQA_TO_DB":
            var id =action.newFqa.__id__;
            console.log(id);
            axios.get("/fqa/deletePostgresql-demo2/"+id)
                .then(res=>res.data) /*Chú ý: khi insert data từ frontend lên backend*/
                .then(resq=>console.log(resq))/*thì bị lỗi Access-Control-Allow-Origin*/
            return {...state,usersFQA:axios.get('/fqa/indexFQA').then((response)=>(response.data)),
                             countUserFQA:axios.get('/fqa/countFQAs').then((response)=>(response.data))}
        default:
            return {...state,usersFQA:axios.get('/fqa/indexFQA').then((response)=>(response.data)),
                             countUserFQA:axios.get('/fqa/countFQAs').then((response)=>(response.data))}
    }
}
export default fQAReducer
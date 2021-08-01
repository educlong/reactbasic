import fQAReducer from "./StoreFQA";

/**_________________ REDUX JS______________ */
/**Tạo 1 file Store.js để lưu trữ các store, sau đó ghép file này vào IndexRedux.js*/

/**BƯỚC 1: đầu tiên require module thư viện redux ra*/
var redux=require("redux");   
/**BƯỚC 2: khai báo 1 reducer */
const reducer2 = redux.combineReducers({    /**trong này chỉ rõ ra: */
    fQAReducer: fQAReducer       /**reducer cho mục FQA */
})

/*BƯỚC 3: để tạo store->sử dụng reducer2 để tạo ra store là đối tượng quản lý reducer*/
var store1=redux.createStore(reducer2);

/**Để ghép file này vào react js thì làm theo các bước:
 * Bước 1: export ra*/
export default store1; /**export store1 ra */
/*Bước 2: store sẽ kết nối vs các component con thông qua props-> chuyển store thành props
* ->Thực hiện tại component con(VD tại component IndexRedux->vào IndexRedux gọi store ra)*/
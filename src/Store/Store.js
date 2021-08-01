import firebaseProjectReducer from "./StoreFirebase";
import alertReducer from "./StoreAlert";

/**_________________ REDUX JS______________ */
/**Tạo 1 file Store.js để lưu trữ các store, sau đó ghép file này vào IndexRedux.js*/

/**___________ĐẦU TIÊN CẦN ZẢI THÍCH RÕ CÁC KHÁI NIỆM ACTION, REDUCER, STORE_____________*/
/**BƯỚC 1: đầu tiên require module thư viện redux ra*/
var redux=require("redux");   
/**BƯỚC 2: khai báo 1 reducer */
const reducer2 = redux.combineReducers({    /**trong này chỉ rõ ra: */
/**________Cách 3: Tạo folder mới chứa tất cả reducers trong đó(nếu có quá nhiều reducer)*/
/**Tạo 2 file laptopReducer.js và statusUpdateReducer.js, copy 2 reducers này vào 2 file
 * vừa tạo, cuối mỗi reducer chú ý export default statusUpdateReducer và laptopReducer.
 * Sau đó trong file Store.js này import vào để nối các reducer nhỏ lại vs nhau!
 *  (chú ý nếu import thì phải import các reducer nhỏ trong các file lên đầu (line 1,2))
 */
/**======== TƯƠNG TÁC VỚI FIREBASE ===========
 * import store portfolioReduxjsBasic\overview\StoreFirebase.js vào reducer */
    firebaseProjectReducer: firebaseProjectReducer,
    alertReducer : alertReducer, /**reducer cho alert */
})

/*BƯỚC 3: để tạo store->sử dụng reducer2 để tạo ra store là đối tượng quản lý reducer*/
var store1=redux.createStore(reducer2);

// store1.subscribe(()=>{/*Hàm Subscribe --> dùng để theo dõi, đc kích hoạt mỗi khi state đc*/
//     console.log(JSON.stringify(store1.getState()));/*thay đổi,in ra chuỗi json để dễ thấy*/
// })

/**Để ghép file này vào react js thì làm theo các bước:
 * Bước 1: export ra*/
export default store1; /**export store1 ra */
/*Bước 2: store sẽ kết nối vs các component con thông qua props-> chuyển store thành props
* ->Thực hiện tại component con(VD tại component IndexRedux->vào IndexRedux gọi store ra)*/
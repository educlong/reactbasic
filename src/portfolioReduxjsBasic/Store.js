import fQAReducer from "../qaConnectToNodejs/StoreFQA";
import firebaseProjectReducer from "./overview/StoreFirebase";
import alertReducer from "./StoreAlert";

/**_________________ REDUX JS______________ */
/**Tạo 1 file Store.js để lưu trữ các store, sau đó ghép file này vào IndexRedux.js*/

/**___________ĐẦU TIÊN CẦN ZẢI THÍCH RÕ CÁC KHÁI NIỆM ACTION, REDUCER, STORE_____________*/
var redux=require("redux");   /**BƯỚC 1: đầu tiên require module thư viện redux ra*/
var oldState1={               /**tạo 1 state ví dụ */
    laptop: ["monitor","mouse","keyboard"],
    statusUpdate: true
}   
/**BƯỚC 2: khai báo 1 reducer là 1 arrow function gồm 2 đối số là state và action*/
/**Có 3 cách để quản lý reducer: */
/**________Cách 1: Để tất cả status trong 1 reducer (ko chia tách) */
var reducer1=(state=oldState1, action)=>{/**action dùng để chỉ thị cho 1 hành động nào đó*/
    switch (action.type) {/*reducer1 sẽ thực hiện hành động đó, ở đây hành động là trả về*/
        case "CHANGE_STATUS":   /*state. VD ở đây đặt tên cho action,nếu=CHANGE_STATUS*/
            return {...state,statusUpdate:!state.statusUpdate} /**thì đảo ngược state */
        case "ADD_NEW": /*Đặt tên cho action="ADD_NEW" thì add mới 1 item vào mảng laptop*/
            return {...state,laptop:[...state.laptop,action.newItem]}/*item đc truyền vào*/
        case "DELETE_ITEM":/*Tương tự đối với chỉ thị xóa(ở trên là các chỉ thị thêm,sửa)*/
            return {...state,laptop:state.laptop.filter((value,key)=>key!==action.indexItem)}
        default:/*Khái niệm action là 1 chỉ thị,để sai khiến reducer này thực thi. Action*/
            break;  /*khi khai báo có sẵn thuộc tính type (tên chỉ thị,tên thuộc tính)*/
    }               /**và thuộc tính item là phần tử thao tác bên trong chỉ thị đó.*/
    return state;   /**Tác dụng của action là để tính ra state tiếp theo */
}
/**________Cách 2: CHIA TÁCH các reducer ra thành các reducer nhỏ hơn ứng vs từng status */
/**                             CHIA TÁCH REDUCER VÀ NỐI LẠI __________ (để dễ quản lý) */
/**Tách reducer ra thành từng file nhỏ ứng vs từng state để dễ quản lý, gõ: reducer-> tab*/
const laptopInitialState = ["monitor","mouse","keyboard"]  /*đặt tên cho file reducer nhỏ*/
const laptopReducer = (state = laptopInitialState, action) => { /**này ứng vs state*/ 
    switch (action.type) {  /**ACTION case của state nào thì lấy state đó */
        case "ADD_NEW":     /**chú ý vì laptopInitialState nến phải chỉnh lại return*/
            return [...state,action.newItem] /**để thêm mới vào laptopInitialState*/
        case "DELETE_ITEM": /*chứ k phải thêm mới vào oldState1 nữa. Tương tự DELETE_ITEM*/
            return [state.filter((value,key)=>key!==action.indexItem)]
        default:
            return state
    }
}
/**Tương tự vậy, tách ra 1 reducer nhỏ thứ 2 ứng vs state là statusUpdate */
const statusUpdateInitialState = true
const statusUpdateReducer = (state = statusUpdateInitialState, action) => {
    switch (action.type) {
        case "CHANGE_STATUS":
            return !state
        default:
            return state
    }
}
/**NỐI các reducer nhỏ lại vs nhau, khai báo 1 biến reducer2 để quản lý tất cả reducer*/
const reducer2 = redux.combineReducers({    /**trong này chỉ rõ ra: */
    laptop: laptopReducer,           /**state laptop đc điều khiển bởi reducer nhỏ nào?*/
    statusUpdate: statusUpdateReducer,/**và statusUpdate đc điều khiển bởi reducer nào?*/

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
    fQAReducer: fQAReducer       /**reducer cho mục FQA */
})


/**==> sử dụng cách 2 để quản lý hiệu quả hơn (sử dụng reducer2 truyền vào createStore)*/
/*BƯỚC 3: để tạo store->sử dụng reducer2 để tạo ra store là đối tượng quản lý reducer*/
var store1=redux.createStore(reducer2);  /**và state, nhưng reducer đã quản lý state rồi,*/
// console.log(store1.getState()); /**do đó store chỉ cần quản lý reducer là đủ rồi-> truyền*/
store1.dispatch({   /**vào đối số là reducer2. Store là quản lý có thể truy cập trực tiếp*/
    type:"CHANGE_STATUS"/*vào reducer hay state->ko cần truyền từ component cha con zì cả*/
})  /**mà dùng trực tiếp store để truy cập vào state. Để truy cập vào state dùng getState*/
// console.log(store1.getState()); /**Để thực thi action, gọi hàm dispatch để thực thi, thực*/
store1.dispatch({   /**thi zì? thực thi action có tên là type="CHANGE_STATUS"->reducer sẽ*/
    type:"ADD_NEW", /** thực hiện đảo ngược state (VD gọi consose.log để hiển thị 2 trạng*/
    newItem: "headphone"/**thái trước và sau khi thực thi). Hay VD ở đây là "ADD_NEW" để*/
})/*thêm 1 item mới là headphone.Sau khi thực thi câu lệnh này xong thì store1 sẽ dựa vào*/
// console.log(store1.getState());/*tên action="ADD_NEW" để so khớp vs reducer2 để thực hiện*/
store1.dispatch({type:"DELETE_ITEM",indexItem:0})/*remove phầnTử thứ 0 trong state.laptop*/
// console.log(store1.getState());
// store1.subscribe(()=>{/*Hàm Subscribe --> dùng để theo dõi, đc kích hoạt mỗi khi state đc*/
    // console.log(JSON.stringify(store1.getState()));/*thay đổi,in ra chuỗi json để dễ thấy*/
// })

/**Để ghép file này vào react js thì làm theo các bước:
 * Bước 1: export ra*/
export default store1; /**export store1 ra */
/*Bước 2: store sẽ kết nối vs các component con thông qua props-> chuyển store thành props
* ->Thực hiện tại component con(VD tại component IndexRedux->vào IndexRedux gọi store ra)*/
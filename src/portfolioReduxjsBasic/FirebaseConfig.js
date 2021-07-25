import firebase from 'firebase/app';    /**chú ý cần import và require firebase vào */
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/analytics';
require("firebase/database");



/**Copy code từ firebase đưa vào file này (code này tùy từng project trên firebase mà firebase tự gen ra)*/
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var config = {
    apiKey: "AIzaSyAQYoKIjR5GjxQ-ZXdixlqAKI-WpYx8Ckc",
    authDomain: "reduxjsdb.firebaseapp.com",
    databaseURL: "https://reduxjsdb-default-rtdb.firebaseio.com",
    projectId: "reduxjsdb",
    storageBucket: "reduxjsdb.appspot.com",
    messagingSenderId: "1041770964740",
    appId: "1:1041770964740:web:387c1effc44345ddc2d251",
    measurementId: "G-GEDWN5DLJ6"
};
// Initialize Firebase


/**Sau khi copy vào thì export ra để sử dụng
 * có thể export ra bất kỳ đâu, ở đâu sử dụng thì import ra chỗ đó 
 *        -> trong Projects.js sử dụng thì sẽ import vào*/

/**CÁCH 1 */
//  export const FirebaseConfig = firebase.initializeApp(config);

/**SELECT: Lấy data từ firebase ra: toàn bộ data trong firebase đc lưu trong 1 khái niệm */
// firebase.database().ref("projects/").once("value").then(function(snapshot){/*đgl snapshot*/
    //console.log(JSON.stringify(snapshot.val())); /*project01: lấy bảng data projects ra*/
// })  /**mỗi khi (once) có data ("value") thì (then) thực hiện function in ra snapshot*/

/**UPDATE: update data từ firebase */
// firebase.database().ref("projects/project01").set({ /**với id="project01" */
//     id:"01",
//     title:"frontend project01", 
//     content:"content frontend project01"
// })

/**INSERT: Thêm mới data vào firebase -> có 2 cách
 * cách 1: dùng set như update, nếu data k có thì firebase tự động insert vào 
 * cách 2: dùng push (xử lý tại StoreFirebase.js)*/

/**DELETE: có thể dùng UPDATE và thêm 1 trường isdelete trong UPDATE.
 * Cách khác: dùng firebase.database().ref("projects").child(<tên id>).remove()
*/

/**CÁCH 2 ----> dùng cách 2 */
firebase.initializeApp(config);
export const FirebaseConfig = firebase.database().ref("projects");

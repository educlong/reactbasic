import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
import App from './App';
import store1 from "./Store/Store.js"  /**Chú ý import store1 vào */

/**Bước 3: tại index.js sẽ nhận store (Bước 1 tại reduxjsBasix/Store.js; Bước 2 tại reduxjsBasix/IndexRedux.js*/
ReactDOM.render( /**thay vì render ra App thì render ra provider và bao trong là App */
  <Provider store={store1}>  {/**Provider sẽ cung cấp store cho toàn bộ ứng dụng, do đó phải import store1 vào */}
    <App/>      {/**Provider sẽ đẩy store 1 này vào để quản lý toàn bộ app này*/}
  </Provider>,   /**(Chú ý: store là từ khóa, là 1 props bắt buộc của Provider)*/
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

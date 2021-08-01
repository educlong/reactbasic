import React, {Component} from 'react'; /**nguyên lý để tạo component là cần phải import lib react component từ (from) react */
import logo from './logo.svg';
import './App.css';
import Navigation1 from './componentOnepageDemo1/Navigation';
import Header from './componentOnepageDemo1/Header';
import Secion from './componentOnepageDemo1/Secion';
import Footer1 from './componentOnepageDemo1/Footer';

import Navigation2 from './modernBusinessDemo2/Navigation';
import Footer2 from './modernBusinessDemo2/Footer';
import RouterDemo2 from './modernBusinessDemo2/RouterDemo2';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Alerts from './Alerts';




/**Các cách tạo 1 component và props*/
function Component1(props){     /*** Cách 1: chỉ đc sử dụng 1 thẻ html ở đây */
  return (<div className="col-6"> 
            <div className="card-group">
              <div className="card">
                <h5>Cách số 1 component h5</h5> {/**truyền tham số vào props.imgComponent1 */}
                <img className="card-img-top" src={props.imgComponent1} alt="Card cap"/>
                <div className="card-body">
                  <h4 className="card-title">{props.titleComponent1}</h4>  {/**titleComponent1: title cho từng component này*/}
                  <p className="card-text">Text</p> {/**truyền props vào như truyền param cho component này */}
                </div>
              </div>
            </div>
          </div>) ;
}
var Component2 =function(){     /**Cách 2: định nghĩa component bằng anonymous function */
  return (<div> 
            <h5>Cách số 2 component h5</h5>
            <h6>Cách số 2 component h6</h6>
          </div>) ;
}
var Component3 =() =>(<div>     {/**Cách 3: định nghĩa component bằng arrow function */}
                        <h5>Cách số 3 component h5</h5>
                        <h6>Cách số 3 component h6</h6>
                      </div>) ;

/**phím tắt: rcjc -> enter (rc:react, j: js, c: class) -> tạo ra 1 class */
class Component4 extends Component {  /**Cách 4: định nghĩa component bằng class và thường dùng props trong class*/
  render() {
    return (
      <div className="col-4">
        <div className="card-group">
          <div className="card">
            <h5>Cách số 4 component h5</h5> {/**truyền tham số vào props.imgComponent1 (chú ý từ khóa this trong class)*/}
            <img className="card-img-top" src={this.props.imgComponent4} alt="Card cap"/> 
            <div className="card-body">
              <h4 className="card-title">{this.props.titleComponent4}</h4>  {/**titleComponent1: title cho từng component này*/}
              <p className="card-text">Text</p> {/**truyền props vào như truyền param cho component này */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/**VD về map -> tương tự hàm foreach */
var number = [1,2,3,4,5,6]; /**zả sử có 1 mảng number và duyệt mảng */
class MapNumber extends Component {
  render() {
    return (
      <div>
        VD về map:{number.map((aNumber) => aNumber*2+", ")} {/**zống hàm foreach chạy từng phần tử và in ra */}
      </div>
    );
  }
}


function App() {
  return (
    <div className="App">
      <div className="Beginer">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <MapNumber/>{/*VD về map -> tương tự hàm foreach */}
        </header>
        <div className="container">
            <div className="row"> {/* 2 cách tạo 1 component. Cách 1: */}{/* truyền props vào như 1 thuộc tính của thẻ html*/}
              <Component1 titleComponent1="Redbull" imgComponent1="/static/media/logo.6ce24c58.svg"/> 
              <Component1 titleComponent1="Cest la vie" imgComponent1="/static/media/logo.6ce24c58.svg"/>
            </div>  
            <Component2/>         {/* Cách 2 */}
            <Component3/>         {/* Cách 3 */}
            <div className="row"> {/* Cách 4: */}{/* truyền props vào như 1 thuộc tính của thẻ html*/}
              <Component4 titleComponent4="Redbull" imgComponent4="/static/media/logo.6ce24c58.svg"/> 
              <Component4 titleComponent4="Cest la vie" imgComponent4="/static/media/logo.6ce24c58.svg"/>
              <Component4 titleComponent4="Huda beer" imgComponent4="/static/media/logo.6ce24c58.svg"/>
            </div>
        </div>
      </div>






      {/**Project 1: One page Demo 1 */}

      <div className="onePageDemo1">
        <hr/> <h3>Project 1: One page Demo 1</h3>
        <Navigation1/> {/**Link file NavigationHeader.js vào App (tự động import -> lướt lên trên cùng để xem)*/}
        <Header/>     {/**Link file Secion.js vào App (chú ý link các props cho component Secion)*/}
        <Secion imgSectionDemo1="/onePageDemo1/assets/img/01.jpg" orderImg="order-lg-2" orderText="order-lg-1" titleSectionDemo1="Paul Long"/>
        <Secion imgSectionDemo1="/onePageDemo1/assets/img/02.jpg" orderImg="order-lg-1" orderText="order-lg-2" titleSectionDemo1="Nguyen Duc Long"/>
        <Secion imgSectionDemo1="/onePageDemo1/assets/img/03.jpg" orderImg="order-lg-2" orderText="order-lg-1" titleSectionDemo1="educlong"/>
        <Footer1/>
      </div>






      {/**Project 2 */}
      <div className="d-flex flex-column h-100">
        <hr/> <h3>Project 2: Modern Business Demo 2</h3>
        <main className="flex-shrink-0">
          <Router>    {/**định nghĩa 1 Router, để điều hướng mà k load lại webpage -> cần import router vào  */}
            <Navigation2/>  {/**trong Navigation2 có sử dụng NavLink nên Router cần phải bọc luôn cả Navigation2*/}
            <Alerts/> {/**hiển thị alert cho phép thông báo trong App */}
            <RouterDemo2/>  {/**trước khi điều hướng router thì cần đọc readme để cài đặt router trước */}
          </Router>   {/**tiếp theo xử lý VD về truyền data, xử lý tại index\SectionBlogs.js và  blogs\home\SectionBlog.js */}
        </main>
        <Footer2/>
      </div>

    </div>
  );
}

export default App;

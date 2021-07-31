import React, {Component} from 'react'; /**nguyên lý để tạo component là cần phải import lib react component từ (from) react */
import logo from './logo.svg';
import './App.css';



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


    </div>
  );
}

export default App;

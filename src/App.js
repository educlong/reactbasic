import './App.css';

import Navigation2 from './modernBusinessDemo2/Navigation';
import Footer2 from './modernBusinessDemo2/Footer';
import RouterDemo2 from './modernBusinessDemo2/RouterDemo2';
import {
  BrowserRouter as Router
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      
      {/**Project 2 */}
      <div className="d-flex flex-column h-100">
        <hr/> <h3>Project 2: Modern Business Demo 2</h3>
        <main className="flex-shrink-0">
          <Router>    {/**định nghĩa 1 Router, để điều hướng mà k load lại webpage -> cần import router vào  */}
            <Navigation2/>  {/**trong Navigation2 có sử dụng NavLink nên Router cần phải bọc luôn cả Navigation2*/}
            <RouterDemo2/>  {/**trước khi điều hướng router thì cần đọc readme để cài đặt router trước */}
          </Router>   {/**tiếp theo xử lý VD về truyền data, xử lý tại index\SectionBlogs.js và  blogs\home\SectionBlog.js */}
        </main>
        <Footer2/>
      </div>

    </div>
  );
}

export default App;

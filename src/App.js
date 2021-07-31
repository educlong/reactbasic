import React, {Component} from 'react'; /**nguyên lý để tạo component là cần phải import lib react component từ (from) react */
import './App.css';
import Navigation1 from './componentOnepageDemo1/Navigation';
import Header from './componentOnepageDemo1/Header';
import Secion from './componentOnepageDemo1/Secion';
import Footer1 from './componentOnepageDemo1/Footer';


function App() {
  return (
    <div className="App">


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

    </div>
  );
}

export default App;

import React, { Component } from 'react';
import {connect} from 'react-redux' /**Chú ý để kết nối cần import connect vs store ra */
import Projects from './Projects';
import ProjectUpdate from './ProjectUpdate';

/**_________________ REDUX JS______________ */

/**KẾT NỐI VS FIREBASE */
import { FirebaseConfig } from '../FirebaseConfig'; /**FirebaseConfig trùng vs biến trong FirebaseConfig.js*/
import firebase from 'firebase/app';    /**chú ý cần import và require firebase vào */

/**KẾT NỐI VS FIREBASE */
// import { firebaseConnection } from '../FirebaseConfig'; /**firebaseConnection trùng vs biến trong FirebaseConfig.js*/
// import firebase from 'firebase/app';    /**chú ý cần import và require firebase vào */

class PortfolioOverview extends Component {
    showForm=() =>{
        if(this.props.isUpdate) return  <ProjectUpdate/>;
        else return null;
    }
    render() {
        // console.log(FirebaseConfig);
        // console.log(this.props.isUpdate);
        return (
            <section className="py-5">
                <h3>REDUX JS BASIC</h3>
                <div className="container mt-3 px-5 my-5">
                    <div className="row">
                        <div className="text-center mb-5">
                            <h1 className="fw-bolder">Our Work</h1>
                            <p className="lead fw-normal text-muted mb-0">Company portfolio</p>
                        </div>
                    </div>
                    <div className="row gx-5">
                        <Projects/>
                        {this.showForm()}   {/**click vào button (+)/pencil thì hiển thị form add mới*/}
                    </div>
                </div>
                <div className="py-5 bg-light">
                    <div className="container px-5 my-5">
                    <h2 className="display-4 fw-bolder mb-4">Let's build something together</h2>
                    <a className="btn btn-lg btn-primary" href="#!">Contact us</a>
                    </div>
                </div>
            </section>
        );
    }
}



/**Bước 2: kết nối vs Store.js (Bước 1 tại Store.js) */
/**TRUYỀN STATE TRONG STORE QUA CÁC COMPONENT DƯỚI DẠNG PROPS */
const mapStateToProps = (state, ownProps) => {
    return {
        isUpdate: state.firebaseProjectReducer.isUpdate
    }
}

/**TRUYỀN CÁC ACTION TRONG STORE QUA CÁC COMPONENT DƯỚI DẠNG PROPS (thông qua DISPATCH) */
const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        firebaseAllow: () => {
            dispatch({type:"ALLOW_UPDATE"});
        }
    }   
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioOverview)
/*Sau khi truyền vào rồi thì tại file index.js (cùng cấp vs App.js) phải nhận đc-> Bước 3: index.js*/

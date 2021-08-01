import React, { Component } from 'react';
import IndexRedux from '../IndexRedux';

/**_________________ REDUX JS______________ */

class PortfolioOverview extends Component {
   
    render() {
        // console.log(FirebaseConfig);
        // console.log(this.props.isUpdate);
        return (
            <section className="py-5">
                <h3>Example: REDUX JS BASIC</h3>
                <IndexRedux/><hr/>
                
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


export default PortfolioOverview
/*Sau khi truyền vào rồi thì tại file index.js (cùng cấp vs App.js) phải nhận đc-> Bước 3: index.js*/

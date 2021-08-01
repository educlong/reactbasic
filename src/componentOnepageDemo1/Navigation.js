/**để tạo 1 component, gõ rcc-> tab */
import React, { Component } from 'react';

class Navigation extends Component {  /**component này tạo menu header */
    render() {
        return ( /* <!-- Navigation--> trước khi paste vào đây thì copy code html, paste vào https://magic.reactjs.net/htmltojsx.htm */
            <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top"> {/**để chuyển đổi thành jsx */}
                <div className="container px-5">
                <a className="navbar-brand" href="#page-top">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a className="nav-link" href="#!">Sign Up</a></li>
                    <li className="nav-item"><a className="nav-link" href="#!">Log In</a></li>
                    </ul>
                </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;
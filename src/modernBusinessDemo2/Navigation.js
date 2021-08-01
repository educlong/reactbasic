import React, { Component } from 'react';
import {NavLink} from "react-router-dom";   /**Import NavLink để đổi tất cả các thẻ a thành NavLink (để thực hiện link trong single wep app) */

class Navigation extends Component {
    render() {
        return (
            /* Navigation.Chú ý đổi tất cả thẻ a thành thẻ NavLink*/
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container px-5">
                    <NavLink to="/" className="navbar-brand">Start Bootstrap</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownPortfolio" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Portfolio Redux</a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownPortfolio">
                                <li><NavLink to="/demo2/portfolio-overview" className="dropdown-item">Portfolio Overview</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;
import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="text-center mb-5">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-envelope" /></div>
                <h1 className="fw-bolder">Get in touch</h1>
                <p className="lead fw-normal text-muted mb-0">We'd love to hear from you</p>
            </div>
        );
    }
}

export default Header;
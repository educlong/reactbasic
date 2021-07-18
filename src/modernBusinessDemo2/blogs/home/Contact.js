import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="col-xl-4">
                <div className="card border-0 h-100">
                    <div className="card-body p-4">
                        <div className="d-flex h-100 align-items-center justify-content-center">
                            <div className="text-center">
                            <div className="h6 fw-bolder">Contact</div>
                            <p className="text-muted mb-4">
                                For press inquiries, email us at
                                <br />
                                <a href="blog-post.html">{this.props.email}</a>
                            </p>
                            <div className="h6 fw-bolder">Follow us</div>
                            <a className="fs-5 px-2 link-dark" href="blog-post.html"><i className="bi-twitter" /></a>
                            <a className="fs-5 px-2 link-dark" href="blog-post.html"><i className="bi-facebook" /></a>
                            <a className="fs-5 px-2 link-dark" href="blog-post.html"><i className="bi-linkedin" /></a>
                            <a className="fs-5 px-2 link-dark" href="blog-post.html"><i className="bi-youtube" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
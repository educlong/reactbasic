import React, { Component } from 'react';

class Author extends Component {
    render() {
        return (
            <div className="col-lg-3">
                <div className="d-flex align-items-center mt-lg-5 mb-4">
                <img className="img-fluid rounded-circle" src={this.props.avatarAuthor} alt="..." />
                <div className="ms-3">
                    <div className="fw-bold">{this.props.nameAuthor}</div>
                    <div className="text-muted">{this.props.positionAuthor}</div>
                </div>
                </div>
            </div>
        );
    }
}

export default Author;
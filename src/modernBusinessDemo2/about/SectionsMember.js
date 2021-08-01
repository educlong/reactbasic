import React, { Component } from 'react';

class SectionsMember extends Component {
    render() {
        return (
            <div className="col mb-5 mb-5 mb-xl-0">
                <div className="text-center">
                <img className="img-fluid rounded-circle mb-4 px-4" src={this.props.imgMember} alt="..." />
                <h5 className="fw-bolder">{this.props.member}</h5>
                <div className="fst-italic text-muted">{this.props.position}</div>
                </div>
            </div>
        );
    }
}

export default SectionsMember;
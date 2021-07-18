import React, { Component } from 'react';

class CommentChild extends Component {
    render() {
        return (/* Child comment 1*/
            <div className={"d-flex "+this.props.marginComment}>
                <div className="flex-shrink-0"><img className="rounded-circle" src={this.props.imgAvartarUser} alt="..." /></div>
                <div className="ms-3">
                    <div className="fw-bold">{this.props.commenterName}</div>
                    {this.props.commentContent}
                </div>
            </div>
        );
    }
}

export default CommentChild;
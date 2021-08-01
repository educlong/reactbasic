import React, { Component } from 'react';
import CommentChild from './CommentChild';

class Comment extends Component {
    render() {
        return (/* Comment with nested comments*/
                <div className={"d-flex "+this.props.marginComment}>
                    {/* Parent comment*/}
                    <div className="flex-shrink-0"><img className="rounded-circle" src={this.props.imgAvartarUser} alt="..." /></div>
                    <div className="ms-3">
                        <div className="fw-bold">{this.props.commenterName}</div>
                        {this.props.commentContent}
                        <CommentChild marginComment="mt-4"
                                    imgAvartarUser="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                                    commenterName="Commenter Name"
                                    commentContent="And under those conditions, you cannot establish a capital-market evaluation of that enterprise. You can't get investors."/>
                        <CommentChild marginComment="mt-4"
                                    imgAvartarUser="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                                    commenterName="Commenter Name"
                                    commentContent="When you put money directly to a problem, it makes a good headline."/>
                    </div>
                </div>
        );
    }
}

export default Comment;
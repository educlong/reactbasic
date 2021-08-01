import React, { Component } from 'react';
import Comment from './Comment';
import CommentChild from './CommentChild';
import CommentForm from './CommentForm';

class Comments extends Component {
    render() {
        return (/* Comments section*/
            <section>
                <div className="card bg-light">
                    <div className="card-body">
                        <CommentForm/>  {/* Comment form*/}
                        <Comment marginComment="mb-4"
                                    imgAvartarUser="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                                    commenterName="Commenter Name"
                                    commentContent="If you're going to lead a space frontier, it has to be government; it'll never be private enterprise. Because the space frontier is dangerous, and it's expensive, and it has unquantified risks."/>
                        {/* Single comment*/}
                        <CommentChild marginComment=" "
                                    imgAvartarUser="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                                    commenterName="Commenter Name"
                                    commentContent="When I look at the universe and all the ways the universe wants to kill us, I find it hard to reconcile that with statements of beneficence."/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Comments;
import React, { Component } from 'react';

class CommentForm extends Component {
    render() {
        return (/* Comment form*/
            <form className="mb-4"><textarea className="form-control" rows={3} placeholder="Join the discussion and leave a comment!" defaultValue={""} /></form>
        );
    }
}

export default CommentForm;
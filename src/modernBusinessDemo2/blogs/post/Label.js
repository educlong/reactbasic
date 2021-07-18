import React, { Component } from 'react';

class Label extends Component {
    render() {
        return (
            <a className="badge bg-secondary text-decoration-none link-light" href="/">{this.props.labelArticle}</a>
        );
    }
}

export default Label;
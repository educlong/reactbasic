import React, { Component } from 'react';

class ContactCard extends Component {
    render() {
        return (
            <div className="col">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className={"bi "+this.props.fontAwesome} /></div>
                <div className={"h5 "+this.props.mb}>{this.props.title}</div>
                <p className="text-muted mb-0">{this.props.content}</p>
            </div>
        );
    }
}

export default ContactCard;
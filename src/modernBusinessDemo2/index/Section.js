import React, { Component } from 'react';

class Section extends Component {
    render() {
        return (
            <div className="col mb-5 h-100">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className={"bi "+this.props.iconSectionHome} /></div>
                <h2 className="h5">{this.props.featuredTitleHome}</h2>
                <p className="mb-0">{this.props.contentTitleHome}</p>
            </div>
        );
    }
}

export default Section;
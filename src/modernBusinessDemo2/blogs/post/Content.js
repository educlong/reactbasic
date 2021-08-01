import React, { Component } from 'react';
import Article from './Article';
import Comments from './Comments';

class Content extends Component {
    render() {
        return (
            <div className="col-lg-9">
                <Article title={this.props.dataContent.title}
                        date={this.props.dataContent.date}
                        imgBackground={this.props.dataContent.imgBackground}
                        typeOfNews = {this.props.dataContent.type}
                        summary = {this.props.dataContent.summary}/>
                <Comments/>
            </div>
        );
    }
}

export default Content;
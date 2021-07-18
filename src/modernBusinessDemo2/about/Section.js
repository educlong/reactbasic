import React, { Component } from 'react';

class Section extends Component {
    render() {
        return (
            <section className={"py-5 "+this.props.bgLightSection} id={" "+this.props.idScrollTargetSection}>
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                    <div className={"col-lg-6 "+this.props.orderFirst}>
                        <img className="img-fluid rounded mb-5 mb-lg-0" src={this.props.imgSection} alt="..." />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="fw-bolder">{this.props.titleSection}</h2>
                        <p className="lead fw-normal text-muted mb-0">{this.props.contentSection}</p>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Section;
import React, { Component } from 'react';
import Section from './Section';

class Sections extends Component {
    render() {
        return (
            <section className="py-5" id="features">
                <div className="container px-5 my-5">
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5 mb-lg-0"><h2 className="fw-bolder mb-0">A better way to start building.</h2></div>
                        <div className="col-lg-8">
                            <div className="row gx-5 row-cols-1 row-cols-md-2">
                                <Section contentTitleHome="lorem 1" featuredTitleHome="Featured title 1" iconSectionHome="bi-collection" />
                                <Section contentTitleHome="lorem 2" featuredTitleHome="Featured title 2" iconSectionHome="bi-building" />
                                <Section contentTitleHome="lorem 3" featuredTitleHome="Featured title 3" iconSectionHome="bi-toggles2" />
                                <Section contentTitleHome="lorem 3" featuredTitleHome="Featured title 3" iconSectionHome="bi-toggles2" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Sections;
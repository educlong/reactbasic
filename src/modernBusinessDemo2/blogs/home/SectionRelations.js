import React, { Component } from 'react';
import Contact from './Contact';
import SectionRelation from './SectionRelation';
import data from '../../Data.json';

class SectionRelations extends Component {
    render() {
        return (
            <section className="py-5 bg-light">
                <div className="container px-5">
                    <div className="row gx-5">
                        <div className="col-xl-8">
                            <h2 className="fw-bolder fs-5 mb-4">{this.props.aDataNews.type}</h2>
                            {
                                data.map((aData,key) => {
                                    if (aData.id === this.props.aDataNews.id) 
                                        return null
                                    else{
                                        // console.log(aData.id);
                                        // console.log(this.props.aDataNews.id);
                                        return(
                                            <SectionRelation key={key} date={aData.date} mb="mb-4"
                                                titleSectionBlog={aData.title}
                                                blogId={aData.id}
                                                summary={aData.summary}/>
                                        )
                                    }
                                })
                            }
                            <div className="text-end mb-5 mb-xl-0">
                                <a className="text-decoration-none" href="blog-post.html">More {this.props.typeOfNews}<i className="bi bi-arrow-right" /></a>
                            </div>
                        </div>
                        <Contact email="press@domain.com"/>
                    </div>
                </div>
            </section>
        );
    }
}

export default SectionRelations;
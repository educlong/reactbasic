import React, { Component } from 'react';
import SectionBlog from '../SectionBlog';
import AsideDelivered from './AsideDelivered ';
import data from '../Data.json';

class SectionBlogs extends Component {
    render() {
        console.log("in ra data trong Data.json ");
        console.log(data);  /** in ra data trong Data.json */
        return (
            <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6">
                            <div className="text-center">
                            <h2 className="fw-bolder">From our blog</h2>
                            <p className="lead fw-normal text-muted mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit ratione dicta mollitia. Officiis ad.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-5">
                        {
                            data.map((aDataNews, key) => (  /**duyệt hết các phần tử trong mảng Data.json và truyền vào view */
                                <SectionBlog key={key} blogId ={aDataNews.id}
                                        imgCardSectionBlog={aDataNews.imgBackground}
                                        kindOfNews={aDataNews.type}
                                        titleSectionBlog={aDataNews.title}
                                        contentOfNews={aDataNews.summary}
                                        avatarUserSectionBlog={aDataNews.imgAuthor}
                                        userSectionBlog={aDataNews.author}
                                        dateSectionBlog={aDataNews.date}
                                        timeSectionBlog={aDataNews.timeAgo}/>
                            ) )
                        }
                    </div>
                    <AsideDelivered/>
                </div>
            </section>

        );
    }
}

export default SectionBlogs;
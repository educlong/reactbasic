import React, { Component } from 'react';
import SectionBlog from '../SectionBlog';
import data from '../Data.json';


class SectionBlogs extends Component {
    render() {
        return (/* Blog preview section*/
            <section className="py-5">
                <div className="container px-5">
                <h2 className="fw-bolder fs-5 mb-4">Featured Stories</h2>
                <div className="row gx-5">
                    {   /**Chúc năng hiển thị tin liên quan. Nếu có dữ liệu truyền qua đây (aDataById từ*/
                        data.map((aDataNews, key) => { /**BlogPostDemo2 truyền qua) thì mới so sánh. Duyệt*/
                            if (this.props.aDataById)   /**tất cả phần tử, nếu trùng id vs phần tử đc */
                                if (aDataNews.id === this.props.aDataById.id) return null /**truyền qua*/
                            return( /**thì loại bỏ, ko hiển thị, còn nếu k trùng thì hiển thị ra */
                                <SectionBlog key={key} blogId ={aDataNews.id}
                                    imgCardSectionBlog={aDataNews.imgBackground}
                                    kindOfNews={aDataNews.type}
                                    titleSectionBlog={aDataNews.title}
                                    contentOfNews={aDataNews.summary}
                                    avatarUserSectionBlog={aDataNews.imgAuthor}
                                    userSectionBlog={aDataNews.author}
                                    dateSectionBlog={aDataNews.date}
                                    timeSectionBlog={aDataNews.timeAgo}/>
                            )
                        } )
                    }
                </div>
                <div className="text-end mb-5 mb-xl-0">
                    <a className="text-decoration-none" href="/">
                    More stories
                    <i className="bi bi-arrow-right" />
                    </a>
                </div>
                </div>
            </section>
        );
    }
}

export default SectionBlogs;
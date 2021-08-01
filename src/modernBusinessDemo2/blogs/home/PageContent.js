import React, { Component } from 'react';
import {
    NavLink
} from "react-router-dom";

class PageContent extends Component {
    toSlug = (str) =>{
        // Chuyển hết sang chữ thường
        str = str.toString().toLowerCase();
        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
    
        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');
    
        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');
    
        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');
    
        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');
    
        // return
        return str;
    }
    
    render() {
        return (/* Page Content*/
            <section className="py-5">
                <div className="container px-5">
                    <h1 className="fw-bolder fs-5 mb-4">{this.props.header}</h1>
                    <div className="card border-0 shadow rounded-3 overflow-hidden">
                        <div className="card-body p-0">
                        <div className="row gx-0">
                            <div className="col-lg-6 col-xl-5 py-lg-5">
                                <div className="p-4 p-md-5">
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">{this.props.typeOfNews}</div>
                                    <div className="h2 fw-bolder">{this.props.titleSectionBlog}</div>
                                    <p>{this.props.content}</p>
                                    <NavLink to={"/demo2/blog-post/"+this.toSlug(this.props.titleSectionBlog)+"."+this.props.blogId+".html"} 
                                                className="stretched-link text-decoration-none">
                                        Read more <i className="bi bi-arrow-right" />
                                    </NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-7"><div className="bg-featured-blog" style={{backgroundImage: this.props.imgBackground}} /></div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default PageContent;
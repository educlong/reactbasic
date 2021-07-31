import React, { Component } from 'react';
import {
    NavLink
} from "react-router-dom";

class SectionBlog extends Component {
    
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
        // console.log(this.props);
        return (
            <div className="col-lg-4 mb-5">
                <div className="card h-100 shadow border-0">
                <img className="card-img-top" src={this.props.imgCardSectionBlog} alt="..." />
                <div className="card-body p-4">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">{this.props.kindOfNews}</div>
                    <NavLink to={"/demo2/blog-post/"+this.toSlug(this.props.titleSectionBlog)+"."+this.props.blogId+".html"} 
                            className="text-decoration-none link-dark stretched-link">{/*SectionBlog.Chú ý đổi tất cả*/}
                        <h5 className="card-title mb-3">{this.props.titleSectionBlog}</h5>{/**thẻ a thành thẻ NavLink*/}
                    </NavLink>    {/**xử lý tạo link friendly dùng slug convert link friendly sang vietnamese*/}
                    <p className="card-text mb-0">{this.props.contentOfNews}</p>
                </div>
                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex align-items-end justify-content-between">
                    <div className="d-flex align-items-center">
                        <img className="rounded-circle me-3" src={this.props.avatarUserSectionBlog} alt="..." />
                        <div className="small">
                        <div className="fw-bold">{this.props.userSectionBlog}</div>
                        <div className="text-muted">{this.props.dateSectionBlog} · {this.props.timeSectionBlog} read</div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default SectionBlog;
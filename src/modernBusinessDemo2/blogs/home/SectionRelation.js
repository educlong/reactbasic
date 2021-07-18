import React, { Component } from 'react';
import {
    NavLink
} from "react-router-dom";

class SectionRelation extends Component {
    
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
        return (/* News item*/
            <div className={this.props.mb}>
                <div className="small text-muted">{this.props.date}</div>
                <NavLink to={"/demo2/blog-post/"+this.toSlug(this.props.titleSectionBlog)+"."+this.props.blogId+".html"} 
                            className="link-dark">
                        <h3>{this.props.summary}</h3>   {/*SectionBlog.Chú ý đổi tất cả thẻ a thành thẻ NavLink*/}
                </NavLink>    {/**xử lý tạo link friendly dùng slug convert link friendly sang vietnamese*/}
            </div>
        );
    }
}

export default SectionRelation;
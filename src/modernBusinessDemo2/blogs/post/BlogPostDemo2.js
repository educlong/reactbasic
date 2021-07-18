import React, { Component } from 'react';
import Author from './Author';
import Content from './Content';
import SectionBlogs from '../SectionBlogs';
import datas from '../../Data.json';

class BlogPostDemo2 extends Component {
    render() {
        console.log("lấy hết thông tin trong props khi chạy HomeDemo2.js hay chạy BlogHomeDemo2.js: "+this.props.match.params.id);
        return (
            <section className="py-5">
                {
                    datas.map((aDataNews, key) => { /**duyệt hết các phần tử trong chuỗi json Data.js */
                        if(aDataNews.id === parseInt(this.props.match.params.id)){/*lấy id của từng phần tử ra,so sánh*/
                            console.log(aDataNews);/**vs id đc truyền vào tại RouterDemo2.js. Nếu đúng thì in ra*/
                            return(
                                <section className="py-5">
                                    <div className="container px-5 my-5">
                                        <div className="row gx-5">
                                            <Author avatarAuthor={aDataNews.imgAuthor}
                                                    nameAuthor ={aDataNews.author}
                                                    positionAuthor={aDataNews.position} key={key}/>
                                            <Content dataContent={aDataNews}/>{/**truyền toàn bộ data của 1 phần tử qua*/}
                                        </div>{/*và tại component Content nhận đc thông qua props, từ props lấy ra info*/}
                                    </div>
                                    <SectionBlogs  aDataById={aDataNews}/>
                                </section>
                            )
                        }
                        return null
                    } )
                }
            </section>

        );
    }
}

export default BlogPostDemo2;

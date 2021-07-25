import React, { Component } from 'react';
/**Đầu tiên, để xử lý router, cần  import  thư viện vào
 */
import {
    Switch,
    Route
} from "react-router-dom";

import AboutDemo2 from './about/AboutDemo2';
import AdminUser from './admin/AdminUser';
import BlogHomeDemo2 from './blogs/home/BlogHomeDemo2';
import BlogPostDemo2 from './blogs/post/BlogPostDemo2';
import ContactDemo2 from './contact/ContactDemo2';
import FQADemo2 from '../qaConnectToNodejs/FQADemo2';
import HomeDemo2 from './index/HomeDemo2';
import PortfolioItems from '../portfolioReduxjsBasic/items/PortfolioItems';
import PortfolioOverview from '../portfolioReduxjsBasic/overview/PortfolioOverview';
import PricingDemo2 from './pricing/PricingDemo2';

class RouterDemo2 extends Component {
    render() {
        return (    
            <div>
                {/*
                A <Switch> looks through all its children <Route>
                elements and renders the first one whose path
                matches the current URL. Use a <Switch> any time
                you have multiple routes, but you want only one
                of them to render at a time
                */}
                <Switch>    {/**route đến các page cần thiết */}
                    <Route exact path="/demo2/home"> <HomeDemo2 /></Route>
                    <Route path="/demo2/about"> <AboutDemo2 /> </Route>
                    <Route path="/demo2/blog-home"> <BlogHomeDemo2 /> </Route>
                    
                    <Route path="/demo2/blog-post/:slugdemo2.:id.html" 
                        render={(props) => <BlogPostDemo2 {...props} />} /> {/**path theo chuẩn đc định nghĩa tại*/}
                    {/**SectionBlog.js, gọi render và đưa prop chứa thông tin của slugdemo2 và id vào BlogPostDemo2*/}

                    <Route path="/demo2/contact"> <ContactDemo2 /> </Route>
                    <Route path="/demo2/fqa"> <FQADemo2 /> </Route>
                    <Route path="/demo2/portfolio-overview"> <PortfolioOverview /> </Route>
                    <Route path="/demo2/portfolio-items"> <PortfolioItems /> </Route>
                    <Route path="/demo2/pricing"> <PricingDemo2 /> </Route>
                    <Route path="/demo2/admin"> <AdminUser /> </Route>
                </Switch>
            </div>  /**cuối cùng thì truyền RouterDemo2 này vào App.js */
        );
    }
}

export default RouterDemo2;
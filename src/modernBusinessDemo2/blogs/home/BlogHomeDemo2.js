import React, { Component } from 'react';
import PageContent from './PageContent';
import SectionBlogs from '../SectionBlogs';
import SectionRelations from './SectionRelations';
import data from '../../Data.json';

class BlogHomeDemo2 extends Component {
    render() {
        return (   /**hiển thị tin mới nhất, tin mới nhất là tin cuối cùng => data.length-1 */
                <div>   {/**lấy id của tin cuối cùng ra: data[data.length-1].id, tương tự */}
                    <PageContent blogId ={data[data.length-1].id}   /**các thông số khác */
                                header="Company Blog"
                                typeOfNews={data[data.length-1].type}
                                titleSectionBlog={data[data.length-1].title}
                                content={data[data.length-1].summary}
                                imgBackground={'url('+data[data.length-1].imgBackground+')'}
                                />
                    
                    <SectionRelations aDataNews={data[data.length-1]}/>
                    <SectionBlogs/>
                </div>
        );
    }
}

export default BlogHomeDemo2;
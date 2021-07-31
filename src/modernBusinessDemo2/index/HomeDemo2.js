import React, { Component } from 'react';
import Header from './Header';
import SectionBlogs from './SectionBlogs';
import Sections from './Sections';
import TestimonialSection from './TestimonialSection';

class HomeDemo2 extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Sections/>
                <TestimonialSection/>
                <SectionBlogs/>
            </div>
        );
    }
}

export default HomeDemo2;
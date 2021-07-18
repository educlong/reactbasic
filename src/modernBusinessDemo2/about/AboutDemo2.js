import React, { Component } from 'react';
import Header from './Header';
import Section from './Section';
import SectionsTeam from './SectionsTeam';

class AboutDemo2 extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Section imgSection="https://dummyimage.com/600x400/343a40/6c757d" titleSection="Our founding"
                        contentSection="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam."
                        bgLightSection="bg-light"
                        idScrollTargetSection="scroll-target"
                        orderFirst=" "/>
                <Section imgSection="https://dummyimage.com/600x400/343a40/6c757d" titleSection="Growth &amp; beyond"
                        contentSection="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam."
                        bgLightSection=""
                        idScrollTargetSection=""
                        orderFirst="order-first order-lg-last"/>
                <SectionsTeam/>
            </div>
        );
    }
}

export default AboutDemo2;
import React, { Component } from 'react';
import SectionsMember from './SectionsMember';

class SectionsTeam extends Component {
    render() {
        return (
            <section className="py-5 bg-light">
                <div className="container px-5 my-5">
                    <div className="text-center">
                        <h2 className="fw-bolder">Our team</h2>
                        <p className="lead fw-normal text-muted mb-5">Dedicated to quality and your success</p>
                    </div>
                    <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                        <SectionsMember imgMember="https://dummyimage.com/150x150/ced4da/6c757d"
                                        member="Ibbie Eckart" position="Founder &amp; CEO"/>
                        <SectionsMember imgMember="https://dummyimage.com/150x150/ced4da/6c757d"
                                        member="Arden Vase" position="CFO"/>
                        <SectionsMember imgMember="https://dummyimage.com/150x150/ced4da/6c757d"
                                        member="Toribio Nerthus" position="Operations Manager"/>
                        <SectionsMember imgMember="https://dummyimage.com/150x150/ced4da/6c757d"
                                        member="Malvina Cilla" position="CTO"/>
                    </div>
                </div>
            </section>
        );
    }
}

export default SectionsTeam;
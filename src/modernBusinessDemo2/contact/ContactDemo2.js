import React, { Component } from 'react';
import ContactCards from './ContactCards';
import Forms from './Forms';
import Header from './Header';

class ContactDemo2 extends Component {
    render() {
        return (
            <section className="py-5">
                <div className="container px-5">    {/* Contact form*/}
                    <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                        <Header/>
                        <Forms/>
                    </div>
                    <ContactCards/>                 {/**Contact cards */}
                </div>
            </section>
        );
    }
}

export default ContactDemo2;
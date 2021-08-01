import React, { Component } from 'react';
import ContactCard from './ContactCard';

class ContactCards extends Component {
    render() {
        return (/* Contact cards*/
            <div className="row gx-5 row-cols-2 row-cols-lg-4 py-5">
                <ContactCard fontAwesome="bi-chat-dots"  mb="mb-2"
                            title="Chat with us"
                            content="Chat live with one of our support specialists."/>
                <ContactCard fontAwesome="bi-people"  mb=" "
                            title="Ask the community"
                            content="Explore our community forums and communicate with other users."/>
                <ContactCard fontAwesome="question-circle"  mb=" "
                            title="Support center"
                            content="Browse FAQ's and support articles to find solutions."/>
                <ContactCard fontAwesome="bi-telephone"  mb=" "
                            title="Call us"
                            content="Call us during normal business hours at (555) 892-9403."/>
            </div>
        );
    }
}

export default ContactCards;
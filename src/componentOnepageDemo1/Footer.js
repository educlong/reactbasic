import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (/**<!-- Footer--> trước khi paste vào đây thì copy code html, paste vào */
            <footer className="py-5 bg-black">{/**https://magic.reactjs.net/htmltojsx.htm để chuyển đổi thành jsx*/}
                <div className="container px-5">
                    <p className="m-0 text-center text-white small">Copyright © Your Website 2021</p>
                </div>
            </footer>
        );
    }
}

export default Footer;
import React, { Component } from 'react';
import Label from './Label';

class Article extends Component {
    render() {
        return (/* Post content*/
            <article>
                {/* Post header*/}
                <header className="mb-4">
                    <h1 className="fw-bolder mb-1">{this.props.title}</h1>              {/* Post title*/}
                    <div className="text-muted fst-italic mb-2">{this.props.date}</div> {/* Post meta content*/}
                    <Label labelArticle={this.props.typeOfNews}/>
                    <Label labelArticle="Web Design"/>                                  {/* Post categories*/}
                    <Label labelArticle="Freebies"/>
                </header>
                {/* Preview image figure*/}
                <figure className="mb-4"><img className="img-fluid rounded" src={this.props.imgBackground} alt="..." /></figure>
                <section className="mb-5">                                              {/* Post content*/}
                    <p className="fs-5 mb-4">Science is an enterprise that should be cherished as an activity of the free human mind. Because it transforms who we are, how we live, and it gives us an understanding of our place in the universe.</p>
                    <p className="fs-5 mb-4">The universe is large and old, and the ingredients for life as we know it are everywhere, so there's no reason to think that Earth would be unique in that regard. Whether of not the life became intelligent is a different question, and we'll see if we find that.</p>
                    <p className="fs-5 mb-4">If you get asteroids about a kilometer in size, those are large enough and carry enough energy into our system to disrupt transportation, communication, the food chains, and that can be a really bad day on Earth.</p>
                    <h2 className="fw-bolder mb-4 mt-5">{this.props.summary}</h2>
                    <p className="fs-5 mb-4">For me, the most fascinating interface is Twitter. I have odd cosmic thoughts every day and I realized I could hold them to myself or share them with people who might be interested.</p>
                    <p className="fs-5 mb-4">Venus has a runaway greenhouse effect. I kind of want to know what happened there because we're twirling knobs here on Earth without knowing the consequences of it. Mars once had running water. It's bone dry today. Something bad happened there as well.</p>
                </section>
            </article>
        );
    }
}

export default Article;
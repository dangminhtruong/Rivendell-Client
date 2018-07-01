import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Story extends Component {
    render() {
        return (
            <article className="post">
                <header>
                    <div className="title">
                        <h2><a href="single.html">{ this.props.story.get('title') }</a></h2>
                        <p>Lorem ipsum dolor amet nullam consequat etiam feugiat</p>
                    </div>
                    <div className="meta">
                        <time className="published" dateTime="2015-11-01">November 1, 2015</time>
                        <a href="#" className="author"><span className="name">Jane Doe</span><img src="images/avatar.jpg" alt="" /></a>
                    </div>
                </header>
                <a href="single.html" className="image featured"><img src="images/pic01.jpg" alt="" /></a>
                <p>{ this.props.story.get('body') }</p>
                <footer>
                    <ul className="actions">
                        <li><Link to={`/story/${this.props.story.get('id')}`} className="button large">Continue Reading</Link></li>
                    </ul>
                    <ul className="stats">
                        <li><a href="#">General</a></li>
                        <li><a href="#" className="icon fa-heart">28</a></li>
                        <li><a href="#" className="icon fa-comment">128</a></li>
                    </ul>
                </footer>
            </article>
        )
    }
}

export default Story;
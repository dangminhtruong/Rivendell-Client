import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import config from '../../../config';

class Story extends Component {
    render() {
        return (
            <article className="post">
                <header>
                    <div className="title">
                        <h2><Link to="/">{ this.props.story.get('title') }</Link ></h2>
                        <p>Lorem ipsum dolor amet nullam consequat etiam feugiat</p>
                    </div>
                    <div className="meta">
                        <time className="published" dateTime="2015-11-01">November 1, 2015</time>
                        <Link to='/' className="author"><span className="name">{ this.props.story.get('username') }</span><img src="images/avatar.jpg" alt="" /></Link >
                    </div>
                </header>
                <Link to="/" className="image featured"><img src={`${config.BASE_API_URL}/public/images/pic01.jpg`} alt="" /></Link >
                <p>{ this.props.story.get('body') }</p>
                <footer>
                    <ul className="actions">
                        <li><Link to={`/story/${this.props.story.get('id')}`} className="button large">Continue Reading</Link></li>
                    </ul>
                    <ul className="stats">
                        <li><Link to='/'>General</Link ></li>
                        <li><Link to='/' className="icon fa-heart">28</Link ></li>
                        <li><Link to='/' className="icon fa-comment">128</Link ></li>
                    </ul>
                </footer>
            </article>
        )
    }
}

export default Story;
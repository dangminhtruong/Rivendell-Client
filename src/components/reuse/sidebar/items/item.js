import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../../../../config';

class TopFourItem extends Component{
    render(){
        return(
            <article className="mini-post">
                <header>
                    <h3>
                        <Link to={`/story/${this.props.detail.get('id')}`}>
                            { this.props.detail.get('title') }
                        </Link>
                    </h3>
                    <time className="published" dateTime="2015-10-17">October 17, 2015</time>
                    <Link to={`/story/${this.props.detail.get('id')}`} className="author">
                        <img src={`${config.BASE_API_URL}/public/images/avatar.jpg`} alt="" />
                    </Link>
                </header>
                <Link to={`/story/${this.props.detail.get('id')}`} className="image">
                    <img src={`${config.BASE_API_URL}/public/images/pic07.jpg`}alt="" />
                </Link>
            </article>
        )
    }
}

export default TopFourItem;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../../../../config';

class RandomItem extends Component{
    render(){
        return(
            <li>
                <article>
                    <header>
                        <h3><Link to={`/story/${this.props.info.get('id')}`}>{ this.props.info.get('title') }</Link></h3>
                        <time className="published" dateTime="2015-10-20">October 20, 2015</time>
                    </header>
                    <Link to={`/story/${this.props.info.get('id')}`} className="image"><img src={`${config.BASE_API_URL}/public/images/pic08.jpg`} alt="" /></Link>
                </article>
            </li>
        )
    }
}

export default RandomItem;
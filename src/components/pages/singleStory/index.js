import React, { Component } from 'react';
import Header from '../../reuse/header';
import Footer from '../../reuse/footer';
import { connect } from 'react-redux';
import { actFetchSingleStoryRequest } from '../../../store/actions/actions';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom'
import config from '../../../config';

class SingleStory extends Component {

    componentDidMount(){
        this.props.getSingleStory(this.props.match.params.id);
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div>
                <div id="main">
                    <Header/>
                    <article className="post">
                        <header>
                            <div className="title">
                                <h2><Link to="/">{ this.props.story.get('title') }</Link></h2>
                                <p>Lorem ipsum dolor amet nullam consequat etiam feugiat</p>
                            </div>
                            <div className="meta">
                                <time className="published" dateTime="2015-11-01">November 1, 2015</time>
                                <Link to="/" className="author"><span className="name">{ this.props.story.get('username') }</span>
                                    <img src={`${config.BASE_API_URL}/public/images/avatar.jpg`} alt="rivendell" />
                                </Link>
                            </div>
                        </header>
                        <span className="image featured">
                            <img src={`${config.BASE_API_URL}/public/images/pic01.jpg`} alt="rivendell" />
                        </span>
                        <p>{ this.props.story.get('body') }</p>
                        <div className="artical-links">
                            <ul>
                                <li><i className="fa fa-calendar" aria-hidden="true"></i>
                                    <span> June 30, 2015</span>
                                </li>
                                <li><i className="fa fa-comment-o" aria-hidden="true"></i>
                                    <span> 2 comments</span>
                                </li>
                                <li><i className="fa fa-eye" aria-hidden="true"></i>
                                    <span> 50 view posts</span>
                                </li>
                                <li><i className="fa fa-link" aria-hidden="true"></i>
                                    <span> Permalink</span>
                                </li>
                            </ul>
                        </div>
                    </article>
                </div>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        story : state.appStoriesReducer.get('story')
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getSingleStory: (id) => {
            dispatch(actFetchSingleStoryRequest(id));
        },
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleStory));
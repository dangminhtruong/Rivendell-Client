import React, { Component } from 'react';
import Header from '../../reuse/header';
import Footer from '../../reuse/footer';
import { connect } from 'react-redux';
import { actFetchSingleStoryRequest } from '../../../store/actions/actions';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom'

class SingleStory extends Component {

    componentDidMount(){
        this.props.getSingleStory(this.props.match.params.id);
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
                                <Link to="/" className="author"><span className="name">Jane Doe</span>
                                    <img src="images/avatar.jpg" alt="" />
                                </Link>
                            </div>
                        </header>
                        <span className="image featured"><img src="/images/pic01.jpg" alt="" /></span>
                        <p>{ this.props.story.get('body') }</p>
                        <footer>
                            <ul className="stats">
                                <li><Link to="/">General</Link></li>
                                <li><Link to="/" className="icon fa-heart">28</Link></li>
                                <li><Link to="/" className="icon fa-comment">128</Link></li>
                            </ul>
                        </footer>
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
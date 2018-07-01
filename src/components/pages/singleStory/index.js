import React, { Component } from 'react';
import Header from '../../reuse/header';
import Footer from '../../reuse/footer';
import { connect } from 'react-redux';
import { actFetchSingleStoryRequest } from '../../../store/actions/actions'

class SingleStory extends Component {

    componentDidMount(){
        console.log(this.props);
        this.props.getSingleStory(2);
    }

    render() {
        return (
            <div>
                <div id="main">
                    <Header/>
                    <article className="post">
                        <header>
                            <div className="title">
                                <h2><a href="#">Magna sed adipiscing</a></h2>
                                <p>Lorem ipsum dolor amet nullam consequat etiam feugiat</p>
                            </div>
                            <div className="meta">
                                <time className="published" dateTime="2015-11-01">November 1, 2015</time>
                                <a href="#" className="author"><span className="name">Jane Doe</span><img src="images/avatar.jpg" alt="" /></a>
                            </div>
                        </header>
                        <span className="image featured"><img src="/images/pic01.jpg" alt="" /></span>
                        <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                        <p>Nunc quis dui scelerisque, scelerisque urna ut, dapibus orci. Sed vitae condimentum lectus, ut imperdiet quam. Maecenas in justo ut nulla aliquam sodales vel at ligula. Sed blandit diam odio, sed fringilla lectus molestie sit amet. Praesent eu tortor viverra lorem mattis pulvinar feugiat in turpis. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce ullamcorper tellus sit amet mattis dignissim. Phasellus ut metus ligula. Curabitur nec leo turpis. Ut gravida purus quis erat pretium, sed pellentesque massa elementum. Fusce vestibulum porta augue, at mattis justo. Integer sed sapien fringilla, dapibus risus id, faucibus ante. Pellentesque mattis nunc sit amet tortor pellentesque, non placerat neque viverra. </p>
                        <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                        <p>Nunc quis dui scelerisque, scelerisque urna ut, dapibus orci. Sed vitae condimentum lectus, ut imperdiet quam. Maecenas in justo ut nulla aliquam sodales vel at ligula. Sed blandit diam odio, sed fringilla lectus molestie sit amet. Praesent eu tortor viverra lorem mattis pulvinar feugiat in turpis. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce ullamcorper tellus sit amet mattis dignissim. Phasellus ut metus ligula. Curabitur nec leo turpis. Ut gravida purus quis erat pretium, sed pellentesque massa elementum. Fusce vestibulum porta augue, at mattis justo. Integer sed sapien fringilla, dapibus risus id, faucibus ante. Pellentesque mattis nunc sit amet tortor pellentesque, non placerat neque viverra. </p>
                        <footer>
                            <ul className="stats">
                                <li><a href="#">General</a></li>
                                <li><a href="#" className="icon fa-heart">28</a></li>
                                <li><a href="#" className="icon fa-comment">128</a></li>
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


export default connect(mapStateToProps, mapDispatchToProps)(SingleStory);
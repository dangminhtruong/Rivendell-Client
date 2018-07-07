import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { atcGetSlideBarTopFourRequest } from '../../../store/actions/actions';
import TopFourItem from './items';
import config from '../../../config';

class Sidebar extends Component {

    componentDidMount(){
        this.props.getSlideBarTopFour();
    }

    render() {
        let topFour = [];
        if(this.props.slideBarTopFour.length  !== 1){
            topFour = this.props.slideBarTopFour.map((item, index) => {
                return (
                    <TopFourItem post = {item} key = { `it${index}` } detail = { item }/>
                )
            })
        }

        return (
            <section id="sidebar">
                <section id="intro">
                    <Link to='/' className="logo"><img src={`${config.BASE_API_URL}/public/images/logo.jpg`} alt="" /></Link>
                    <header>
                        <h2>Rivendell</h2>
                        <p>Another fine responsive site template by <Link to="http://html5up.net">HTML5 UP</Link></p>
                    </header>
                </section>


                <section>
                    <div className="mini-posts">
                       { topFour }
                    </div>
                </section>


                <section>
                    <ul className="posts">
                        <li>
                            <article>
                                <header>
                                    <h3><Link to="single.html">Lorem ipsum fermentum ut nisl vitae</Link></h3>
                                    <time className="published" dateTime="2015-10-20">October 20, 2015</time>
                                </header>
                                <Link to="single.html" className="image"><img src={`${config.BASE_API_URL}/public/images/pic08.jpg`} alt="" /></Link>
                            </article>
                        </li>
                        <li>
                            <article>
                                <header>
                                    <h3><Link to="single.html">Convallis maximus nisl mattis nunc id lorem</Link></h3>
                                    <time className="published" dateTime="2015-10-15">October 15, 2015</time>
                                </header>
                                <Link to="single.html" className="image"><img src={`${config.BASE_API_URL}/public/images/pic09.jpg`} alt="" /></Link>
                            </article>
                        </li>
                        <li>
                            <article>
                                <header>
                                    <h3><Link to="single.html">Euismod amet placerat vivamus porttitor</Link></h3>
                                    <time className="published" dateTime="2015-10-10">October 10, 2015</time>
                                </header>
                                <Link to="single.html" className="image"><img src={`${config.BASE_API_URL}/public/images/pic10.jpg`} alt="" /></Link>
                            </article>
                        </li>
                        <li>
                            <article>
                                <header>
                                    <h3><Link to="single.html">Magna enim accumsan tortor cursus ultricies</Link></h3>
                                    <time className="published" dateTime="2015-10-08">October 8, 2015</time>
                                </header>
                                <Link to="single.html" className="image"><img src={`${config.BASE_API_URL}/public/images/pic11.jpg`} alt="" /></Link>
                            </article>
                        </li>
                        <li>
                            <article>
                                <header>
                                    <h3><Link to="single.html">Congue ullam corper lorem ipsum dolor</Link></h3>
                                    <time className="published" dateTime="2015-10-06">October 7, 2015</time>
                                </header>
                                <Link to="single.html" className="image"><img src={`${config.BASE_API_URL}/public/images/pic12.jpg`} alt="" /></Link>
                            </article>
                        </li>
                    </ul>
                </section>


                <section className="blurb">
                    <h2>About</h2>
                    <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod amet placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at phasellus sed ultricies.</p>
                    <ul className="actions">
                        <li><Link to='/' className="button">Learn More</Link></li>
                    </ul>
                </section>


                <section id="footer">
                    <ul className="icons">
                        <li><Link to='/' className="fa-twitter"><span className="label">Twitter</span></Link></li>
                        <li><Link to='/' className="fa-facebook"><span className="label">Facebook</span></Link></li>
                        <li><Link to='/' className="fa-instagram"><span className="label">Instagram</span></Link></li>
                        <li><Link to='/' className="fa-rss"><span className="label">RSS</span></Link></li>
                        <li><Link to='/' className="fa-envelope"><span className="label">Email</span></Link></li>
                    </ul>
                    <p className="copyright">&copy; Untitled. Design: <Link to="http://html5up.net">HTML5 UP</Link>. Images: <Link to="http://unsplash.com">Unsplash</Link>.</p>
                </section>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        slideBarTopFour : state.appStoriesReducer.get('slideBarTopFour').toArray()
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getSlideBarTopFour: () => {
            dispatch(atcGetSlideBarTopFourRequest());
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
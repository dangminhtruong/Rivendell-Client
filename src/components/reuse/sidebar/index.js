import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TopFour from './items';
import config from '../../../config';
import Random from './random';

class Sidebar extends Component {
    render() {
        return (
            <section id="sidebar">
                <section id="intro">
                    <Link to='/' className="logo"><img src={`${config.BASE_API_URL}/public/images/logo.jpg`} alt="" /></Link>
                    <header>
                        <h2>Truong Dang</h2>
                        <p>Dang Minh Truong's Blog</p>
                    </header>
                </section>
                < TopFour />
                <Random/>
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



export default Sidebar;
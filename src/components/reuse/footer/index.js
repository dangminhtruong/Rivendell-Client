import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <section id="footer" style={{ textAlign: 'center' }}>
                <ul className="icons">
                    <li><Link to='/' className="fa-twitter"><span className="label">Twitter</span></Link></li>
                    <li><Link to='/' className="fa-facebook"><span className="label">Facebook</span></Link></li>
                    <li><Link to='/' className="fa-instagram"><span className="label">Instagram</span></Link></li>
                    <li><Link to='/' className="fa-rss"><span className="label">RSS</span></Link></li>
                    <li><Link to='/' className="fa-envelope"><span className="label">Email</span></Link></li>
                </ul>
                <p className="copyright">&copy; Untitled. Design: <Link to="http://html5up.net">HTML5 UP</Link>. Images: <Link to="http://unsplash.com">Unsplash</Link>.</p>
            </section>
        )
    }
}

export default Footer;
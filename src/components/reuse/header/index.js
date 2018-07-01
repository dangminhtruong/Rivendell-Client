import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <header id="header">
                <h1><Link to='/'>Rivendell</Link></h1>
                <nav className="links">
                    <ul>
                        <li><Link to="/">Lorem</Link></li>
                        <li><Link to="/">Ipsum</Link></li>
                        <li><Link to="/">Feugiat</Link></li>
                        <li><Link to="/">Tempus</Link></li>
                        <li><Link to="/">Adipiscing</Link></li>
                    </ul>
                </nav>
                <nav className="main">
                    <ul>
                        <li className="search">
                            <Link className="fa-search" to="/">Search</Link>
                            <form id="search" method="get" action="#">
                                <input type="text" name="query" placeholder="Search" />
                            </form>
                        </li>
                        <li className="menu">
                            <Link className="fa-bars" to="/">Menu</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <section id="menu">
                <section>
                    <form className="search" method="get" action="#">
                        <input type="text" name="query" placeholder="Search" />
                    </form>
                </section>
                <section>
                    <ul className="links">
                        <li>
                            <Link to="/">
                                <h3>Lorem ipsum</h3>
                                <p>Feugiat tempus veroeros dolor</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <h3>Dolor sit amet</h3>
                                <p>Sed vitae justo condimentum</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <h3>Feugiat veroeros</h3>
                                <p>Phasellus sed ultricies mi congue</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <h3>Etiam sed consequat</h3>
                                <p>Porta lectus amet ultricies</p>
                            </Link>
                        </li>
                    </ul>
                </section>


                <section>
                    <ul className="actions stacked">
                        <li><Link to="/" className="button large fit">Log In</Link></li>
                    </ul>
                </section>
            </section>
            </div>
        )
    }
}

export default Header;
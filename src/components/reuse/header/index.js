import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div>
                <header id="header">
                <h1><a href="index.html">Rivendell</a></h1>
                <nav className="links">
                    <ul>
                        <li><a href="#">Lorem</a></li>
                        <li><a href="#">Ipsum</a></li>
                        <li><a href="#">Feugiat</a></li>
                        <li><a href="#">Tempus</a></li>
                        <li><a href="#">Adipiscing</a></li>
                    </ul>
                </nav>
                <nav className="main">
                    <ul>
                        <li className="search">
                            <a className="fa-search" href="#search">Search</a>
                            <form id="search" method="get" action="#">
                                <input type="text" name="query" placeholder="Search" />
                            </form>
                        </li>
                        <li className="menu">
                            <a className="fa-bars" href="#menu">Menu</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <section id="menu">
                <section>
                    <form class="search" method="get" action="#">
                        <input type="text" name="query" placeholder="Search" />
                    </form>
                </section>
                <section>
                    <ul class="links">
                        <li>
                            <a href="#">
                                <h3>Lorem ipsum</h3>
                                <p>Feugiat tempus veroeros dolor</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <h3>Dolor sit amet</h3>
                                <p>Sed vitae justo condimentum</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <h3>Feugiat veroeros</h3>
                                <p>Phasellus sed ultricies mi congue</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <h3>Etiam sed consequat</h3>
                                <p>Porta lectus amet ultricies</p>
                            </a>
                        </li>
                    </ul>
                </section>


                <section>
                    <ul class="actions stacked">
                        <li><a href="#" class="button large fit">Log In</a></li>
                    </ul>
                </section>
            </section>
            </div>
        )
    }
}

export default Header;
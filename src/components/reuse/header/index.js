import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { actFetchCategoriesRequest } from '../../../store/actions/actions'
import { connect } from 'react-redux';

class Header extends Component {

    componentDidMount(){
        this.props.getCategories();
    }

    render() {
        let categories = [];
        if(this.props.categories.length !== 0){
            categories = this.props.categories.map((category, index) => {
                return (
                    <li key = { `ck${index}` }>
                        <Link to="/">
                            { category.get('name') }
                        </Link>
                    </li>
                )
            });
        }

        return (
            <div>
                <header id="header">
                <h1><Link to='/'>Rivendell</Link></h1>
                <nav className="links">
                    <ul>
                       { categories }
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
                    </ul>
                </nav>
            </header>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        categories : state.appStoriesReducer.get('categories').toArray()
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getCategories: () => {
            dispatch(actFetchCategoriesRequest());
        },
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(Header);
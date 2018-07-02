import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Paginate extends Component {
    render() {
        return (
            <ul className="actions pagination">
                <li><Link to="/" className="disabled button large previous">Previous Page</Link></li>
                <li><Link to="/" className="button large next">Next Page</Link></li>
            </ul>
        )
    }
}

export default Paginate;
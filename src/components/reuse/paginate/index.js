import React, { Component } from 'react';

class Paginate extends Component {
    render() {
        return (
            <ul className="actions pagination">
                <li><a href="" className="disabled button large previous">Previous Page</a></li>
                <li><a href="#" className="button large next">Next Page</a></li>
            </ul>
        )
    }
}

export default Paginate;
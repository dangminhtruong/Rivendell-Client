import React, { Component } from 'react';
import Post from '../../reuse/post'
import Paginate from '../../reuse/paginate';

class Stories extends Component {
    render() {
        return (
            <div id="main">
                <Post />
                <Post />
                <Post />
                <Paginate />
            </div>
        )
    }
}

export default Stories;
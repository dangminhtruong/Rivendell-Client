import React, { Component } from 'react';
import Stories from '../../components/pages/stories';
import Header from '../../components/reuse/header';
import Sidebar from '../../components/reuse/sidebar';

class Story extends Component{
    render(){
        return(
            <div id="wrapper" style={{ marginTop: '10vh' }}>
                <Header />
                <Stories/>
                <Sidebar />
            </div>
        )
    }
}

export default Story;
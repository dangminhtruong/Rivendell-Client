import React, { Component } from 'react';
import SingleStory from '../../components/pages/singleStory';

class Story extends Component{
    render(){
        return(
            <div id="wrapper" style={{ marginTop: '10vh' }}>
                <SingleStory/>
            </div>
        )
    }
}

export default Story;
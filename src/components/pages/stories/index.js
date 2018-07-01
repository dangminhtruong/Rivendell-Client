import React, { Component } from 'react';
import Post from '../../reuse/post'
import Paginate from '../../reuse/paginate';
import { connect } from 'react-redux';
import { actFetchStoriesRequest } from '../../../store/actions/actions'

class Stories extends Component {
    componentDidMount(){
        this.props.getListPost();
    }
    render() {
        console.log(this.props.stories);
        let storyList;
        if(this.props.stories){
            storyList =this.props.stories.map((post, index) => {
                return (<Post key = { index} post = { post }/>)
            });
        }
        return (
            <div id="main">
                { storyList }
                <Paginate />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        stories : state.appStoriesReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getListPost: () => {
            dispatch(actFetchStoriesRequest());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stories);
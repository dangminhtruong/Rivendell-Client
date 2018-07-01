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
        let storyList;
        if(this.props.stories){
            storyList =this.props.stories.map((story, index) => {
                return (<Post key = { `p.${index}` } story = { story }/>)
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
        stories : state.appStoriesReducer.get('stories').toArray()
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
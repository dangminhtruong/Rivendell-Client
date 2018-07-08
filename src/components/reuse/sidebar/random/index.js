import React, { Component } from 'react';
import RandomItem from './item';
import { connect } from 'react-redux';
import { atcGetSlideBarRandomRequest } from '../../../../store/actions/actions';

class Random extends Component{
    componentDidMount(){
        this.props.getSlideBarRandom();
    }

    render(){
        let items;
        if(this.props.sideBarRandom.length !== 0){
            items = this.props.sideBarRandom.map((item, index) => {
                return(
                    <RandomItem info = { item } key = {`rand${index}`}/>
                )
            });
        }
        return(
            <section>
                <ul className="posts">
                    { items }
                </ul>
            </section>
        )
    }
}


const mapStateToProps = state => {
    return {
        sideBarRandom : state.appStoriesReducer.get('sideBarRandom').toArray()
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getSlideBarRandom: () => {
            dispatch(atcGetSlideBarRandomRequest());
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Random);
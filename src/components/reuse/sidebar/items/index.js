import React, { Component } from 'react';
import TopFourItem from './item';
import { connect } from 'react-redux';
import { atcGetSlideBarTopFourRequest } from '../../../../store/actions/actions';

class TopFour extends Component {

    componentDidMount(){
        this.props.getSlideBarTopFour();
    }

    render() {
        let topFour = [];
        if (this.props.sideBarTopFour.length !== 0) {
            topFour = this.props.sideBarTopFour.map((item, index) => {
                return (
                    <TopFourItem post={item} key={`it${index}`} detail={item} />
                )
            })
        }
        return (
            <section>
                <div className="mini-posts">
                    {topFour}
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        sideBarTopFour : state.appStoriesReducer.get('sideBarTopFour').toArray()
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getSlideBarTopFour: () => {
            dispatch(atcGetSlideBarTopFourRequest());
        },
    }
}




export default  connect(mapStateToProps, mapDispatchToProps)(TopFour);
import * as Types from '../../actions/types';
import { fromJS } from 'immutable';

const initialState = fromJS({
    stories : [],
    story : {},
    categories : [],
    sideBarTopFour : [],
    sideBarRandom : []
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_STORIES:
            return state.set('stories', fromJS(action.stories));
        case Types.FETCH_SINGLE_STORY:
            return state.set('story', fromJS(action.story));
        case Types.FETCH_CATEGORIES:
            return state.set('categories', fromJS(action.categories));
        case Types.FETCH_SIDEBAR_TOP_FOUR:
            return state.set('sideBarTopFour', fromJS(action.sideBarTopFour));
        case Types.FETCH_SIDEBAR_RANDOM:
            return state.set('sideBarRandom', fromJS(action.sideBarRandom));
        default: return state;
    }
};

export default reducer;

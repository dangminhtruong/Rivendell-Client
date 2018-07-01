import * as Types from '../../actions/types';
import { fromJS } from 'immutable';

const initialState = fromJS({
    stories : [],
    story : {}
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_STORIES:
            return state.set('stories', fromJS(action.stories));
        case Types.FETCH_SINGLE_STORY:
            return state.set('story', fromJS(action.story));
        default: return state;
    }
};

export default reducer;

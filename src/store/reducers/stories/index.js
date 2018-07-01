import * as Types from '../../actions/types';

var initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_STORY:
            return [...action.stories];
        default: return [...state];
    }
};

export default reducer;

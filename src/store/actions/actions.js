import * as Types from './types';
import axios from '../../axios';

export const actFetchStoriesRequest = () => {
    return (dispatch) => {
        return axios.get('/client/stories/main')
        .then(res => {
            dispatch(actFetchBooks(res.data));
        })
    }
}

export const actFetchBooks = (stories) => {
    return {
        type: Types.FETCH_STORIES,
        stories
    }
}

export const actFetchSingleStoryRequest = (id) => {
    return (dispatch) => {
        return axios.get(`/client/story/${id}`)
        .then(res => {
            dispatch(actFetchStory(res.data));
        });
    }
}

export const actFetchStory = (story) => {
    return {
        type: Types.FETCH_SINGLE_STORY,
        story
    }
}

export const actFetchCategoriesRequest = () => {
    return (dispatch) => {
        return axios.get(`/client/categories`)
        .then(res => {
            dispatch(actFetchCategories(res.data));
        });
    }
}

export const actFetchCategories = (categories) => {
    return {
        type : Types.FETCH_CATEGORIES,
        categories
    }
}

export const atcGetSlideBarTopFourRequest = () => {
    return (dispatch) => {
        return axios.get(`/client/stories/top-four`)
        .then(res => {
            dispatch(actGetSlideBarTopFour(res.data));
        });
    }
}

export const actGetSlideBarTopFour = (sideBarTopFour) => {
    return {
        type : Types.FETCH_SIDEBAR_TOP_FOUR,
        sideBarTopFour
    }
}


export const atcGetSlideBarRandomRequest = () => {
    return (dispatch) => {
        return axios.get(`/client/stories/random`)
        .then(res => {
            dispatch(atcGetSlideBarRandom(res.data));
        });
    }
}

export const atcGetSlideBarRandom = (sideBarRandom) => {
    return {
        type : Types.FETCH_SIDEBAR_RANDOM,
        sideBarRandom
    }
}
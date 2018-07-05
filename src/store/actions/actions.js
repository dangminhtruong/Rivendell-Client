import * as Types from './types';
import axios from '../../axios';

export const actFetchStoriesRequest = () => {
    return (dispatch) => {
        return axios.get('/api/index/stories')
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
        return axios.get(`/api/index/story/${id}`)
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
        return axios.get(`/api/index/categories`)
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
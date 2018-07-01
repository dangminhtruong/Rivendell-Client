import * as Types from './types';
import axios from '../../axios';

export const actFetchStoriesRequest = () => {
    return (dispatch) => {
        return axios.get('/api/index/stories').then(res => {
            dispatch(actFetchBooks(res.data));
        })
    }
}

export const actFetchBooks = (stories) => {
    return {
        type: Types.FETCH_STORY,
        stories
    }
}
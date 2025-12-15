import {
    FETCH_POSTS_START,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_ERROR,
    FETCH_POSTS_FINISHED,
} from '../actions/postsActions.js';

const initialState = {
    posts: [],
    loading: true,
    error: null,
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_START:
            // return action.payload; // => 'en'
            // {
            //     initialState.loading = true;
            // }
            return {
                ...state,
                loading: true,
            };

        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload, // => [...1, ...2]
            };

        case FETCH_POSTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload, // => 'Error message'
            };

        case FETCH_POSTS_FINISHED:
            return {
                ...state,
                loading: false,
            };
        default:
            return state
    }
}

export default postsReducer;


// const myAction = {
//     type: 'SET_LANGUAGE',
//     payload: 'uk'
// };
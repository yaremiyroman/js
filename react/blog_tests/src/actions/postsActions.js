export const FETCH_POSTS_START = 'FETCH_POSTS_START';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';
export const FETCH_POSTS_FINISHED = 'FETCH_POSTS_FINISHED';

// action creators
export function fetchPostsStart() { return { type: FETCH_POSTS_START } };
export function fetchPostsSuccess(posts) { return { type: FETCH_POSTS_SUCCESS, payload: posts } };
export function fetchPostsError(error) { return { type: FETCH_POSTS_ERROR, payload: error } };
export function fetchPostsFinished() { return { type: FETCH_POSTS_FINISHED } };

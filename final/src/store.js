import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './slices/languageSlice';
import postsReducer from './slices/postsSlice';
import postReducer from './slices/postSlice';

const store = configureStore({
  reducer: {
    language: languageReducer,
    posts: postsReducer,
    post: postReducer,
  },
});

export default store;

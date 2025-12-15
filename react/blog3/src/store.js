import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './slices/languageSlice';
import postsReducer from './slices/postsSlice';
import postReducer from './slices/postSlice';
import reduxFormSliceReducer from './slices/reduxFormSlice';
import formikFormSliceReducer from './slices/formikFormSlice';

const store = configureStore({
  reducer: {
    language: languageReducer,
    posts: postsReducer,
    post: postReducer,
    reduxForm: reduxFormSliceReducer,
    formikForm: formikFormSliceReducer,
  },
});

export default store;
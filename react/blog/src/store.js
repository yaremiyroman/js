import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './reducers/languageReducer.js';

const store = configureStore({
    reducer: {
        language: languageReducer,
    }
});

export default store;

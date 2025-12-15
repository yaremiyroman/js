import { createSlice } from '@reduxjs/toolkit';

const initialState = 'en';

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state, action) => action.payload
    }
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;

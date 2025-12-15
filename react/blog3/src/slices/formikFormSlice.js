import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const formikFormSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setFormFormikData: (state, action) => action.payload
    }
});

export const { setFormFormikData } = formikFormSlice.actions;
export default formikFormSlice.reducer;

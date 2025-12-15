import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const reduxFormSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setFormData: (state, action) => action.payload
    }
});

export const { setFormData } = reduxFormSlice.actions;
export default reduxFormSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getPost } from '../api/requests';

export const fetchPost = createAsyncThunk('post/fetchPost', async (id) => {
    const response = await getPost(id);
    return response;
});

const initialState = {
    post: {},
    status: 'idle',
    error: null,
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPost.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchPost.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.post = action.payload;
            })
            .addCase(fetchPost.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { setLanguage } = postSlice.actions;
export default postSlice.reducer;

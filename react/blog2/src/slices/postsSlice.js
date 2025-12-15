import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getPosts } from '../api/requests';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await getPosts();
    return response;
});


const initialState = {
    posts: [],
    status: 'idle',
    error: null,
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { setLanguage } = postsSlice.actions;
export default postsSlice.reducer;

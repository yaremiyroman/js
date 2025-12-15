import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPosts } from '../api/requests';

const initialState = {
    posts: [],
    state: 'idle',
    error: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await getPosts();

    return response;
});


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.state = 'loading';
                state.error = null; // => 'Error message'
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.state = 'done';
                state.posts =
                    action.payload; // => [...1, ...2]
                state.error = null; // => 'Error message'
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.state = 'done';
                state.error = action.error.message; // => 'Error message'
            })
    }
});

export default postsSlice.reducer;

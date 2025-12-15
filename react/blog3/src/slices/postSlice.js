import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPost } from '../api/requests';

const initialState = {
    post: {},
    state: 'idle',
    error: null,
};

export const fetchPost = createAsyncThunk('post/fetchPost', async (id) => {
    const response = await getPost(id);

    return response;
});

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPost.pending, (state) => {
                state.state = 'loading';
                state.error = null; // => 'Error message'
            })
            .addCase(fetchPost.fulfilled, (state, action) => {
                state.state = 'done';
                state.post = action.payload; // => [...1, ...2]
                state.error = null; // => 'Error message'
            })
            .addCase(fetchPost.rejected, (state, action) => {
                state.state = 'done';
                state.error = action.error.message; // => 'Error message'
            })
    }
});

export default postSlice.reducer;

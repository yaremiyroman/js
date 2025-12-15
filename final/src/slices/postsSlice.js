import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getPosts, addPost, putPost, deletePost } from '../api/requests';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await getPosts();
    return response;
});

export const createPost = createAsyncThunk(
    'posts/createPosts',
    async (postData) => {
        const response = await addPost(postData);

        return response;
    }
);

export const updatePost = createAsyncThunk(
    'posts/updatePosts',
    async ({ postId, updatedPostData }) => {
        const response = await putPost(postId, updatedPostData);

        return response;
    }
);

export const removePost = createAsyncThunk(
    'posts/removePosts',
    async (postId) => {
        const response = await deletePost(postId);

        return response;
    }
);

const initialState = {
    posts: [],
    status: 'idle',
    error: null,
    freshPostID: null,
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        clearFreshPostID: (state, action) => {
            state.freshPostID = null;
        },
    },
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

        builder
            .addCase(createPost.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.status = 'succeeded';

                state.freshPostID = action.payload.id;
            })
            .addCase(createPost.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });

        builder
            .addCase(updatePost.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                state.status = 'succeeded';

                state.freshPostID = action.payload.id;
            })
            .addCase(updatePost.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });

        builder
            .addCase(removePost.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(removePost.fulfilled, (state, action) => {
                state.status = 'succeeded';

                let allPosts = state.posts;

                allPosts = state.posts.filter(post => post.id !== action.payload.id);

                state.posts = allPosts;

            })
            .addCase(removePost.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { clearFreshPostID } = postsSlice.actions;
export default postsSlice.reducer;

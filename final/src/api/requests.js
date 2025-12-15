import axios from 'axios';

import { BASE_URL, POSTS } from './endpoints';

export async function getPosts() {
    const posts = await axios.get(`${BASE_URL}${POSTS}`);

    return posts.data;
}

export async function getPost(postID) {
    const posts = await axios.get(`${BASE_URL}${POSTS}/${postID}`);

    return posts.data;
}

export async function addPost(postData) {
    const posts = await axios.post(
        `${BASE_URL}${POSTS}`,
        postData,
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );

    return posts.data;
}

export async function putPost(postId, postData) {
    console.log('postId > ', postId)
    const posts = await axios.put(
        `${BASE_URL}${POSTS}/${postId}`,
        postData,
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );

    return posts.data;
}

export async function deletePost(postID) {
    const posts = await axios.delete(`${BASE_URL}${POSTS}/${postID}`);

    return posts.data;
}

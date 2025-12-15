import axios from 'axios';

import { BASE_URL, POSTS } from './endpoints';

export async function getPosts() {
    const posts = await axios.put(`${BASE_URL}${POSTS}`);

    return posts.data;
}

export async function getPost(postID) {
    const posts = await axios.get(`${BASE_URL}${POSTS}/${postID}`);

    return posts.data;
}




https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods?val1=edit1&val2=edit2 // GET -> read


https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods?val1=edit1&val2=edit2  // POST  -> create

// payload: = {
//     "key1": "val1",
//     "key2": "val2",
// }


// PUT -> udpate
// DELETE -> DELTE


// crud



// get put post delete
http://myuerls.com/posts
http://myuerls.com/posts-delete/:id
http://myuerls.com/posts-update/payload?val1=val2


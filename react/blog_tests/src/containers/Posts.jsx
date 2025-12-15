import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import {
  Loader,
  ErrorMessage,
  PostPreview,
} from '../components';
import { getPosts } from '../api/requests';

import {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsError,
  fetchPostsFinished,
} from '../actions/postsActions';

import { fetchPosts } from '../slices/postsSlice';

const PostsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Greeting = styled.h1`
  font-size: 44px;
  text-align: center;
  margin-bottom: 20px;
`;

const Posts = () => {
  const postsState = useSelector(state => state.posts);
  const dispatch = useDispatch();
  console.log('postsState > ', postsState);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (postsState.loading) <Loader />;

  if (postsState.error) return <ErrorMessage />

  return (
    <>
      <PostsContainer>
        {postsState.posts.map(({ id, title, body }) =>
          <PostPreview
            key={id}
            postID={id}
            title={title}
            body={body}
          />
        )}
      </PostsContainer>
    </>
  )
};

export default Posts;

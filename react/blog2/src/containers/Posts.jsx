import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import {
  Loader,
  ErrorMessage,
  PostPreview,
} from '../components';

import { fetchPosts } from '../slices/postsSlice';

const PostsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Posts = () => {
  const postsState = useSelector(state => state.posts);
  const dispatch = useDispatch();

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

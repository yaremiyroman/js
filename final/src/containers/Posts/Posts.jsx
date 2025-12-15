import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import {
  Loader,
  ErrorMessage,
  PostPreview,
  RecentPosts,
  Sidebar,
  Messages,
} from '../../components';

import useLanguage from '../../hooks/useLanguage.js';

import { fetchPosts, removePost } from '../../slices/postsSlice';

import { mobile } from '../../breakpoints.js';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: ${mobile}px) {
    flex-direction: column-reverse;
  }
`;

const PostsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 75%;

  @media (max-width: ${mobile}px) {
    max-width: 100%;
  }
`;

const Posts = () => {
  const postsState = useSelector(state => state.posts);
  const dispatch = useDispatch();
  // const t = useLanguage();


  useEffect(() => {
    dispatch(fetchPosts());
  }, []);


  const removePostById = (postId) => {
    dispatch(removePost(postId));
  }

  const pageHead = (
    <Helmet>
      <title>Posts</title>
    </Helmet>
  );

  if (!!pageHead && !postsState.posts.length) {
    return (
      <>
        {pageHead}
      </>
    );
  }

  if (postsState.status == 'loading') return <Loader />;

  if (postsState.error) return <ErrorMessage />

  return (
    <Container>
      {pageHead}
      <PostsContainer>
        {postsState.posts.length && postsState.posts.map(({ id, title, body }) =>
          <PostPreview
            key={id}
            postID={id}
            title={title}
            body={body}
            removePostHandler={removePostById}
          />
        )}
      </PostsContainer>
      <Sidebar>
        <Messages />
        <RecentPosts />
      </Sidebar>
    </Container>
  )
};

export default Posts;

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import { fetchPost } from '../slices/postSlice';

import {
  Loader,
  ErrorMessage,
  Title,
} from '../components';

import { getPost } from '../api/requests';

const PostContainer = styled.div`
`;

const PostBody = styled.div`
  margin-top: 20px;
`;

const Post = () => {
  const postState = useSelector(state => state.post);
  const dispatch = useDispatch();

  const params = useParams(); // Отримання параметрів з URL

  useEffect(() => {
    console.log('11 > ');
    dispatch(fetchPost(params.id));
  }, []);

  console.log('postState > ', postState);

  return (
    <PostContainer>
      <Title>{postState.post.title}</Title>
      <PostBody>{postState.post.body}</PostBody>
    </PostContainer>
  );
};

export default Post;

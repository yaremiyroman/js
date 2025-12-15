import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import { fetchPost } from '../../slices/postSlice';
import { clearFreshPostID } from '../../slices/postsSlice.js';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  Title,
} from '../../components';

import { FaBeer, FaBluetooth, FaWifi } from 'react-icons/fa';
import { MdFace } from 'react-icons/md';

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
    dispatch(clearFreshPostID());
  }, []);

  useEffect(() => {
    dispatch(fetchPost(params.id));
  }, []);

  const notify = () => {
    toast('Це приклад повідомлення!'); // Функція для відображення тосту

    setTimeout(() => {
      toast('Це приклад повідомлення 2!'); // Функція для відображення тосту
    }, 2000);
  };
  return (
    <>
      <PostContainer>
        <Title>{postState.post.title}</Title>
        <PostBody>{postState.post.body}</PostBody>
      </PostContainer>
      <ToastContainer />
    </>
  );
};

export default Post;

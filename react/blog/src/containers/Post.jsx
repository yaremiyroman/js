import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

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
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const params = useParams(); // Отримання параметрів з URL
  
  useEffect(() => {
    try {
      getPost(params.id).then(post => {
        setPost(post);
      });
    } catch (error) {
      setError('Помилка отримання даних: ', error);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) return <Loader />;

  if (error) return (<ErrorMessage />);

  return (
    <PostContainer>
      <Title>{post.title}</Title>
      <PostBody>{post.body}</PostBody>
    </PostContainer>
  );
};

export default Post;

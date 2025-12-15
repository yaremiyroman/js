import { useState, useEffect } from 'react';

import  {useDispatch, useSelector} from 'react-redux';

import useLanguage from '../hooks/useLanguage.jsx';

import styled from 'styled-components';

const PostsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

import {
  Loader,
  ErrorMessage,
  PostPreview,
} from '../components'

import { getPosts } from '../api/requests'

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const lang = useSelector(state => state.language);

  const { language, setLanguage, t } = useLanguage();

  console.log('lang >>> ', lang);

  useEffect(() => {
    try {
      getPosts().then(posts => {
        setPosts(posts);
      });
    } catch (error) {
      setError('Помилка отримання даних: ', error);
    } finally {
      setLoading(false);
    }
  }, []);


  if (loading) <Loader />;

  if (error) return <ErrorMessage />

  return (
    <PostsContainer>
      <button onClick={() => dispatch({type: 'SET_LANGUAGE', payload: 'en'})}>EN</button>
      <button onClick={() => dispatch({type: 'SET_LANGUAGE', payload: 'uk'})}>UK</button>
      {posts.map(({ id, title, body }) =>
        <PostPreview
          key={id}
          postID={id}
          title={title}
          body={body}
        />
      )}
    </PostsContainer>
  )
};

export default Posts;

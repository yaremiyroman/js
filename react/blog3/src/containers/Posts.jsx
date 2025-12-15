import { useEffect, useLayoutEffect, useState, useRef, use } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import {
  Loader,
  ErrorMessage,
  PostPreview,
} from '../components';
import { fetchPosts } from '../slices/postsSlice';
import useLanguage from '../hooks/useLanguage.js';

import { Typography } from 'antd';
const { Title } = Typography;


const Container = styled.div`
  h1.ant-typography {
    color: white;
    font-size: 44px;
    text-align: center;
    margin-bottom: 20px;
  }

  div.ant-row {
    justify-content: space-between;
  }

  div.ant-col {
    max-width: 48%;
  }
`;

const Posts = () => {
  const postsState = useSelector(state => state.posts);
  const dispatch = useDispatch();
  const t = useLanguage();



  // useState for force update
  const [, setForceUpdate] = useState(0);

  const rerender = () => {
    // console.log('Rerendering Posts component');
    setForceUpdate((prev) => prev + 1);
  }


  const [nowTime, setNowTime] = useState(null);


  const inputRef = useRef(null);

  const myStash = useRef(0);

  const renderCount = useRef(0);


  useEffect(() => {
    renderCount.current += 1;
    // console.log(`--- ${renderCount.current} ---`);
  });

  useEffect(() => {
    if (!postsState.posts.length) {
      // console.log('Fetching posts...');
      dispatch(fetchPosts());
    }
  }, []);



  useEffect(() => {
    setNowTime(new Date().toLocaleTimeString());

  }, []);

  useLayoutEffect(() => {
    // alert('useLayoutEffect component mounted');
  }, []);


  useEffect(() => {
    const handleResize = () => {
      // console.log('Window resized to:');
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      // console.log('Focusing input field on mount > ', inputRef.current);
      inputRef.current.focus();
    }
  });


  if (postsState.error !== null) return (<ErrorMessage errorText={postsState.error} />);

  if (postsState.state === 'loading') return <Loader />;


  // console.log('STASH > ', myStash.current);

  return (
    <Container>
      {/* <Title>{t('greeting')}</Title> */}
      <input type="text" placeholder="Focus on mount" ref={inputRef} />
      <button onClick={() => myStash.current++}>{myStash.current}</button>
      <button onClick={rerender}>RERENDER</button>
      <div>ПОточний час: {nowTime}</div>
      {/* <PostsContainer> */}
      <div>
        {postsState.posts.map(({ id, title, body }) => null
        )}
      </div>
      {/* </PostsContainer> */}


    </Container>
  )
};

export default Posts;

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { fetchPost } from '../slices/postSlice';
import {
  Loader,
  Title,
  ErrorMessage,
} from '../components';

const PostContainer = styled.div`
`;

const PostBody = styled.div`
  margin-top: 20px;
`;

const Post = () => {
  const { id } = useParams(); // Отримання параметрів з URL
  const postState = useSelector(state => state.post);
  const dispatch = useDispatch();

  // console.log('Post component rendered with params:', params);

  useEffect(() => {
    if (!postState.post.id || +postState.post.id !== +id) {
      console.log('postState loading > ');
      dispatch(fetchPost(id));
    }
  }, []);

  useEffect(() => {
    document.title = id ? `Post #${id}` : 'Post';
  }, [id]);

  if (postState.error !== null) return (<ErrorMessage errorText={postState.error} />);

  if (postState.state === 'loading') return <Loader />;

  if (+postState.post.id !== +id) {
    return <Loader />;
  }

  return (
    <PostContainer>
      <Title>{postState.post.title}</Title>
      <PostBody>{postState.post.body}</PostBody>
    </PostContainer>
  );
};

export default Post;

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { updatePost } from '../../slices/postsSlice';
import { fetchPost } from '../../slices/postSlice';

const PostContainer = styled.form`
   display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 50%;
    margin: 0 auto;

    input,
    textarea {
      margin-bottom: 20px;
    }
`;

const EditPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const postState = useSelector(state => state.post);
  const freshPostID = useSelector(state => state.posts.freshPostID);

  const dispatch = useDispatch();

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (freshPostID)
      navigate(`/post/${freshPostID}`);
  }, [freshPostID, navigate]);

  useEffect(() => {
    dispatch(fetchPost(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    setTitle(postState.post.title);
    setBody(postState.post.body);
  }, [postState.post]);

  const handlePostSubmit = (e) => {
    e.preventDefault();

    dispatch(updatePost({ postId: params.id, updatedPostData: { title, body } }));
  }

  return (
    <PostContainer onSubmit={handlePostSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        type="text"
        name="title"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <button type="submit">Оновити</button>
    </PostContainer>
  );
};

export default EditPost;

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { createPost } from '../../slices/postsSlice';

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

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const freshPostID = useSelector(state => state.posts.freshPostID);

  useEffect(() => {
    if (freshPostID)
      navigate(`/post/${freshPostID}`);
  }, [freshPostID, navigate]);

  const handlePostSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost({ title, body }));
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
      <button type="submit">Додати</button>
    </PostContainer>
  );
};

export default AddPost;

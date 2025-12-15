import { Link } from 'react-router';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 48%;
  text-align: center;
  border: 1px solid palevioletred;
  padding: 5px;
`;

const Title = styled.a`
  font-size: 20px;
  font-wight: bold;
  margin-bottom: 5px;
  width: 100%;
`;

const Body = styled.p`
  font-size: 14px;
  opacity: 0.8;
`;

const PostPreview = ({ title, body, postID }) => {
  return (
    <Container>
      <Title to={`/post/${postID}`}>{title}</Title>
      <Body>{body}</Body>
    </Container>
  );
};

export default PostPreview;

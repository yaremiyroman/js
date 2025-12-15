import { Logo, MainMenu } from './';
import { useSelector, useDispatch } from "react-redux";

import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;
`;

const RecentPosts = () => {
  const recentPosts = useSelector(state => state.posts.posts.slice(0, 3));

  return (
    <Container>
      {recentPosts.map(({ id, title }) => (
        <div key={id}>
          <h4>{title}</h4>
        </div>
      ))}
    </Container>
  );
};

export default RecentPosts;

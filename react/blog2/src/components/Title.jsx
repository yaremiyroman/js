
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-size: 40px;
`;

const Title = ({ children }) => {
  return (
    <StyledTitle>{children}</StyledTitle>
  );
};

export default Title;

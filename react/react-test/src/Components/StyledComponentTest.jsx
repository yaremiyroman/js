import { useState } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

const Container = styled.div`
  background: ${(props) => props.color || 'pink'};
  margin: 20px;
  padding: ${(props) => props.padding || '30px'};
`;

const Title = styled.h1`
  font-size: 111px;
`;

const SubTitle = styled(Title)`
  color: blue;
`;

const CallToAction = styled.button`
  background: green;

  &:hover {
    background: red;
  }
`;

const StyledComponentTest = () => {
  const [isPressed, setIsPressed] = useState(false);

  const btnClass = classNames({
    btn: true,
    'btn-pressed': isPressed,
  });

  return (
    <Container padding="40px" color="palegoldenrod">
      <Title>StyledComponentTestv</Title>
      <SubTitle>Another Title</SubTitle>
      <CallToAction
        className={btnClass}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
      >
        Click Me!
      </CallToAction>
    </Container>
  );
};

export default StyledComponentTest;

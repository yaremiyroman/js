import styled from 'styled-components';

const Title = styled.h1`
  margin: 40px 0;
  font-size: 72px;
`;

const Message = styled.p`
  margin: 10px 0;
  font-size: 36px;
`;

const Forbidden = () => {
  return (
    <>
      <Title>403</Title>
      <Message>Все пропало. Вам сюди не можна!</Message>
    </>
  );
};

export default Forbidden;

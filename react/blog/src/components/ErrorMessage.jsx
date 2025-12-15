import { Title } from './';

// console.log('Title > ', Title);

// import styled from 'styled-components';

// const ErrorTitle = styled(Title)`
//   color: red;
// `;

const ErrorMessage = ({ errorText }) => {
  return (
    <Title>{errorText}</Title>
  );
};

export default ErrorMessage;
 
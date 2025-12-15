import { Link } from 'react-router';


import { Col } from 'antd';
import { Typography } from 'antd';
const { Title, Paragraph } = Typography;

import styled from 'styled-components';

const Container = styled(Col)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 48%;
  text-align: center;
  border: 1px solid palevioletred;
  padding: 5px;

  h4.ant-typography {
    font-size: 20px;
    font-wight: bold;
    width: 100%;
    color: white;
    line-height: 1.15;
  }

  div.ant-typography {
    color: white;
    font-size: 14px;
    opacity: 0.8;
    line-height: 1.16;
  }
`;

const TitleLink = styled(Link)`
  width: 100%;
  margin-bottom: 5px;
`;

const PostPreview = ({ title, body, postID }) => {
  return (
    <Container span={12}>
      <TitleLink to={`/post/${postID}`}>
        <Title level={4}>
          {title}
        </Title>
      </TitleLink>
      <Paragraph>{body}</Paragraph>
    </Container>
  );
};

export default PostPreview;

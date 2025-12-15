import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const socket = io('http://localhost:4321/');

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const handleBatch = batch => {
      setMessages(prev => [...prev, ...batch]);
    }

    socket.on('messagesBatch', handleBatch);
  }, []);

  return (
    <Container>
      <h1>Messages count: {messages.length}</h1>
      <ul>
        {messages.map(({ id, name, body }, i) =>
          <li key={id + name + i}>{name}: {body}</li>
        )}
      </ul>
    </Container>
  );
};

export default Messages;

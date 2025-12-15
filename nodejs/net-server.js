const net = require('net');

const PORT = 5608;

const server = net.createServer((socket) => {
  console.log('Client connected');

  let receiveBytes = 0;
  let packetCount = 0;

  socket.on('data', (data) => {
    console.log('data.length > ', data.length);
    receiveBytes += data.length;
    packetCount++;
  });

  socket.on('end', () => {
    console.log('Передача завершена');
    console.log('Отримано байт:', receiveBytes);
    console.log('Кількість пакетів:', packetCount);
  });

  socket.on('error', (err) => {
    console.error('Socket error:', err);
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import axios from 'axios';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
    }
});

const BATCH_SIZE = 5;
const BATCH_INTERVAL = 3000;

const API_URL = 'http://localhost:8984/items';
const PORT = 4321;

async function fetchMessages() {
    const response = await axios.get(API_URL);

    return response.data;
}

io.on('connection', async (socket) => {
    let allMessages = [];
    let batchIndex = 0;

    try {
        allMessages = await fetchMessages();
    } catch (error) {
        console.error('Error: ', error);
    }

    function sendBatch() {
        if (batchIndex * BATCH_SIZE >= allMessages.length) return;

        const batch = allMessages.slice(
            batchIndex * BATCH_SIZE,
            (batchIndex + 1) * BATCH_SIZE,
        );

        socket.emit('messagesBatch', batch);

        batchIndex++;

        setTimeout(sendBatch, BATCH_INTERVAL);
    }

    sendBatch();
});

server.listen(PORT, () => {
    console.log(`SOCKET running on ${PORT}`);
})

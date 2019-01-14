import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8000');

const sendMessageToSocket = message => {
  socket.emit('newMessage', message);
};

export default sendMessageToSocket;

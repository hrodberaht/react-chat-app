import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8000');

const sendMessageToSocketIO = message => {
  socket.emit('newMessage', message);
};

export default sendMessageToSocketIO;

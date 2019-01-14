import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8000');

const connectToSocketIO = cb => {
  socket.on('messages', messages => cb(null, messages));
  socket.emit('getMessages');
};

export default connectToSocketIO;

const io = require('socket.io')();

const messages = [{ user: 'jo', text: 'hello' }, { user: 'jo', text: 'hello' }];

io.on('connection', client => {
  client.on('getMessages', () => {
    console.log('New user connected to chat');
    client.emit('messages', messages);
  });

  client.on('newMessage', message => {
    messages.push({ user: 'test', text: message });
    client.broadcast.emit('messages', messages);
  });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);

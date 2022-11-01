const { io } = require('../index');
// Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente conectado');
//   client.on('event', data => { /* … */ });
  client.on('disconnect', () => { 
    console.log('Cliente desconectado');
  });

  client.on('mensaje', (payload) => {
    console.log('Weeoon!', payload);

    io.emit('mensaje', { admin: 'Nuevo mensaje'});
  })

});
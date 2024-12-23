require('dotenv').config();
const express = require('express');
const http = require('http');  // Usamos http para manejar conexiones WebSocket
const socketIo = require('socket.io');  // Importamos socket.io
const db = require('./models');
const userRoutes = require('./routes/usuarioRoutes');

const app = express();
const server = http.createServer(app);  // Creamos un servidor HTTP a partir de Express
const io = socketIo(server);  // Inicializamos socket.io con el servidor HTTP

app.use(express.json());
app.use('/users', userRoutes);

// Conectar a la base de datos y levantar el servidor
const PORT = process.env.PORT || 3000;
db.sequelize.sync().then(() => {
  console.log('Conectado a la base de datos');

  // Escuchamos conexiones de socket.io
  io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado');

    // Emitir un mensaje al cliente cuando se conecte
    socket.emit('welcome', 'Bienvenido al servidor de WebSockets!');

    // Escuchar un evento del cliente
    socket.on('clientMessage', (message) => {
      console.log('Mensaje del cliente:', message);
    });

    // Desconectar al cliente
    socket.on('disconnect', () => {
      console.log('Cliente desconectado');
    });
  });

  // Iniciar el servidor
  server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.error('Error al conectar a la base de datos:', error);
});

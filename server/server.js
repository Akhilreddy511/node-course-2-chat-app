const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket)=>{
    console.log('new User connected');

    io.emit('newMessage',{
        from:'akhil',
        text:'hey whats up',
        createdAt:235674

    })

    socket.on('createEmail',(createdEmail)=>{
        console.log(createdEmail)
    })

    socket.on('createMessage',(message)=>{
        console.log('createMessage',message);
    })

    socket.on('disconnect',()=>{
        console.log('Disconnected form the client');
    })
})

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});

const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage,generateLocationMessage} = require('./utils/message');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket)=>{
    console.log('new User connected');

    socket.on('createEmail',(createdEmail)=>{
        console.log(createdEmail);
       
    })

    socket.emit('newMessage',generateMessage('Admin','well come to Chat Application'));

    socket.broadcast.emit('newMessage',{
        from:'Admin',
        text:'new user joined',
        createdAt: new Date().getTime() 
    })

    socket.on('createMessage',(message,callback)=>{
        console.log('createMessage',message);
        io.emit('newMessage',generateMessage(message.from,message.text));

        callback('This is from server');
      
      
        // socket.broadcast.emit('newMessage',{
        //     from:message.from,
        //     text:message.text,
        //     createdAt: new Date().getTime() 
        // })
    })

    socket.on('createLocationMessage',(croods)=>{
        io.emit('newLocationMessage',generateLocationMessage('Admin',croods.latitude ,croods.longitude));
    })

    socket.on('disconnect',()=>{
        console.log('Disconnected form the client');
    })
})

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});

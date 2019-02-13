var socket = io();

socket.on('connect',()=>{
    console.log('connected to the server');

    // socket.emit('createEmail',{
    //     to:'akhil@gmail.com',
    //     text:'hey hai'
    // })

    socket.emit('createMessage',{
        from:'akhil',
        text:'hey whats up',
    
    })
});

socket.on('disconnect',()=>{
    console.log('Disconnected form the server');
});

socket.on('newEmail',function(email){
    console.log(email);
})

socket.on('newMessage',(message)=>{
    console.log('newMessage',message);
})
var socket = io();

socket.on('connect',()=>{
    console.log('connected to the server');

});

socket.on('disconnect',()=>{
    console.log('Disconnected form the server');
});

socket.on('newEmail',function(email){
    console.log(email);
})

socket.on('newMessage',(message)=>{
    console.log('newMessage',message);
    
    var li = jQuery('<li></li>');

    li.text(`${message.from}: ${message.text} `);

    jQuery('#messages').append(li);
});


jQuery('#message-form').on('submit',function(e){
    e.preventDefault();

    socket.emit('createMessage',{
        from:'User',
        text: jQuery('[name=message]').val()
    },function(){

    })
})
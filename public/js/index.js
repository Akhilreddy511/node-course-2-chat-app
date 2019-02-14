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

socket.on('newLocationMessage',(message)=>{
    console.log(message);
    var li = jQuery('<li></li>');

    var a = jQuery('<a target="_blank">My current Location</a>');

    li.text(`${message.from}:`);
    a.attr('href',message.url);
  
    li.append(a);
    jQuery('#messages').append(li);

})


jQuery('#message-form').on('submit',function(e){
    e.preventDefault();

    var messageTextBox =jQuery('[name=message]');

    socket.emit('createMessage',{
        from:'User',
        text: messageTextBox.val()
    },function(){
        messageTextBox.val('')
    })
})

var locationButton = jQuery('#send-location');
locationButton.on('click',function(){
    if(!navigator.geolocation){
        return alert('Geoloction not supported by your browser.');
    }
    locationButton.attr('disabled','disabled').text('sending location...');

    navigator.geolocation.getCurrentPosition(function(position){
      locationButton.removeAttr('disabled').text('send location');
        console.log(position);
        socket.emit('createLocationMessage',{
            latitude:position.coords.latitude,
            longitude:position.coords.longitude
        });
        debugger;
    },function(){
        locationButton.removeAttr('disabled').text('send location');
        alert('unable to fetch the location');
    })
})
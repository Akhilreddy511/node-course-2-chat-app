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
debugger;
    var a = jQuery('<a target="_blank">My current Location</a>');

    li.text(`${message.from}:`);
    a.attr('href',message.url);
    debugger;
    li.append(a);
    jQuery('#messages').append(li);

})


jQuery('#message-form').on('submit',function(e){
    e.preventDefault();

    socket.emit('createMessage',{
        from:'User',
        text: jQuery('[name=message]').val()
    },function(){

    })
})

var locationButton = jQuery('#send-location');
locationButton.on('click',function(){
    if(!navigator.geolocation){
        return alert('Geoloction not supported by your browser.');
    }
    navigator.geolocation.getCurrentPosition(function(position){
        debugger;
        console.log(position);
        socket.emit('createLocationMessage',{
            latitude:position.coords.latitude,
            longitude:position.coords.longitude
        });
        debugger;
    },function(){
        alert('unable to fetch the location');
    })
})
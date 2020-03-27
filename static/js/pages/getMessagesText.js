let ui = {};

socket.emit('UI_strings');

socket.on('UI_strings', (messagesJson) => {
    ui = JSON.parse(messagesJson);
})
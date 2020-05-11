var socket = io();

// RECORDAR!!!! emit es para escribir y on para escuchar

socket.on('connect', function() {

    console.log('Conectado al servidor');

});

// escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'JoseM',
    mensaje: 'Hola Mundo'
}, function(resp) {

    console.log('Respuesta server: ', resp);

});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
})
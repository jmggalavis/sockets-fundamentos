const { io } = require('../server')

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    // RECORDAR!!!! emit es para escribir y on para escuchar
    client.on('disconnect', () => {

        console.log('Usuario desconectado');

    });

    // escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);



        // if (mensaje.usuario) { // Si no viene el usuario en el mensaje del navegador ...
        //     callback({
        //         resp: 'TODO SALIÓ BIEN!!'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIÓ MAL!!!!!!!'
        //     });
        // }
    })

});
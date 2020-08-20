

let button = document.querySelector('button');
let label = document.getElementById('lblNuevoTicket');


// Comando para establecer la conexión
var socket = io();


socket.on('connect', () => {
    console.log('Conectado al servidor');
});

socket.on('estadoActual', (resp) => {
    label.innerText = resp.actual
    console.log(resp);
});

socket.on('disconnect', () => {
    console.log('Desconectado al servidor');
});

button.addEventListener('click', () => {
    socket.emit('siguienteTicket', null, (siguienteTicket) => {
        label.innerText = siguienteTicket ;
    });
});




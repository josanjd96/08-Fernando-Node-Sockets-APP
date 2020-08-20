



// Comando para establecer la conexión
var socket = io();

socket.on('connect', () => {
    console.log('Conectado al servidor');
});
socket.on('disconnect', () => {
    console.log('Desconectado al servidor');
});


let searchParams = new URLSearchParams( window.location.search );

if ( !searchParams.has('escritorio') ) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

let escritorio = searchParams.get('escritorio');
let small = document.querySelector('small');

console.log( escritorio );

document.querySelector('h1').innerText = ( 'Escritorio: ' + escritorio);

document.querySelector('button').addEventListener('click', () => {

    socket.emit('atenderTicket', { escritorio: escritorio } , (resp) => {

        if ( resp === 'No hay tickets') {
            small.innerText = resp
            alert(resp);
            return;
        }

        small.innerText = ( 'Ticket: ' + resp.numero );

        }
    );


});



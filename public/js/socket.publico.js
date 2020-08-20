

let ticket1 = document.querySelector('#lblTicket1');
let escritorio1 = document.querySelector('#lblEscritorio1');

let ticket2 = document.querySelector('#lblTicket2');
let escritorio2 = document.querySelector('#lblEscritorio2');

let ticket3 = document.querySelector('#lblTicket3');
let escritorio3 = document.querySelector('#lblEscritorio3');

let ticket4 = document.querySelector('#lblTicket4');
let escritorio4 = document.querySelector('#lblEscritorio4');

let lblTickets = [ ticket1, ticket2, ticket3, ticket4 ];
let lblEscritorios = [ escritorio1, escritorio2, escritorio3, escritorio4 ];



// Comando para establecer la conexión -----------------------------------------
var socket = io();

socket.on('connect', () => {
    console.log('Conectado al servidor');
});
socket.on('disconnect', () => {
    console.log('Desconectado al servidor');
});

// -----------------------------------------------------------------------------


socket.on('estadoActual', (data) => {
    actualizarHTML(data.ultimos4);
});


socket.on('ultimos4', (data) => {
    let audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    actualizarHTML(data.ultimos4);
});


const actualizarHTML = ( ultimos4 ) => {
    for (let i = 0; i <= ultimos4.length -1 ; i++) {
        lblTickets[i].innerText = 'Ticket: ' + ultimos4[i].numero;
        lblEscritorios[i].innerText = 'Ticket: ' + ultimos4[i].escritorio;
    }
}
let activeMassage = '';



const list = document.querySelector('.custom-options');
const selectedElement = document.querySelector('.custom-select__trigger');
const links = document.getElementsByTagName("a");
const runButton = document.getElementById('run');
const menuButtons = document.querySelectorAll(".menuButton");
const pressure = document.querySelector(".am-hPa");



// domyślny status false
let isMassageRunning = false;
let massageStatus = false;

let listData = {};


let intensityLast = 3;
// Zmienne stanu masazu z backenu
let massageSequenceRunning = false;
let massageSequenceActive = false;


// console.log(document.title);

// document.getElementById('reset').addEventListener('click', () => {
//     socket.emit('reset_valve_block');
//     console.log('VB reset')

// })
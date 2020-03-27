//RUN button
const btn = document.querySelector('.onebutton');
//RUN button state
let state = false;

var socket = io.connect();

btn.addEventListener('click', () => {

    state = !state;

    if (state) {
      btn.classList.add('activeButton');
      socket.emit('massageOn');
      console.log('massageOn');

    } else {
      btn.classList.remove('activeButton');
      socket.emit('massageOff');
      console.log('massageOff');
    }
});
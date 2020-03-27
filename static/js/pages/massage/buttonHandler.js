const buttons = document.querySelectorAll('button');

// bistable buttons states array
let state = [false];



// for all of buttons on site 
buttons.forEach(element => {
  // add event listeners for all of the buttons
  element.addEventListener('touchstart', () => {
    //If button contains ID
    if (element.id) {

      if (element.value === 'monostable') {
        console.log(`${element.id}_start`);
        socket.emit(`${element.id}_start`);
      }

      if (element.value === 'bistable') {

        state[element.id] = !state[element.id];

        socket.emit(`${element.id}_${state[element.id]}`);
        console.log(`${element.id}_${state[element.id]}`);

        element.classList.toggle('activeButton');
      }
    }
  });

  element.addEventListener('touchend', () => {
    if (element.id) {
      if (element.value === 'monostable') {
        console.log(`${element.id}_stop`);
        socket.emit(`${element.id}_stop`);
      }
    }
  });
});
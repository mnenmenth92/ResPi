const buttons = document.querySelectorAll('button');

let actualButton = "";
let actualButtonID = ""
let buttonIDState = ""
// bistable buttons states array
let state = [false];

socket.on('connect', () => {
  socket.emit('my_event');
});

// for all of buttons on site 
buttons.forEach(element => {
  // add event listeners for all of the buttons
  element.addEventListener('touchstart', () => {
    popup.style.display = 'inline-block';

    element.classList.add("buttonActive");
    //If button contains ID
    if (element.id) {



      if (element.value === 'monostable') {
        console.log(`${element.id}_start`);
        actualButton = `${element.id}_start`;
        actualButtonID = element.id;
        buttonIDState = `${element.id}_start`;
        socket.emit(`${element.id}_start`);

        switch (actualButton) {
          case 'forward_start':
            showMessage(ui.lumbar_forward);
            break;
          case 'reward_start':
            showMessage(ui.lumbar_reward);
            break;
          case 'up_start':
            showMessage(ui.lumbar_up);
            break;
          case 'down_start':
            showMessage(ui.lumbar_down);
            break;
          case 'one_bladder_inflate_start':
            showMessage(ui.one_bladder_inflate_start);
            break;
          case 'one_bladder_deflate_start':
            showMessage(ui.one_bladder_deflate_start);
            break;

        }

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

    element.classList.remove("buttonActive");
    element.classList.remove("buttonActiveRed");
    popup.style.display = 'none';
    if (element.id) {
      if (element.value === 'monostable') {
        buttonIDState = `${element.id}_stop`;
        console.log(`${element.id}_stop`);
        socket.emit(`${element.id}_stop`);
      }
    }
    hideMessage();
  });
});
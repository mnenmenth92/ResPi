function optiventButtonHandle() {


  // console.log(`IsOptivent: ${isOptiventRunning}`)

  //==================================================================================
  //========================= Obsługa przycisku RUN ==================================
  //==================================================================================

  // Jeśli masaż zostaje wybrany i naciśnięty przycisk RUN - zostaje wysłana komenda
  // do backendu odpowiadająca nazwie przycisku z masażem który jest aktywny
  //----------------------------------------------------------------------------------
  optiventButton.addEventListener('touchstart', () => {

    if (!isOptiventRunning) {

      isOptiventRunning = true;


      optiventButton.textContent = "STOP";
      optiventButton.classList.add('activeButton');



      socket.emit('run_optivent')

    } else {

      isOptiventRunning = false;
      optiventButton.textContent = "START";
      optiventButton.classList.remove('activeButton');
      optiventButton.classList.add('waitButton');
      socket.emit('stop_optivent');

    }

  });
}

// function resolveAfter2seconds() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('resolved');
//       optiventButton.textContent = ui.optivent_button_text;
//       handleButtonAfterRestart();

//     }, 4000);
//   });
// }

// async function asyncCall() {
//   console.log('calling');
//   const result = await resolveAfter2seconds();
//   console.log(result);
// }

function handleButtonAfterRestart() {

  optiventButton.textContent = "START";

  // console.log(`Handle button: ${isOptiventRunning}`)

  if (isOptiventRunning) {

    optiventButton.textContent = "STOP";
    optiventButton.classList.add('activeButton');
  } else {

    optiventButton.textContent = "START";
    optiventButton.classList.remove('activeButton');
  }

  // console.log(`massageSequenceRunning: ${massageSequenceRunning}`);
  // console.log(`massageStatus: ${massageSequenceActive}`);
  // console.log(`AND: ${massageSequenceRunning && massageSequenceActive}`);
  // console.log(`XOR: ${xor(massageSequenceActive, massageSequenceRunning)}`);

}


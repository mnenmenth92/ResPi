socket.emit('optivent_status');
socket.emit('get_massages');

socket.on('optivent_status_resp', (serverData) => {

  isOptiventRunning = serverData.optivent_is_running;
  // console.log(`Event: ${isOptiventRunning}`);

  handleButtonAfterRestart();


});

socket.on('massages_resp', (serverData) => {

  massageSequenceRunning = serverData.massage_is_running;

  alertWhenMassageisRunning();
  // console.log(`Massage sequence Running(SEVER): ${massageSequenceRunning}`)
})
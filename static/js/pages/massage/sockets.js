//socket.on - odbior danych
//socket.emit - wysylanie danych
socket.emit('get_massages');

socket.on('connect', function () {

});

socket.on('Webpage_loaded', function () {
  // console.log("Webpage Loaded !");
})

socket.on('workerStop', function () {
  // console.log(`Massage Status: ${isMassageRunning}`);

  restore_default_view();
  // handleButtonAfterRestart();
  isMassageRunning = false;
});

socket.on('pressure', (serverData) => {
  // console.log(serverData);
  // pressure.textContent = `${serverData.pressure} hPa`;
});

socket.on('massages_resp', (serverData) => {


  // console.log(serverData.intensity);

  massageSequenceRunning = serverData.massage_is_running;
  massageSequenceActive = serverData.massage_active;

  // isMassageRunning = massageSequenceActive || massageSequenceRunning;


  // isMassageRunning = serverData.massage_is_running;
  // console.log(`Last massage status: ${isMassageRunning}`);

  runButtonHandle();

  massageListHandle(serverData);

  handleButtonAfterRestart();

  alertWhenMassage();

  listData = serverData;



  intensityLast = serverData.intensity;

  // console.log("Data downloaded");

  intensityHandle();

});
function intensityHandle() {

  //-------------  Download DOM elements -------------

  var intensity = document.getElementById("intensity");
  var intensityVal = document.getElementById("intensityVal");

  intensity.value = intensityLast;
  console.log(intensityLast);


  //---------------- SLIDER ---------------------

  // refresh intensity value
  intensityVal.innerHTML = intensity.value;
  intensity.oninput = function () {

    let intensityEventVal = this.value;
    intensityVal.innerHTML = this.value;

    if (intensityEventVal == 1) socket.emit('intensity1');
    else if (intensityEventVal == 2) socket.emit('intensity2');
    else if (intensityEventVal == 3) socket.emit('intensity3');
  }

  //-------------- RUN button Handle------------




};
let activeMassage = '';

var socket = io.connect();
const list = document.querySelector('.custom-options');
const selectedElement = document.querySelector('.custom-select__trigger');
const links = document.getElementsByTagName("a");
const runButton = document.getElementById('run');
const menuButtons = document.querySelectorAll(".menuButton");
const pressure = document.querySelector(".am-hPa");

// domyślny status false
let isMassageRunning = false;


activeMassage = document.querySelector('.custom-option.selected').textContent;

function restore_default_view() {
  runButton.textContent = "RUN";
  runButton.classList.remove('activeButton');
  links[0].setAttribute("href", "/lumbar.html");
  links[1].setAttribute("href", "/massage.html");
  links[2].setAttribute("href", "/sidesupport.html");
}


socket.on('connect', function () {

  socket.emit('get_massages');
});

socket.on('workerStop', function () {
  runButton.textContent = "RUN";
  runButton.classList.remove('activeButton');
  restore_default_view();
  isMassageRunning = false;
});

// !!!!!!!!!!!!!!!! Po zaladownaiu strony zczytac aktualna wartosc cisnienia 

socket.on('pressure', (data) => {
  console.log(data);
  pressure.textContent = `${data.pressure} hPa`;
})



socket.on('massages_resp', (data) => {

  console.log(data);
  //Pętla po każdym przycisku załadowanego z JSONa
  data.names.forEach((element, index) => {

    pressure.textContent = `${data.pressure} hPa`;

    // ============= LISTA ===========
    const item = `
    <span class="custom-option" data-value="${element}">${element}</span>
                `;
    const position = 'afterbegin';

    list.insertAdjacentHTML(position, item);

  });



  document.querySelector('.custom-select-wrapper').addEventListener('click', function () {
    this.querySelector('.custom-select').classList.toggle('open');
  });

  for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function () {

      if (!this.classList.contains('selected')) {
        this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
        this.classList.add('selected');
        this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
      }
      activeMassage = document.querySelector('.custom-option.selected').textContent;
    })
  }





  massageButtons = document.querySelectorAll('.massageButton');

  //==================================================================================
  //========================= Obsługa przycisku RUN ==================================
  //==================================================================================

  // Jeśli masaż zostaje wybrany i naciśnięty przycisk RUN - zostaje wysłana komenda
  // do backendu odpowiadająca nazwie przycisku z masażem który jest aktywny
  //----------------------------------------------------------------------------------



  runButton.addEventListener('touchstart', () => {

    isMassageRunning = !isMassageRunning;

    if (isMassageRunning) {
      runButton.textContent = "STOP";
      runButton.classList.add('activeButton');
      console.log(`${activeMassage}`);

      for (var i = 0; i < links.length; i++) {
        links[i].removeAttribute("href");
      }

      socket.emit('run_sequence', {
        "seq_type": `${activeMassage}`
      });

    } else {
      restore_default_view()
      socket.emit('terminate_massage');
    }
  });

  menuButtons.forEach((element) => {
    element.addEventListener('click', () => {
      if (isMassageRunning) openModal(modal);
    })
  })
});
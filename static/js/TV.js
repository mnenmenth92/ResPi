const socket = io.connect();
const btn_plus = document.querySelector('.plus_button');
const btn_minus = document.querySelector('.minus_button');
const btn_plus_rate = document.querySelector('.plus_rate');
const btn_minus_rate = document.querySelector('.minus_rate');
const btn_start = document.querySelector('.button_start');
const ind_val = document.querySelector('.current_value')
const ind_rate = document.querySelector('.current_rate')
const link_button = document.querySelector('.change_site');
var start_state = false

btn_plus.addEventListener('click', function () {
  console.log('tv inc')
  socket.emit('inc_tv');
});

btn_minus.addEventListener('click', function () {
  console.log('tv dec')
    socket.emit('dec_tv');
})


btn_plus_rate.addEventListener('click', function () {
console.log('tv rate inc')
  socket.emit('inc_tv_rate')
});

btn_minus_rate.addEventListener('click', function () {
  console.log('rate dec')
  socket.emit('dec_tv_rate')
})

btn_start.addEventListener('click', function () {
  console.log('START')

    start_state= !start_state;
  console.log(start_state)
    set_button_state(start_state)


})

link_button.addEventListener('click', function () {
  console.log('site changed')
  socket.emit('stop_action')
})

socket.on('tv_value', (data) => {
  console.log(data)
  ind_val.textContent  = data

});

socket.on('tv_rate', (data) => {
  ind_rate.textContent = data;
});

socket.on('start_status', (data) => {
  console.log('start status')
    console.log(data)
    set_button_state(data)
});


function set_button_state(state){
    start_state = state
  if(state){
    btn_start.classList.add('active');
  socket.emit('start_tv')
  btn_start.textContent = 'STOP'
  }
  else{
    btn_start.classList.remove('active');
    socket.emit('stop_action')
    btn_start.textContent = 'START'
    }

}
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

// increment TV mode value
btn_plus.addEventListener('click', function () {
  console.log('tv inc')
  socket.emit('inc_tv');
});

// decrement TV mode level
btn_minus.addEventListener('click', function () {
  console.log('tv dec')
    socket.emit('dec_tv');
})

// increment TV mode rate
btn_plus_rate.addEventListener('click', function () {
console.log('tv rate inc')
  socket.emit('inc_tv_rate')
});

// decrement TV mode rate
btn_minus_rate.addEventListener('click', function () {
  console.log('rate dec')
  socket.emit('dec_tv_rate')
})

// start TV mode
btn_start.addEventListener('click', function () {
  console.log('START')

    start_state= !start_state;
  console.log(start_state)
    set_button_state(start_state)


})

// change mode
link_button.addEventListener('click', function () {
  console.log('site changed')
  socket.emit('stop_action')
})

// get current TV value
socket.on('tv_value', (data) => {
  console.log(data)
  ind_val.textContent  = data

});

// get current TV rate
socket.on('tv_rate', (data) => {
  ind_rate.textContent = data;
});

// get status
socket.on('start_status', (data) => {
  console.log('start status')
    console.log(data)
    set_button_state(data)
});

// button handling
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
const socket = io.connect();
const btn_plus = document.querySelector('.plus_button');
const btn_minus = document.querySelector('.minus_button');
const btn_plus_rate = document.querySelector('.plus_rate');
const btn_minus_rate = document.querySelector('.minus_rate');
const btn_start = document.querySelector('.button_start');
const ind_val = document.querySelector('.current_value')
const ind_rate = document.querySelector('.current_rate')

btn_plus.addEventListener('click', function () {
  console.log('ac inc')
  socket.emit('inc_ac');
});

btn_minus.addEventListener('click', function () {
  console.log('ac dec')
    socket.emit('dec_ac');
})

btn_plus_rate.addEventListener('click', function () {
console.log('ac rate inc')
  socket.emit('inc_ac_rate')
});

btn_minus_rate.addEventListener('click', function () {
  console.log('rate dec')
  socket.emit('dec_ac_rate')
})

btn_start.addEventListener('click', function () {
  console.log('START')
  socket.emit('start_ac')
})

socket.on('ac_value', (data) => {
  console.log(data)
  ind_val.textContent  = data

});

socket.on('ac_rate', (data) => {
  ind_rate.textContent = data;
});

const socket = io.connect();
const btn_plus = document.querySelector('.plus_button');
const btn_minus = document.querySelector('.minus_button');
const btn_plus_rate = document.querySelector('.plus_rate');
const btn_minus_rate = document.querySelector('.minus_rate');
const btn_start = document.querySelector('.button_start');

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
  socket.emit('start_tv')
})
const btn_plus = document.querySelector('.plus_button');
const btn_minus = document.querySelector('.minus_button');
const btn_plus_rate = document.querySelector('.plus_rate');
const btn_minus_rate = document.querySelector('.minus_rate');
const btn_start = document.querySelector('.button_start');

btn_plus.addEventListener('click', function () {
  console.log('ac inc')
});

btn_minus.addEventListener('click', function () {
  console.log('ac dec')
})


btn_plus_rate.addEventListener('click', function () {
  console.log('rate inc')
});

btn_minus_rate.addEventListener('click', function () {
  console.log('rate dec')
})

btn_start.addEventListener('click', function () {
  console.log('START')
})
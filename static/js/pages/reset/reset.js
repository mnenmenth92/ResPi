var socket = io.connect();
const resetBtn = document.querySelector('.buttonReset');
const timeHTML = document.querySelector('.timer');
const timerText = document.querySelector('.timer-text');
const runApp = document.querySelector('.runApp')

resetBtn.addEventListener('touchend', () => {
    runApp.style.display = 'none';
    socket.emit('reset_valve_block');
    countdown();
})

let cnt = 20;

function countdown() {
    timerText.style.display = 'block';
    runApp.style.display = 'none';
    cnt--;
    timeHTML.textContent = cnt;

    const timer = setTimeout(countdown, 1000);

    if (cnt === 0) {
        clearTimeout(timer);
        console.log("Done");
        cnt = 20;
        timerText.style.display = 'none';
        runApp.style.display = 'block'
    }
}
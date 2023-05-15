
let minutes = 0;
let seconds = 0;


const timerEl = document.querySelector('#timer');
const messageEl = document.querySelector('#message');
const stopBtn = document.querySelector('#stop-btn');
const resetBtn = document.querySelector('#reset-btn');


function displayTime() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes === 5) {
      clearInterval(timerInterval);
      messageEl.textContent = 'Time is up';
    } else {
      messageEl.textContent = `${minutes} minute${minutes > 1 ? 's' : ''} passed`;
    }
  }
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  timerEl.textContent = `${formattedMinutes}:${formattedSeconds}`;
}

let timerInterval = setInterval(displayTime, 1000);

stopBtn.addEventListener('click', function() {
  clearInterval(timerInterval);
  messageEl.textContent = 'Timer stopped';
});

resetBtn.addEventListener('click', function() {
  clearInterval(timerInterval);
  minutes = 0;
  seconds = 0;
  timerInterval = setInterval(displayTime, 1000);
  messageEl.textContent = '';
});

let intervalId;
let seconds = 0;

function startTimer() {
  if (!intervalId) {
    intervalId = setInterval(updateTimer, 1000);
  }
}

function pauseTimer() {
  clearInterval(intervalId);
  intervalId = null;
}

function resetTimer() {
  pauseTimer();
  seconds = 0;
  updateTimerDisplay();
}

function updateTimer() {
  seconds++;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(remainingSeconds)}`;
  document.getElementById("timer").textContent = formattedTime;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

const currentTime = document.getElementById('current-time');

function updateTimeUTC(){
    currentTime.textContent = new Date().toUTCString();
}

updateTimeUTC();
setInterval(updateTimeUTC,100)
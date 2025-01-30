const currentTime = document.getElementById('current-time');

function updateTimeUTC(){
    currentTime.textContent = new Date().toUTCString();
}

setInterval(updateTimeUTC,100)
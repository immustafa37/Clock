function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    let day = now.getDate();
    let month = now.toLocaleString('default', { month: 'long' });
    let year = now.getFullYear();

    hours = hours % 12 || 12; // Convert to 12-hour format
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
    document.getElementById('ampm').innerText = ampm;
    document.getElementById('date').innerText = `${month} ${day}, ${year}`;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Run once at start
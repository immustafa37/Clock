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

    // Update Analog Clock
    let hourDegree = (hours % 12) * 30 + minutes * 0.5;
    let minuteDegree = minutes * 6;
    let secondDegree = seconds * 6;

    document.getElementById('hour-hand').style.transform = `rotate(${hourDegree}deg)`;
    document.getElementById('minute-hand').style.transform = `rotate(${minuteDegree}deg)`;
    document.getElementById('second-hand').style.transform = `rotate(${secondDegree}deg)`;

    // Change Clock Color Randomly
    document.querySelector('.clock').style.color = `hsl(${seconds * 6}, 100%, 50%)`;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Run once at start

// Toggle Light/Dark Mode
document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
});

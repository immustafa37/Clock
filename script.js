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

    // Change Clock Color Randomly for Dynamic Look
    document.querySelector('.clock').style.color = `hsl(${seconds * 6}, 100%, 50%)`;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Run once at start

// Theme Toggle
document.getElementById('themeToggle').addEventListener('click', function() {
    let body = document.body;

    // If body already has light or dark mode, toggle between them
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        this.innerText = "🌞 Light Mode";
    } else if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        this.innerText = "🌙 Dark Mode";
    } else {
        // Default: Toggle to Dark Mode first
        body.classList.add('dark-mode');
        this.innerText = "🌞 Light Mode";
    }
});

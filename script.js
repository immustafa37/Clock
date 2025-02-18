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
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Load theme from localStorage
if (localStorage.getItem('theme') === 'light-mode') {
    body.classList.add('light-mode');
    themeToggle.innerText = "🌙 Dark Mode";
} else {
    body.classList.add('dark-mode');
    themeToggle.innerText = "🌞 Light Mode";
}

themeToggle.addEventListener('click', function() {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeToggle.innerText = "🌞 Light Mode";
        localStorage.setItem('theme', 'dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeToggle.innerText = "🌙 Dark Mode";
        localStorage.setItem('theme', 'light-mode');
    }
});

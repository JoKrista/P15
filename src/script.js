const body = document.querySelector('body');
const modeToggle = document.getElementById('mode-toggle');
const modeStatus = document.getElementById('mode-status');
const modeImage = document.getElementById('modeImage');

//function for changing mode

function toggleMode() {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

}
//call the function
modeToggle.addEventListener('click', toggleMode);
//start out with light mode
body.classList.add('light-mode');

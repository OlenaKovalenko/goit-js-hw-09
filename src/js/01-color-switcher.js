const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
}

refs.startBtn.addEventListener('click', onStartClick);
refs.stopBtn.addEventListener('click', onStopClick);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

let id = null;

function onStartClick() {
    refs.startBtn.setAttribute("disabled", "disabled");
    id = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000)
    
}

function onStopClick() {
    clearInterval(id);
    refs.startBtn.removeAttribute("disabled");
}
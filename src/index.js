const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const refs = {
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
};

let timer = 0;

refs.btnStart.addEventListener('click', startChangeColor);

function startChangeColor(evt) {
  refs.btnStart.removeEventListener('click', startChangeColor);
  refs.btnStop.addEventListener('click', stopChangeColor);

  timer = setInterval(() => {
    refs.btnStart.removeEventListener('click', startChangeColor);
    refs.body.style.backgroundColor = colors[Math.floor(Math.random() * (colors.length + 1))];
  }, 1000);
}

function stopChangeColor() {
  refs.btnStop.removeEventListener('click', stopChangeColor);
  clearInterval(timer);
  refs.btnStart.addEventListener('click', startChangeColor);
}

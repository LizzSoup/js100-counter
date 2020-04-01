const lower = document.getElementById('lower');
const higher = document.getElementById('higher');
const counter = document.getElementById('counter');

let count = 0;

higher.addEventListener('click', add);
lower.addEventListener('click', subtract);

function add() {
  count++;
  counter.innerHTML = count;
}

function subtract() {
  count -= 1;
  counter.innerHTML = count;
}
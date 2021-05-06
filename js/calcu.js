const displayValorAnterior = document.getElementById('val-anterior');
const displayValorActual = document.getElementById('val-actual');
const btnsNums = document.querySelectorAll('.num');
const btnsOprs = document.querySelectorAll('.opr');

const display = new Display(displayValorAnterior, displayValorActual);

btnsNums.forEach(btn => {
    btn.addEventListener('click', () => display.agregarNum(btn.innerHTML));
});

btnsOprs.forEach(btn => {
    btn.addEventListener('click', () => display.digitar(btn.value));
});
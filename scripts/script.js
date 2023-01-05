const menu = document.getElementById('menu');
const close = document.getElementById('close');
const overlay = document.getElementById('overlay');
const root = document.getElementById('root');

menu.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    overlay.classList.add('flex');
});

close.addEventListener('click', () => {
    overlay.classList.add('hidden');
    overlay.classList.remove('flex');
});
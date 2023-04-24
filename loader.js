const loader = window.document.getElementById('loader');
const preloader = window.document.getElementById('preload');
const container = window.document.getElementById('container');
const whiteBg = window.document.getElementById('white-bg');

preloader.classList.add('hidden');
loader.classList.add('hidden');

function random() {
    return Math.floor(Math.random() * (10));
}

if (random() % 2 === 0) {
    preloader.classList.remove('hidden');
} else {
    loader.classList.remove('hidden');
}

window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('hidden');
        loader.classList.add('hidden');
        whiteBg.classList.add('hidden');
        container.classList.add('loaded')
    }, 1300);
});
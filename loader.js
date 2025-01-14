const preloader = window.document.getElementById('preload');
const container = window.document.getElementById('container');

window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
});

// function random() {
//     return Math.floor(Math.random() * (10));
// }

// if (random() % 2 === 0) {
//     preloader.classList.remove('hidden');
// } else {
// }

window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('hidden');
        container.classList.add('loaded')
    }, 1800);
});
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
const textArray = ['Raul Ospina', '@raminka13♐︎', '@raminka13⌘', '@raminka13✓', 'Raul Ospina'];

let interval = null;
const h1 = document.querySelector('#hacked-text');

function hackText() {
  let iteration = 0;
  clearInterval(interval);
  interval = setInterval(() => {
    h1.innerText = h1.innerText
      .split('')
      .map((letter, index) => {
        if (index < iteration) {
          return h1.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join('');

    if (iteration >= h1.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 54);
}

document.querySelector('h1').onmouseover = (event) => {
  hackText();
};

document.querySelector('h1').onmouseout = (event) => {
  h1.dataset.value = textArray[Math.floor(Math.random() * textArray.length)];
};
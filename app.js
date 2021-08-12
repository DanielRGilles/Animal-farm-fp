import {
  makeSoundAndChangeH1ForCat,
  makeSoundAndChangeH1ForDog,
  makeSoundAndChangeH1ForHorse
} from './utils.js';
// grab DOM elements

const horseEl = document.getElementById('horse-image');
const dogEl = document.getElementById('dog-image');
const catEl = document.getElementById('cat-image');


// set event listeners 

horseEl.addEventListener('click', () => {
  makeSoundAndChangeH1ForHorse(); // calling my function -- cooking the dish
});

dogEl.addEventListener('click', () => {
  makeSoundAndChangeH1ForDog();
});

catEl.addEventListener('click', () => {
  makeSoundAndChangeH1ForCat();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'c') {
    makeSoundAndChangeH1ForCat();
  }

  if (event.key === 'h') {
    makeSoundAndChangeH1ForHorse();
  }

  if (event.key === 'd') {
    makeSoundAndChangeH1ForDog();
  }
});
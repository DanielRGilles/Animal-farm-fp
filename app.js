
// grabbing everything I need from the dom below


const horseEl = document.getElementById('horse-image');
const dogEl = document.getElementById('dog-image');
const catEl = document.getElementById('cat-image');
const horseSound = document.getElementById('horse-sound');
const dogSound = document.getElementById('dog-sound');
const catSound = document.getElementById('cat-sound');
const h1El = document.getElementById('animal-name');


// creating my magical function

function makeSoundAndChangeH1(sound, animalName) {
  sound.play();
  h1El.textContent = animalName;
  setTimeout(() => {
    h1El.textContent = 'Animal Noises';
  }, 1500);
}

// set event listeners 

horseEl.addEventListener('click', () => {
  makeSoundAndChangeH1(horseSound, 'horse'); // calling my function 
});
// on click the horseSound  will be played and the 'horse' string will be put into animalName
dogEl.addEventListener('click', () => {
  makeSoundAndChangeH1(dogSound, 'dog');
});

catEl.addEventListener('click', () => {
  makeSoundAndChangeH1(catSound, 'cat');
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'c') {
    makeSoundAndChangeH1(catSound, 'cat');
  }

  if (event.key === 'h') {
    makeSoundAndChangeH1(horseSound, 'horse');
  }

  if (event.key === 'd') {
    makeSoundAndChangeH1(dogSound, 'dog');
  }
});
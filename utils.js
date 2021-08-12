// this file is for declaring functions. we also need to grab some DOM, because the functions depend on it. (they are impure)

// declaration -- writing recipe
const horseSound = document.getElementById('horse-sound');
const dogSound = document.getElementById('dog-sound');
const catSound = document.getElementById('cat-sound');
const h1El = document.getElementById('animal-name');

export function makeSoundAndChangeH1ForHorse() {
    horseSound.play();
    h1El.textContent = 'horse';
    // no return value needed. We don't need to store anything in a variable to use later
    // this is an IMPURE function. It has no arguments, not return value, and SIDE EFFECTS (mutations outside of the function)
}

export function makeSoundAndChangeH1ForDog() {
    dogSound.play();
    h1El.textContent = 'dog';
}

export function makeSoundAndChangeH1ForCat() {
    catSound.play();
    h1El.textContent = 'cat';
}
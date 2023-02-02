const refs = {
  input: document.querySelector('input '),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  collection: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', onCreateBtn);
refs.destroyBtn.addEventListener('click', onDestroyBtn);

function onCreateBtn() {
  createBoxes(refs.input.value);
}

function onDestroyBtn() {
  refs.collection.innerHTML = '';
  refs.input.value = '';
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const colorDiv = getRandomHexColor();
    const newEl = document.createElement('div');
    newEl.style.width = `${30 + i * 10}px`;
    newEl.style.height = `${30 + i * 10}px`;
    newEl.style.border = `2px solid ${colorDiv}`;
    newEl.style.margin = '10px';
    newEl.style.backgroundColor = `${colorDiv}`;

    refs.collection.append(newEl);
    
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

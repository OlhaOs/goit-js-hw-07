const nameEl = document.querySelector('#name-output');
const inputEl = document.querySelector('#name-input');

inputEl.addEventListener('input', onFillNameValue);

function onFillNameValue() {
  if (inputEl.value.trim() == '') {
    nameEl.textContent = 'Anonymous';
  } else {
    nameEl.textContent = inputEl.value;
  }
}


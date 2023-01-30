const inputEl = document.querySelector('#validation-input');
const LENGTH = inputEl.dataset.length;

let counter = 0;

inputEl.addEventListener('input', () => ++counter);
inputEl.addEventListener('blur', onCountSymbols);

function onCountSymbols() {
  if (counter === +LENGTH) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
}
// версія Сашки через event  та неcувору рівність, немає зайвої функції для вирахування к-ті символів введених//


// const inputEl = document.querySelector('#validation-input');
// const lenthEl = inputEl.dataset.length;
// inputEl.addEventListener('blur', onInputBlur);
// function onInputBlur(event) {
//   console.log(event);
//   if (event.currentTarget.value.length == lenthEl) {
//     console.log(typeof event.currentTarget.value.length);
//     console.log(typeof lenthEl);
//     event.currentTarget.classList.add('valid');
//     event.currentTarget.classList.remove('invalid');
//   } else {
//     event.currentTarget.classList.remove('valid');
//     event.currentTarget.classList.add('invalid');
//   }
// }

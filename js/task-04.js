const refs = {
  spanValue: document.querySelector('#value'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
};
let counterValue = 0;

refs.incrementBtn.addEventListener('click', clickOnIncrementBtn);
refs.decrementBtn.addEventListener('click', clickOnDecrementBtn);

function clickOnIncrementBtn() {
  refs.spanValue.textContent = ++counterValue;
}
function clickOnDecrementBtn() {
  refs.spanValue.textContent = --counterValue;
}

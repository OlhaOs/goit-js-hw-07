const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const listEl = document.querySelector('#ingredients');

// for (let i = 0; i < ingredients.length; i++) {
// const newListEl = document.createElement('li');
// newListEl.textContent = ingredients[i];
// listEl.append(newListEl);
// }
// console.log(listEl);

const newListEl = ingredients.map((ingridient) => {
  const newContentEl = document.createElement('li');
  newContentEl.textContent = ingridient;
 return newContentEl;
});

listEl.append(...newListEl);

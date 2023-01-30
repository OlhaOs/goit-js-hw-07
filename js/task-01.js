const categoriesEl = document.querySelector('#categories');
const countCategories = categoriesEl.children;
console.log(`Number of list elements is ${countCategories.length}`);

for (let i = 0; i < countCategories.length; i++) {
  console.log(`Category: ${countCategories[i].firstElementChild.innerHTML}`);
  console.log(
    `Number of elements: ${countCategories[i].lastElementChild.children.length}`
  );
}

// Це Сашкіна версія
// const catEl = document.querySelectorAll('.item');
// console.log('Number of categories:', catEl.length);

// for (let i = 0; i < catEl.length; i += 1) {
//   const haEl = catEl[i].firstElementChild.textContent;
//   console.log('Category:', haEl);
//   const liEl = catEl[i].lastElementChild;
//   const propEl = liEl.querySelectorAll('li');
//   console.log('Elements:', propEl.length);
// }
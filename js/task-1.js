const categories = document.querySelector('#categories');
const item = categories.querySelectorAll('.item');

console.log(`Number of categories: ${item.length}`);

item.forEach(category => {
  const getCategory = category.querySelector('h2');
  console.log(`Category: ${getCategory.textContent}`);

  const getlist = category.querySelector('ul');
  const getItem = getlist.querySelectorAll('li');
  console.log(`Elements: ${getItem.length}`);
});

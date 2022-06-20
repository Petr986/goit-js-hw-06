const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ulList = document.getElementById("ingredients");
const foodIngredients = ingredients.map((ingredient) => {
  let items = document.createElement("li");
  items.innerHTML = ingredient;
  items.classList.add("item");
  return items;
});

ulList.append(...foodIngredients)
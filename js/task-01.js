const items = document.querySelectorAll(".item")
console.log(`Number of categories:${items.length}`);

// const categoriesArray = [...items]
//   .map(
//     categories => `Categories: ${categories.children[0].textContent}
//     Elements: ${categories.children[1].children.length}`
//   )
//   .join("\n");
// console.log(categoriesArray);

[...items].forEach((item) => {
  console.log("Category:", item.children[0].textContent);
  console.log("Elements:", item.children[1].children.length);
});
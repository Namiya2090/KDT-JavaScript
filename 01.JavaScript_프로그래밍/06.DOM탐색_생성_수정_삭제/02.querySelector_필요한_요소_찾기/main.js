// id 속성이 notice인 요소
const selectionNotice = document.querySelector("#notice");
// class 속성이 item인 요소들
const selectionItems = document.querySelectorAll(".item");
// class 속성이 unknown인 요소
const selectionMissing = document.querySelector(".unknown");

if (selectionNotice) {
  const selectionHeading = selectionNotice.querySelector("h2");
  if (selectionHeading) console.log(selectionHeading.textContent);
}

console.log(selectionItems.length);
selectionItems.forEach((selectionItem) => {
  console.log(selectionItem.textContent.trim());
});

console.log(selectionMissing);

// id 속성이 proucts인 요소
const selectionProducts = document.querySelector("#products");

if (selectionProducts) {
  const selectionProductTitle = selectionProducts.querySelector("h2");
  if (selectionProductTitle) console.log(selectionProductTitle.textContent);
}

if (selectionProducts) {
  const soldOutItems = selectionProducts.querySelectorAll(".sold-out");
  console.log(soldOutItems.length);
  if (soldOutItems.length > 0) console.log(soldOutItems[0].textContent.trim());
}

const product = document.querySelector(".dataset-product");

if (product) {
  console.log(product.dataset.productId);
  console.log(typeof product.dataset.stockCount);

  // data-stock-count 속성 값의 자료형을 number로 변환 후 stock에 대입
  const stock = Number(product.dataset.stockCount);
  console.log(stock + 1);
  console.log(Boolean(product.dataset.selected));
  console.log(product.dataset.selected === "true");

  // product 요소의 data-stock-count 속성 값을 stock + 1로 지정
  product.dataset.stockCount = stock + 1;
  const stockLabel = product.querySelector(".stock-label");
  // stockLabel 요소의 텍스트를 지정
  stockLabel.textContent = `재고 ${product.dataset.stockCount}개`;
  console.log(product.getAttribute("data-stock-count"));

  // product 요소의 data-selected 속성을 삭제
  delete product.dataset.selected;
  console.log(product.dataset.selected);
}

// --------------------

const lessonCard = document.querySelector(".dataset-lesson-card");
const lessonState = document.querySelector(".dataset-lesson-state");

if (lessonCard && lessonState) {
  console.log(lessonCard.dataset.lessonId);
  console.log(lessonCard.dataset.open);

  // lessonCard 요소의 data-open 속성 값을 "true"로 지정
  lessonCard.dataset.open = "true";
  // lessonCard 요소의 data-open 속성의 값이 "true"인지 판별하는 변수
  const isOpen = lessonCard.dataset.open === "true";
  // lessonState 요소의 텍스트를 지정
  lessonState.textContent = isOpen ? "열림" : "닫힘";
  console.log(isOpen);
}

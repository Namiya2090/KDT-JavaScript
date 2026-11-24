class Product {
  constructor(title, price) {
    // 작성할 곳: 각 객체의 제목과 가격을 저장합니다.
    this.title = title;
    this.price = price;
  }

  getTotal(quantity) {
    // 작성할 곳: 이 상품의 가격과 수량을 곱해 반환합니다.
    return this.price * quantity;
  }
}

const notebook = new Product("노트", 3000);
const pen = new Product("펜", 1000);

console.log(notebook.title, notebook.price);
console.log(pen.title, pen.price);
notebook.price = 3500;
console.log(notebook.price, pen.price);
console.log(notebook.getTotal(2), pen.getTotal(2));

console.log(Object.hasOwn(notebook, "title"));
console.log(Object.hasOwn(notebook, "getTotal"));
console.log(notebook.getTotal === pen.getTotal);

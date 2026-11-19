// name, price, stock 속성을 가진 상품을 만들기
const product = { name: "노트", price: "3000", stock: "5" };

// 상품 이름과 가격을 출력
console.log("상품명: " + product.name);
console.log("상품 가격: " + product["price"]);

// 재고 변경 및 출력
product.stock = 4;
console.log("상품 재고: " + product.stock);

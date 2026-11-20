const order = [
  { name: "노트", price: 3000, quantity: 2 },
  { name: "펜", price: 1000, quantity: 3 },
];

// 1. total에 상품 금액 합계 저장
const total = order.reduce((acc, item) => {
  return acc + item.price;
}, 0);

// 2. count에 수량 합계 저장
const count = order.reduce((acc, item) => {
  return acc + item.quantity;
}, 0);

// 3. total과 count를 차례로 출력
console.log(`상품 총 금액: ${total}`);
console.log(`상품 총 수량: ${count}`);

const order = [
  { name: "노트", quantity: 2, stock: 3 },
  { name: "펜", quantity: 1, stock: 0 },
];

// 품절 항목이 하나라도 있는지 some으로 검사
const hasSoldout = order.some((item) => item.stock === 0);

// 수량이 양수이고 재고 이하인지 검사
const allValid = order.every(
  (item) => item.quantity > 0 && item.quantity <= item.stock,
);

// 빈 주문을 제외하는 canOrder를 작성
const canOrder = order.length > 0 && allValid;

console.log(hasSoldout);
console.log(allValid);
console.log(canOrder);

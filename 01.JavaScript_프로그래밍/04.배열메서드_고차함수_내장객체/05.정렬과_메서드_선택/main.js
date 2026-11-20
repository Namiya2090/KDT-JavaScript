const products = [
  { name: "노트", price: 3000 },
  { name: "펜", price: 1000 },
  { name: "파우치", price: 5000 },
];

// products를 slice로 복사해 sorted에 저장
const sorted = products.slice();

// sorted를 가격 오름차순으로 정렬
sorted.sort((prod1, prod2) => prod1.price - prod2.price);

// 두 배열에서 이름만 map으로 읽어 출력
console.log(products.map((prod) => prod.name));
console.log(sorted.map((prod) => prod.name));

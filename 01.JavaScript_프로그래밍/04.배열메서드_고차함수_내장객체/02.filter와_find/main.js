const products = [
  { id: 1, name: "메모 패드", stock: 3 },
  { id: 2, name: "펜", stock: 0 },
  { id: 3, name: "스티커", stock: 2 },
];
const wantedId = 3;

// stock > 0인 항목들을 available에 대입
const available = products.filter((product) => product.stock > 0);

// 찾고 싶은 상품을 selected에 저장
const selected = available.find((product) => product.id === wantedId);

// 없으면 안내하고, 있으면 이름을 출력하세요.
if (selected === undefined) console.log("상품을 찾지 못했습니다.");
else console.log(`상품명: ${selected.name}`);

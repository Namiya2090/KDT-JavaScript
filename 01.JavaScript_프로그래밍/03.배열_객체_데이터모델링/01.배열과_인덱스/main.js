const items = ["노트", "펜", "파우치"];

// 첫 상품과 마지막 상품 출력
console.log("First item: " + items[0]);
console.log("Last item: " + items[items.length - 1]);

// 품절된 두 번째 상품을 연필로 바꾸고 전체 목록 출력
items[1] = "연필";
console.log("전체 목록: " + items);

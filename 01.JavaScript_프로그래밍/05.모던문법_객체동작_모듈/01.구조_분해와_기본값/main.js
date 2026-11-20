const product = { title: "샘플 스티커", price: 0 };
const profile = undefined;

// 작성할 곳: 객체 구조 분해와 기본값을 사용합니다.
// 작성할 곳: nickname을 안전하게 읽습니다.

// product 객체에서 속성값을 구조 분해 할당
const { title: productTitle, price, tag = "일반" } = product;

// profile 객체가 존재하면 nickname을 가져오고, 없거나 null/undefined면 "방문자"를 할당
const nickname = profile?.nickname ?? "방문자";

console.log(productTitle);
console.log(price ?? 1000);
console.log(tag);
console.log(nickname);

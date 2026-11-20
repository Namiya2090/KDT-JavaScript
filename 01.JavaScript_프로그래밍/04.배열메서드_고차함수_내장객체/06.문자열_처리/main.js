const titles = ["JavaScript 노트", "CSS 카드", "HTML 스티커"];
const query = "  JAVASCRIPT  ";
const tagText = "HTML, CSS, JavaScript";

// 변수 query의 문자열의 앞뒤 공백을 제거 후 소문자로 변환
const normalizedQuery = query.trim().toLowerCase();

// titles 배열 항목 중 변수 normalizedQuery의 문자열을 포함한 항목 찾기
const found = titles.filter((title) =>
  title.toLowerCase().includes(normalizedQuery),
);

// 변수 tagText 문자열을 쉼표를 기준으로 쪼개고 앞뒤 공백을 제거 후 배열로 변환
const tags = tagText.split(",").map((tag) => tag.trim());

console.log(normalizedQuery);
console.log(found);
console.log(tags);
console.log(query);

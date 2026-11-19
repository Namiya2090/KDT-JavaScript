const tags = ["CSS", "JS", "CSS"];

// Set으로 중복 없애기
const unique = new Set(tags);

// 고유 태그 개수와 CSS, JS 포함 여부 출력
console.log("Unique tags count: " + unique.size);
console.log("Has CSS: " + unique.has("CSS"));
console.log("Has JS: " + unique.has("JS"));

// 빈 Map 생성 후 키에 설명 연결
const meanings = new Map();
meanings.set("CSS", "Cascading Style Sheet");
meanings.set("JS", "JavaScript");

// 키의 설명을 읽어 출력
console.log("CSS: " + meanings.get("CSS"));
console.log("JS: " + meanings.get("JS"));

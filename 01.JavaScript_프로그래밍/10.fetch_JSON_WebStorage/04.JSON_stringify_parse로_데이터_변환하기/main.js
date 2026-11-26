const text = '{"theme":"dark"}'; // JSON 형식의 문자열
const value = JSON.parse(text); // JavaScript 객체

console.log(typeof text, typeof value);
console.log(value.theme);

// --------------------

const original = { theme: "dark", font: { size: 18 } }; // JavaScript 객체
const copy = JSON.parse(JSON.stringify(original)); // original을 직렬화하고 다시 역직렬화
copy.font.size = 22;

console.log(original === copy);
console.log(original.font.size);
console.log(copy.font.size);

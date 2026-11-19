const original = { profile: { name: "보리" } };
const same = original;

// same을 통해 이름을 바꾸기
same.profile.name = "모모";

// original 객체와 same 객체의 name이 같은지 확인
console.log("Original: " + original.profile.name);
console.log("Same: " + same.profile.name);

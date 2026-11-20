const start = new Date(2026, 9, 31, 13, 0);
const end = new Date(2026, 9, 31, 15, 0);
const dayNames = ["일", "월", "화", "수", "목", "금", "토"];

const year = start.getFullYear();
const month = start.getMonth() + 1;
const date = start.getDate();
const dayName = dayNames[start.getDay()];
const hours = (end.getTime() - start.getTime()) / (1000 * 60 * 60);

console.log(`${year}년 ${month}월 ${date}일 ${dayName}요일`);
console.log(`시간 차이: ${hours}시간`);

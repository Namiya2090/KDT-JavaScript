// 첫 줄의 닫는 소괄호가 빠져 SyntaxError
// console.log("연습 시작"
console.log("연습 시작");
console.log("다음 문장");

// 찾을 수 없는 변수를 출력하려고 하므로 ReferenceError
const courseName = "JavaScript";
// console.log(courseTitle);
console.log(courseName);

// 없는 요소(null)를 찾아 동작을 요청했으므로 TypeError 발생
// const button = document.querySelector(".save-button");
const button = document.querySelector(".run-button");
button.addEventListener("click", () => {
  console.log("저장");
});

// 오류까지 이어진 함수 호출 기록 예시
function readStudent(student) {
  return student.name;
}
function showSelectedStudent() {
  return readStudent(null);
}
showSelectedStudent();

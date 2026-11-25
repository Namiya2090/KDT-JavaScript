const list = document.querySelector("#list");
const card = document.querySelector("#card");
const button = document.querySelector("#button");

// 이벤트가 발생한 요소의 아이디와 리스너가 연결된 요소의 아이디를 출력
function report(event) {
  console.log(event.target.id, event.currentTarget.id);
}

button.addEventListener("click", (event) => {
  report(event);
  // event.stopPropagation();
});

// 이벤트 버블링으로 인한 실행
card.addEventListener("click", report);
list.addEventListener("click", report);

let todos = []; // 할 일 객체의 배열
let nextId = 1; // 항목의 고유 번호

const form = document.querySelector(".todo-form");
const input = document.querySelector("#todo-title");
const list = document.querySelector(".todo-list");
const status = document.querySelector(".todo-status");

// 렌더 함수
function render() {
  // 할 일 항목
  const items = todos.map((todo) => {
    // 빈 <li> 요소를 생성해 data-id 속성의 값을 todo.id 값으로 지정
    const item = document.createElement("li");
    item.dataset.id = todo.id;

    // 빈 <span> 요소를 생성해 todo.title 과 todo.done 값에 따라 텍스트를 지정
    const label = document.createElement("span");
    const stateText = todo.done ? "완료" : "진행 중";
    label.textContent = `${todo.title} (${stateText})`;

    // 완료 버튼으로 사용할 빈 <button> 요소를 생성해 속성들과 텍스트를 지정
    const toggleButton = document.createElement("button");
    toggleButton.type = "button";
    toggleButton.dataset.action = "toggle";
    toggleButton.textContent = todo.done ? "완료 취소" : "완료";

    // 삭제 버튼으로 사용할 빈 <button> 요소를 생성해 속성들과 텍스트를 지정
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.dataset.action = "remove";
    removeButton.textContent = "삭제";

    // 만들어진 목록 텍스트, 완료 버튼, 삭제 버튼을 <li> 요소의 마지막 자식 요소로 추가
    item.append(label, toggleButton, removeButton);

    // 만들어진 <li> 요소를 반환
    return item;
  });

  // 할 일 목록의 모든 자식 요소들을 items 요소들로 교체
  list.replaceChildren(...items);

  // 완료된 항목의 개수
  const completedCount = todos.filter((todo) => todo.done).length;

  // status 요소의 텍스트를 지정
  status.textContent = `전체 ${todos.length}개, 완료 ${completedCount}개`;
}

// form 요소에 제출 이벤트 발생 시
form.addEventListener("submit", (event) => {
  // 기본 이벤트 제거
  event.preventDefault();

  // 제출된 입력 정보들
  const todoData = new FormData(event.currentTarget);
  // 제출된 입력 정보들 중에 name이 title인 요소의 입력값
  const titleValue = todoData.get("title");

  // 만약 입력값이 문자열이 아니면 status 요소의 텍스트를 변경하고 함수를 종료
  if (typeof titleValue !== "string") {
    status.textContent = "입력값을 읽지 못했습니다.";
    return;
  }

  // 입력값의 앞뒤 공백을 제거해 title에 대입
  const title = titleValue.trim();
  // title이 빈 문자열이라면 status 요소의 텍스트를 변경하고 함수를 종료
  if (title === "") {
    status.textContent = "할 일을 입력해 주세요.";
    return;
  }

  // 할 일 객체 배열에 해당 객체 추가
  todos.push({
    id: String(nextId),
    title: title,
    done: false,
  });

  // 항목 고유 번호 변경 및 입력값 초기화
  nextId += 1;
  event.currentTarget.reset();

  // 새로 그리기
  render();
});

// 할 일 목록 클릭 시
list.addEventListener("click", (event) => {
  // 클릭한 부분에서 가장 가깝고 data-action 속성을 가진 <button> 요소
  const button = event.target.closest("button[data-action]");
  if (!button || !list.contains(button)) return;

  // button 요소에서 가장 가깝고 data-id 속성을 가진 <li> 요소
  const item = button.closest("li[data-id]");
  if (!item) return;

  // item 요소의 data-id 속성값
  const id = item.dataset.id;

  // 완료 버튼이라면
  if (button.dataset.action === "toggle") {
    // todos 객체 배열의 객체 중 id 속성값으로 item 요소의 data-id 속성값을 가진 객체
    const todo = todos.find((item) => item.id === id);
    // todo가 없다면 함수 종료
    if (!todo) return;
    // 완료 상태를 변경
    todo.done = !todo.done;
  }

  // 삭제 버튼이라면
  if (button.dataset.action === "remove") {
    // todos 객체 배열의 객체 중 id 속성값으로
    // item 요소의 data-id 속성값과 다른 객체들을 모아
    // 새로운 객체 배열을 생성해 todos 객체 배열에 대입
    todos = todos.filter((todo) => todo.id !== id);
  }

  // 새로 그리기
  render();

  // 완료 버튼이라면
  if (button.dataset.action === "toggle") {
    // list 요소의 자식 요소 중 data-id 속성값이
    // item 요소의 data-id 속성값인 요소의 후손 요소중
    // data-action 속성값이 toggle인 요소
    const nextButton = list.querySelector(
      `[data-id="${id}"] [data-action="toggle"]`,
    );
    // nextButton 요소가 있다면 nextButton에 포커스
    // 그렇지 않다면 입력창에 포커스
    if (nextButton) nextButton.focus();
  } else input.focus();
});

// 초기 화면 설정
render();

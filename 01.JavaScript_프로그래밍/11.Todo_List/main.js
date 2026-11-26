const todoForm = document.querySelector("#todo-form"); // 입력 폼
const todoInput = document.querySelector("#todo-input"); // 입력창
const inputLimit = document.querySelector("#input-limit"); // 입력 수 제한
const todoList = document.querySelector("#todo-list"); // 할 일 목록
const totalCount = document.querySelector("#total-count"); // 전체 할 일 항목 개수
const completedCount = document.querySelector("#completed-count"); // 완료 할 일 항목 개수
const STORAGE_KEY = "todo_vanilla_v1:items"; // 로컬 저장소 키
const SVG_NS = "http://www.w3.org/2000/svg";

/* ------------------------------ */

// 랜더 함수 추가 후 교안 보고 확장

// 입력 수 제한 업데이트 함수
function updateInputLimit() {
  inputLimit.textContent = `${todoInput.value.length}/${todoInput.maxLength}자`;
}

// 할 일 항목 카운트 업데이트 함수
function updateItemCount() {
  // 로컬 저장소에서 할 일 배열 불러오기
  const todoArray = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  // 할 일 배열의 길이
  const totalTodoCount = todoArray.length;
  // 할 일 항목 중 완료한 항목의 개수
  const completedTodoCount = todoArray.filter((todo) => todo.complete).length;

  if (totalCount && completedCount) {
    totalCount.textContent = `총 ${totalTodoCount}개 /`;
    completedCount.textContent = `완료: ${completedTodoCount}개`;
  }
}

// 입력값 유효성 검사 함수
function validateValue(inputValue) {
  // 문자열이 아닌 값이 들어와도 안전하게 공백 정리
  const text = typeof inputValue === "string" ? inputValue.trim() : "";

  // 입력값이 없으면
  if (!text.length) {
    // 안내문을 띄우기
    window.alert("내용을 입력해주세요.");

    // 입력창을 비우기, 포커싱, 입력 수 제한 업데이트
    todoInput.value = "";
    todoInput.focus();
    updateInputLimit();

    return false;
  }

  return true;
}

// 할 일 항목 추가 함수
function addTodoItem() {
  // 입력값 검사
  if (!validateValue(todoInput.value)) return;

  // 로컬 저장소에서 할 일 배열 불러오기
  const todoArray = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  // todo 객체 생성 후 로컬 저장소에 저장
  const todo = {
    id: Date.now(),
    text: todoInput.value.trim(),
    complete: false,
  };
  todoArray.push(todo);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todoArray));

  // 할 일 항목 생성
  const todoItem = document.createElement("li");
  todoItem.classList.add("todo_item");
  todoItem.setAttribute("data-id", todo.id);

  // 할 일 항목 텍스트 생성
  const todoItemText = document.createElement("span");
  todoItemText.classList.add("todo_text");
  todoItemText.textContent = `${todo.text}`;

  // 할 일 항목 완료 버튼 생성
  const completeBtn = document.createElement("button");
  const completeSvg = document.createElementNS(SVG_NS, "svg");
  const completePath = document.createElementNS(SVG_NS, "path");

  completeBtn.classList.add("todo_completed");
  completeBtn.setAttribute("type", "button");
  completeBtn.setAttribute("data-action", "toggle");

  completeSvg.setAttribute("width", "16");
  completeSvg.setAttribute("height", "16");
  completeSvg.setAttribute("viewBox", "0 0 16 16");
  completeSvg.setAttribute("fill", "currentColor");
  completeSvg.setAttribute("aria-hidden", "true");

  completePath.setAttribute(
    "d",
    "M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0",
  );

  completeSvg.append(completePath);
  completeBtn.append(completeSvg, "완료");

  // 할 일 항목 삭제 버튼 생성
  const deleteBtn = document.createElement("button");
  const deleteSvg = document.createElementNS(SVG_NS, "svg");
  const deletePath = document.createElementNS(SVG_NS, "path");

  deleteBtn.classList.add("todo_delete");
  deleteBtn.setAttribute("type", "button");
  deleteBtn.setAttribute("data-action", "delete");

  deleteSvg.setAttribute("width", "16");
  deleteSvg.setAttribute("height", "16");
  deleteSvg.setAttribute("viewBox", "0 0 16 16");
  deleteSvg.setAttribute("fill", "currentColor");
  deleteSvg.setAttribute("aria-hidden", "true");

  deletePath.setAttribute(
    "d",
    "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708",
  );

  deleteSvg.append(deletePath);
  deleteBtn.append(deleteSvg, "삭제");

  // 할 일 항목에 만든 요소들 추가
  todoItem.append(todoItemText, completeBtn, deleteBtn);

  // 할 일 목록에 항목을 추가
  todoList.append(todoItem);

  // 후처리
  updateItemCount();
  todoInput.value = "";
  todoInput.focus();
  updateInputLimit();
}

/* ------------------------------ */

// 페이지 로드 시 필요한 함수들
updateItemCount();

/* ------------------------------ */

// 입력창에 입력 시 입력 수 제한 업데이트
todoInput.addEventListener("input", updateInputLimit);

/* ------------------------------ */

// 할 일 항목 추가
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addTodoItem();
});

/* ------------------------------ */

// 할 일 목록을 클릭하면(버튼의 이벤트 위임)
todoList.addEventListener("click", function (event) {
  // 이벤트 버블링 방지
  event?.stopPropagation();

  // 클릭한 위치에서 data-action 속성을 가진 가장 가까운 버튼 찾기
  const actionButton = event.target.closest("button[data-action]");
  if (!actionButton || !this.contains(actionButton)) return;

  // 버튼에서 가장 가까운 할 일 항목 찾기
  const todoItem = actionButton.closest(".todo_item");
  if (!todoItem) return;

  // 로컬 저장소에서 할 일 배열 불러오기
  let todoArray = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  // 찾은 항목의 data-id 속성 값
  const targetId = Number(todoItem.dataset.id);

  // 찾은 버튼의 data-action 속성 값
  const action = actionButton.dataset.action;

  // 완료 버튼을 눌렀다면
  if (action === "toggle") {
    // 할 일 배열 항목 중 id 속성 값이 targetId와 일치한 항목을 찾기
    const targetTodo = todoArray.find((todo) => Number(todo.id) === targetId);
    if (!targetTodo) return;

    // 찾은 항목의 complete 속성 값을 갱신(false → true or true → false)
    targetTodo.complete = !targetTodo.complete;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todoArray));

    // 갱신한 complete 속성 값을 기준으로 완료 항목에 todo__item--complete 클래스를 토글
    todoItem.classList.toggle("todo_item-completed", targetTodo.complete);

    // 할 일 항목 개수 업데이트
    updateItemCount();
  }
  // 삭제 버튼을 눌렀다면
  else if (action === "delete") {
    // 할 일 배열 항목 중 id 속성 값이 targetId와 일치하면 삭제
    todoArray = todoArray.filter((todo) => Number(todo.id) !== targetId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todoArray));
    todoItem.remove();

    // 할 일 항목 개수 업데이트
    updateItemCount();
  }
});

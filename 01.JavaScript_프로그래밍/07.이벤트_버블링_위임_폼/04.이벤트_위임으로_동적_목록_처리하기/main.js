const delegateList = document.querySelector(".delegate-list");
const delegateAdd = document.querySelector(".delegate-add");
const delegateResult = document.querySelector(".delegate-result");
let delegateCount = 2;

function handleDelegateListClick(event) {
  // 클릭한 버튼 찾기
  const button = event.target.closest("button[data-action]");
  if (!button || !delegateList.contains(button)) return;

  // 클릭한 버튼이 포함된 <li> 요소
  const item = button.closest(".delegate-item");
  if (!item) return;

  // 클릭한 버튼의 data-action 속성이 select이면
  // delegateResult 요소의 텍스트를 item 요소의 data-id 속성을 참고해서 텍스트 지정
  const action = button.dataset.action;
  if (action === "select") {
    delegateResult.textContent = item.dataset.id + ": 선택했습니다.";
  }

  // 출력
  console.log("target:", event.target.tagName);
  console.log("currentTarget:", event.currentTarget.tagName);
  console.log("item:", item.dataset.id);
}

// 새 항목을 생성해서 반환하는 함수
function createDelegateItem(id, label) {
  const item = document.createElement("li");
  const button = document.createElement("button");
  const text = document.createElement("span");

  item.className = "delegate-item";
  item.dataset.id = id;
  button.type = "button";
  button.dataset.action = "select";
  text.textContent = label;

  button.append(text);
  item.append(button);

  return item;
}

// 항목 개수를 업데이트하고 delegateList 요소의 마지막 자식요소로 새 항목을 만들어 추가
function handleDelegateAdd() {
  delegateCount += 1;
  delegateList.append(
    createDelegateItem("item-" + delegateCount, "새 복습 " + delegateCount),
  );
}

// 클릭 시 해당하는 함수 호출
delegateList.addEventListener("click", handleDelegateListClick);
delegateAdd.addEventListener("click", handleDelegateAdd);

// 전 차시 코드 정리
const modStatus = document.querySelector(".status");
const modButton = document.querySelector("#submit-button");
const modHeading = document.querySelector("#notice h2");

if (modStatus) {
  modStatus.textContent = "제출 완료";
  modStatus.removeAttribute("data-state");
  modStatus.classList.remove("is-pending");
  modStatus.classList.add("is-complete");
}

if (modButton) modButton.removeAttribute("disabled");

if (modHeading) {
  modHeading.setAttribute("aria-live", "polite");
  modHeading.textContent = "중요 공지";
  modHeading.classList.add("is-important");
}

// --------------------

// class 속성이 todo-list인 요소
const creationList = document.querySelector(".todo-list");

// 1. 빈 <li> 요소를 생성해서 변수에 대입
// 2. <li> 요소의 텍스트를 지정
// 3. <li> 요소에 todo-item 클래스 추가
// 4. <li> 요소의 data-status 속성의 값을 ready로 지정
const creationItem = document.createElement("li");
console.log(creationItem.parentElement);
creationItem.textContent = "DOM 복습";
creationItem.classList.add("todo-item");
creationItem.setAttribute("data-status", "ready");

if (creationList) {
  // 구성한 <li> 요소를 creationList 요소의 마지막 자식 요소로 추가
  creationList.append(creationItem);
  console.log(creationItem.parentElement.nodeName);
  // creationItem 요소를 creationList 요소의 첫 번째 자식 요소로 이동
  creationList.prepend(creationItem);
  console.log(creationList.firstElementChild.textContent);
  console.log(creationList.children.length);
}

// --------------------

// class 속성이 notices인 요소
const creationNotices = document.querySelector(".notices");

// 1. 빈 <article> 요소를 생성해 변수에 대입
// 2. <article> 요소에 notice-card 클래스 추가
// 3. <article> 요소의 텍스트를 지정
const creationCard = document.createElement("article");
creationCard.classList.add("notice-card");
creationCard.textContent = "새 과제가 등록되었습니다.";

// creationNotices 요소의 첫 번째 자식 요소로 creationCard 요소를 추가
if (creationNotices) {
  creationNotices.prepend(creationCard);
  console.log(creationNotices.firstElementChild.textContent);
}

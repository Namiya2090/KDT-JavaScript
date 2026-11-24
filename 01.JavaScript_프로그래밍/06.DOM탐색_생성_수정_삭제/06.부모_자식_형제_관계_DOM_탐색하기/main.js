// class 속성이 course-list인 요소
const list = document.querySelector(".course-list");
// class 속성이 course-card인 요소
const first = document.querySelector(".course-card");
// class 속성이 delete-button인 요소
const button = document.querySelector(".delete-button");

if (list && first && button) {
  // first 요소의 부모 요소의 nodeName 출력
  console.log(first.parentElement.nodeName);
  // list 요소의 자식 요소의 개수 출력
  console.log(list.children.length);
  // list 요소의 자식 노드의 개수 출력
  console.log(list.childNodes.length);
  // list 요소의 첫 번째 자식 노드(공백·텍스트 포함)의 nodeName 출력
  console.log(list.firstChild.nodeName);
  // list 요소의 첫 번째 자식 요소의 nodeName 출력
  console.log(list.firstElementChild.nodeName);

  // first 요소의 바로 다음 형제 요소
  const next = first.nextElementSibling;
  // next 요소 안의 h2 요소의 텍스트 출력
  if (next) console.log(next.querySelector("h2").textContent);

  // button 요소의 부모 요소의 nodeName 출력
  console.log(button.parentElement.nodeName);
  // button 자신 또는 조상 중 course-card class 속성 값을 가진 가장 가까운 요소의 nodeName 출력
  console.log(button.closest(".course-card").nodeName);
  // button 자신 또는 조상 중 missing class 속성 값을 가진 가장 가까운 요소 출력
  console.log(button.closest(".missing"));
}

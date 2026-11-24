// class 속성이 loading인 요소
const oldEl = document.querySelector(".loading");

// 빈 <article> 요소를 생성해 텍스트를 지정
const newEl = document.createElement("article");
newEl.textContent = "결과를 불러왔습니다.";

// oldEl 요소를 newEl 요소로 교체 후 출력
if (oldEl) {
  oldEl.replaceWith(newEl);
  console.log(oldEl.parentElement);
  console.log(newEl.parentElement);
}

// --------------------

// class 속성이 replace-demo인 요소
const area = document.querySelector(".replace-demo");
// class 속성이 removable-notice인 요소
const note = document.querySelector(".removable-notice");

if (area && note) {
  // note 요소를 숨기고 제거한뒤
  note.hidden = true;
  console.log(note.parentElement.nodeName);
  note.hidden = false;
  note.remove();
  console.log(note.parentElement);
  console.log(note.textContent);

  // note 요소를 area 요소에 다시 연결
  area.append(note);
  console.log(note.parentElement.nodeName);
}

// --------------------

// class 속성이 empty-state인 요소
const empty = document.querySelector(".empty-state");

// 빈 <ul>, <li>를 요소를 생성해 <li> 요소 구성 후 <ul> 요소의 마지막 자식 요소로 추가
const list = document.createElement("ul");
const item = document.createElement("li");
item.textContent = "JavaScript 복습";
list.append(item);

// empty 요소를 list 요소로 교체
if (empty) {
  empty.replaceWith(list);
  console.log(list.children.length);
  console.log(empty.parentElement);
}

const tasks = ["HTML 복습", "JavaScript 복습"];
const list = document.querySelector("#tasks");
const count = document.querySelector("#count");

// render 함수
function render() {
  // tasks 배열의 문자열을 텍스트로 가진 <li> 요소들의 배열
  const node = tasks.map((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
  });

  // list 요소의 모든 자식 요소들을 spread를 이용해 node 배열의 요소들로 교체
  list.replaceChildren(...node);
  // count 요소의 텍스트를 node 배열의 길이를 참고해 지정
  count.textContent = `총 ${node.length}개`;
}

render();
tasks.push("DOM 복습");
console.log(tasks.length, list.children.length);
render();
console.log(tasks.length, list.children.length);

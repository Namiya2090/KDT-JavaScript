const button = document.querySelector("#save");
const status = document.querySelector("#status");
let count = 0; // 클릭한 횟수

// button을 몇 번 클릭했는지 status 요소의 텍스트 변화로 알려주는 함수
function handleSave(event) {
  count++;
  status.textContent = `저장 ${count}회 완료`;
  // 이벤트 타입, 실제 이벤트가 발생한 요소의 태그이름, 리스너가 연결된 요소의 태그 이름
  console.log(event.type, event.target.tagName, event.currentTarget.tagName);
}

// button 요소 클릭 시
button.addEventListener("click", handleSave);
console.log("리스너 등록 완료");

// --------------------

const helpButton = document.querySelector("#help");
const help = document.querySelector("#help-text");
let opened = false; // 도움말 열람 여부

// 클릭 시 열람 여부를 변경하고 그에 따라 도움말을 여닫고 버튼의 텍스트를 변경
helpButton.addEventListener("click", () => {
  opened = !opened;
  help.hidden = !opened;
  helpButton.textContent = opened ? "도움말 닫기" : "도움말 열기";
});

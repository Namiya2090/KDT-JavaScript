const input = document.querySelector("#memo");
const count = document.querySelector("#count");
const status = document.querySelector("#status");

// 입력창에 입력한 글자 개수 업데이트 함수
function updateCount() {
  count.textContent = input.value.length + "자";
}

// 입력이 일어날 때 updateCount 함수 호출
input.addEventListener("input", updateCount);

// 키보드 이벤트가 발생하면
input.addEventListener("keydown", (event) => {
  // 글자 조합 중이나 자동 반복 입력 시 함수를 종료
  if (event.isComposing || event.repeat) return;

  // Enter를 누르면 status 요소의 텍스트를 변경
  if (event.key === "Enter") {
    status.textContent = `검색: ${input.value}`;
  }

  // Esc를 누르면 입력창을 비우고 updateCount 함수 호출 후 status 텍스트 변경
  if (event.key === "Escape") {
    input.value = "";
    updateCount();
    status.textContent = "검색어 초기화";
  }
});

// 입력창 포커싱 시 status의 텍스트 변경
input.addEventListener("focus", () => {
  status.textContent = "검색어 입력 중";
});

// 입력창 포커스 아웃 시 status의 텍스트 변경
input.addEventListener("blur", () => {
  status.textContent = "입력 종료";
});

const input = document.querySelector("#memoInput");
const saveBtn = document.querySelector("#saveBtn");
const clearBtn = document.querySelector("#clearBtn");
const localOut = document.querySelector("#localOut");
const sessionOut = document.querySelector("#sessionOut");

const KEY = "demo_memo";

function render() {
  // 저장된 값이 없으면 "-" 표시
  localOut.textContent = localStorage.getItem(KEY) ?? "-";
  sessionOut.textContent = sessionStorage.getItem(KEY) ?? "-";
}

saveBtn.addEventListener("click", () => {
  const value = input.value.trim();
  if (!value) return;

  // 문자열 형태로 저장
  // localStorage: 직접 지우거나 브라우저 데이터 삭제 전까지 영구 저장
  // sessionStorage: 현재 탭/창이 닫히면 삭제
  localStorage.setItem(KEY, value);
  sessionStorage.setItem(KEY, value);
  input.value = "";
  render();
});

clearBtn.addEventListener("click", () => {
  // 저장된 값을 삭제
  localStorage.removeItem(KEY);
  sessionStorage.removeItem(KEY);
  render();
});

// 페이지 열릴 때 기존 저장값 불러오기
render();

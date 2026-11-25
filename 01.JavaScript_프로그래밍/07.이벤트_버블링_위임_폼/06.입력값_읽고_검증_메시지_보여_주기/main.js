const submitProfileForm = document.querySelector(".submit-profile-form");
const submitProfileResult = document.querySelector(".submit-result");
const submitNicknameInput = document.querySelector("#submit-nickname");
const submitNicknameMessage = document.querySelector(
  "#submit-nickname-message",
);

// nickname 유효성 검사
function validateNickname(nickname) {
  if (nickname.length === 0) return "별명을 입력해 주세요.";
  if (nickname.length < 2) return "별명은 두 글자 이상 입력해 주세요.";
  return "";
}

function handleSubmitProfile(event) {
  // 기본 이벤트 제거
  event.preventDefault();

  const data = new FormData(event.currentTarget); // 제출된 <form>의 모든 입력값의 객체
  const nickname = data.get("nickname").trim(); // 입력한 닉네임을 앞뒤 공백 제거
  const error = validateNickname(nickname); // 유효성 검사 후 에러 메시지

  // error 변수 값에 따라 aria-invalid 속성 설정 및 submitNicknameMessage 텍스트 지정
  submitNicknameInput.setAttribute("aria-invalid", String(error !== ""));
  submitNicknameMessage.textContent = error || "사용할 수 있는 별명입니다.";

  // 에러가 있다면 submitProfileResult 요소의 텍스트 지정 및 입력창에 포커싱
  if (error !== "") {
    submitProfileResult.textContent = "저장하지 않았습니다.";
    submitNicknameInput.focus();
    return;
  }

  // submitProfileResult 요소의 텍스트 지정 및 콘솔에 닉네임 출력
  submitProfileResult.textContent = `저장 요청: ${nickname}`;
  console.log("nickname:", nickname);
}

// 제출 이벤트 발생 시 handleSubmitProfile 호출
submitProfileForm.addEventListener("submit", handleSubmitProfile);

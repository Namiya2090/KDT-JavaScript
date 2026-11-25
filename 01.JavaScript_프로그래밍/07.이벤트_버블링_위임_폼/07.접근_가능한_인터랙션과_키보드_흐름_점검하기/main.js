const submitProfileForm = document.querySelector(".submit-profile-form");
const submitProfileResult = document.querySelector(".submit-result");
const submitNicknameInput = document.querySelector("#submit-nickname");
const submitNicknameMessage = document.querySelector(
  "#submit-nickname-message",
);

function validateNickname(nickname) {
  if (nickname.length === 0) return "별명을 입력해 주세요.";
  if (nickname.length < 2) return "별명은 두 글자 이상 입력해 주세요.";
  return "";
}

function handleSubmitProfile(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const nickname = data.get("nickname").trim();
  const error = validateNickname(nickname);
  submitNicknameInput.setAttribute("aria-invalid", String(error !== ""));
  submitNicknameMessage.textContent = error || "사용할 수 있는 별명입니다.";
  if (error !== "") {
    submitProfileResult.textContent = "저장하지 않았습니다.";
    submitNicknameInput.focus();
    return;
  }
  submitProfileResult.textContent = `저장 요청: ${nickname}`;
}

submitProfileForm.addEventListener("submit", handleSubmitProfile);

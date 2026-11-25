const submitProfileForm = document.querySelector(".submit-profile-form");
const submitProfileResult = document.querySelector(".submit-result");

function handleSubmitProfile(event) {
  // 기본 이벤트 제거
  event.preventDefault();
  // 제출한 <form> 요소 안의 입력값을 한 번에 모아 객체로 만들어 대입
  const data = new FormData(event.currentTarget);
  // data에서 name이 "nickname"인 입력 필드의 값
  const nickname = data.get("nickname");
  submitProfileResult.textContent = "저장 요청: " + nickname;
  console.log("nickname:", nickname);
}

// 제출 시 handleSubmitProfile 호출
submitProfileForm.addEventListener("submit", handleSubmitProfile);

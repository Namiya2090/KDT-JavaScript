// class 속성이 status인 요소
const modStatus = document.querySelector(".status");
// id 속성이 submit-button인 요소
const modButton = document.querySelector("#submit-button");

// modStatus 요소의 텍스트 수정
if (modStatus) {
  console.log(modStatus.textContent.trim());
  modStatus.textContent = "제출 완료";
  console.log(modStatus.textContent);
}

// modeStatus 요소의 속성 수정 및 제거
if (modStatus) {
  console.log(modStatus.getAttribute("data-state"));
  modStatus.setAttribute("data-state", "complete");
  console.log(modStatus.getAttribute("data-state"));
  modStatus.removeAttribute("data-state");
  console.log(modStatus.getAttribute("data-state"));
}

// modButton 요소의 속성 제거
if (modButton) {
  modButton.setAttribute("disabled", "false");
  console.log(modButton.getAttribute("disabled"));
  modButton.removeAttribute("disabled");
  console.log(modButton.getAttribute("disabled"));
}

// modStatus 요소의 클래스 제거 및 추가
if (modStatus) {
  modStatus.classList.remove("is-pending");
  modStatus.classList.add("is-complete");
  console.log(modStatus.getAttribute("class"));
}

// modStatus 요소의 클래스 전환
if (modStatus) {
  modStatus.classList.toggle("is-important");
  console.log(modStatus.getAttribute("class"));
  modStatus.classList.toggle("is-important");
  console.log(modStatus.getAttribute("class"));
}

// --------------------

// id가 notice인 요소의 안의 모든 h2 요소
const modHeading = document.querySelector("#notice h2");

if (modHeading) {
  // modHeading 요소의 aria-live 속성 값을 polite로 지정
  modHeading.setAttribute("aria-live", "polite");
  // modHeading 요소의 텍스트를 지정
  modHeading.textContent = "중요 공지";
  // modHeading 요소에 is-important 클래스 추가
  modHeading.classList.add("is-important");

  // 출력
  console.log(modHeading.textContent);
  console.log(modHeading.getAttribute("aria-live"));
  console.log(modHeading.getAttribute("class"));
}

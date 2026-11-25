const greetingButton = document.querySelector(".greeting-button");
const greetingStatus = document.querySelector(".greeting-status");

function waitFor(value, delay) {
  // delay 뒤에 value를 성공 값으로 가지는 Promise 반환
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), delay);
  });
}

// 항상 Promise를 반환하고 내부에서 await를 쓸 수 있게 해주는 함수
async function buildGreeting() {
  console.log("2. async 함수 시작");
  // waitFor 함수에서 반환한 Promise가 settled 될 때까지 buildGreeting 함수 진행 대기
  const name = await waitFor("민준", 300);
  console.log("4. await 뒤:", name);
  return `${name}님, 반갑습니다.`;
}

function handleGreetingClick() {
  console.log("1. 클릭 처리 시작");
  greetingStatus.textContent = "준비 중";

  const greetingPromise = buildGreeting();
  console.log("3. async 함수 호출 뒤");

  // buildGreeting에서 반환한 문자열을 성공값으로 받아 then 콜백을 실행
  greetingPromise.then((message) => {
    console.log("5. 호출 결과:", message);
    greetingStatus.textContent = message;
  });
}

greetingButton.addEventListener("click", handleGreetingClick);

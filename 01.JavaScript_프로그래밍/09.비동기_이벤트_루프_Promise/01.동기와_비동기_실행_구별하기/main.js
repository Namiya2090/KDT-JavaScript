const asyncButton = document.querySelector(".async-start");
const asyncStatus = document.querySelector(".async-status");

asyncButton.addEventListener("click", () => {
  // 1. 동기 코드 실행
  console.log("1. 타이머 등록 전");
  asyncStatus.textContent = "1초 기다리는 중";

  // 2. 콜백을 Web APIs 타이머에 등록(콜 스택에 바로 들어가지 않음)
  setTimeout(() => {
    // 4. 1초 뒤 콜백 큐 -> 이벤트 루프를 거쳐 콜 스택에서 실행
    console.log("3. 타이머 콜백");
    asyncStatus.textContent = "완료";
  }, 1000);

  // 3. 타이머를 기다리지 않고 다음 동기 코드 즉시 실행
  console.log("2. 현재 흐름 계속");
});

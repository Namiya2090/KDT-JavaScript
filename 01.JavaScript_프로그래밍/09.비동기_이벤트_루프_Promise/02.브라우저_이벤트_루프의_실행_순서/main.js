const timerButton = document.querySelector(".loop-start");
const timerStatus = document.querySelector(".loop-status");
const frameButton = document.querySelector(".frame-start");
const frameStatus = document.querySelector(".frame-status");

timerButton.addEventListener("click", () => {
  // 1. 콜 스택에 추가 및 실행 후 빠져나옴
  console.log("1. 현재 작업 시작");

  // 2. 콜 스택에 추가 및 실행 후 빠져나옴
  timerStatus.textContent = "타이머 대기";

  // 3. 타이머를 콜 스택에 추가 및 실행 후 빠져나오고 0ms 후 콜백을 태스크 큐에 추가
  setTimeout(() => {
    // 5. 콜 스택에 추가 및 실행 후 빠져나옴
    console.log("타이머 콜백");
    // 6. 콜 스택에 추가 및 실행 후 빠져나옴
    timerStatus.textContent = "타이머 완료";
  }, 0);

  // 4. 콜 스택에 추가 및 실행 후 빠져나옴
  console.log("2. 현재 작업 끝");
});

frameButton.addEventListener("click", () => {
  // 1. 콜 스택에 추가 및 실행 후 빠져나옴
  console.log("1. 현재 작업");

  // 2. 콜 스택에 추가 및 실행 후 빠져나오고 콜백을 마이크로태스크 큐에 추가
  queueMicrotask(() => {
    // 4. 콜 스택에 추가 및 실행 후 빠져나옴
    console.log("2. 마이크로태스크");
  });

  // 3. 콜 스택에 추가 및 실행 후 빠져나오고 콜백을 애니메이션 프레임 큐에 추가
  requestAnimationFrame(() => {
    // 5. 콜 스택에 추가 및 실행 후 빠져나옴
    frameStatus.textContent = "갱신할 문구를 바꿨습니다.";
    // 6. 콜 스택에 추가 및 실행 후 빠져나옴
    console.log("3. 프레임 콜백");
  });
});

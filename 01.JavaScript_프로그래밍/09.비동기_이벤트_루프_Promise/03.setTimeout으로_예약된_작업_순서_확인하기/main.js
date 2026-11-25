const timerStartButton = document.querySelector(".timer-start");
const timerCancelButton = document.querySelector(".timer-cancel");
const timerStatus = document.querySelector(".timer-status");

let timerLabId = null;
let timerLabStartedAt = 0;

// 타이머 예약 함수
function startTimerLab() {
  // 연타 방지
  if (timerLabId !== null) return;

  // 함수가 실행된 순간을 저장
  timerLabStartedAt = performance.now();
  timerStatus.textContent = "예약됨";
  console.log("1. 예약 등록");

  // 1초 뒤 타이머 등록 후 타이머 아이디를 저장
  timerLabId = setTimeout(() => {
    console.log("3. 타이머 실행");

    // startTimerLab 함수가 시작된 시점부터 이 콜백이 실행된 순간까지의 시간을 저장
    const elapsed = Math.round(performance.now() - timerLabStartedAt);
    console.log(`${elapsed}ms 경과`);

    timerStatus.textContent = "타이머 실행 완료";
    timerLabId = null;
  }, 1000);

  console.log("2. 현재 작업 끝");
}

// 타이머 취소 함수
function cancelTimerLab() {
  if (timerLabId !== null) {
    // timerId 값을 타이머 아이디로 가진 타이머를 해제
    clearTimeout(timerLabId);

    timerLabId = null;
    timerStatus.textContent = "예약 취소됨";

    console.log("3. 예약 취소");
  }
}

timerStartButton.addEventListener("click", startTimerLab);
timerCancelButton.addEventListener("click", cancelTimerLab);

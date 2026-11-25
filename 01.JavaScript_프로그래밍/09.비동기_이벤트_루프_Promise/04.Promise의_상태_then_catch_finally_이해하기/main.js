const promiseSuccessButton = document.querySelector(".promise-success");
const promiseFailureButton = document.querySelector(".promise-failure");
const promiseStatus = document.querySelector(".promise-status");

function checkReservation(shouldSucceed) {
  // 새로운 Promise 객체를 반환
  return new Promise((resolve, reject) => {
    // 500ms 뒤에
    setTimeout(() => {
      // shouldSucceed가 참이라면 Promise 성공 값을 전달
      if (shouldSucceed) resolve("예약되었습니다.");
      // 그게 아니라면 Promise를 거부하며 거부 값으로 오류 객체를 생성해 전달
      else reject(new Error("남은 좌석이 없습니다."));
    }, 500);
  });
}

function runReservationCheck(shouldSucceed) {
  console.log("1. 확인 시작");
  promiseStatus.textContent = "확인 중";

  checkReservation(shouldSucceed)
    .then((message) => {
      // checkReservation 함수에서 반환한 Promise의 상태가 fulfilled라면
      // 성공 메시지를 출력
      console.log("3. 성공: ", message);
      promiseStatus.textContent = message;
    })
    .catch((error) => {
      // checkReservation 함수에서 반환한 Promise의 상태가 rejected라면
      // 실패 메시지를 출력
      console.log("3. 실패: ", error.message);
      promiseStatus.textContent = error.message;
    })
    .finally(() => {
      // 모든 과정이 종료되면 출력
      console.log("4. 확인 종료");
    });

  console.log("2. 현재 작업 끝");
}

promiseSuccessButton.addEventListener("click", () => {
  runReservationCheck(true);
});

promiseFailureButton.addEventListener("click", () => {
  runReservationCheck(false);
});

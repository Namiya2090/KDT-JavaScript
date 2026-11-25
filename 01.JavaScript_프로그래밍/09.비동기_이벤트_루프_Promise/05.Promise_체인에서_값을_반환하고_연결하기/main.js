const chainSuccessButton = document.querySelector(".chain-success");
const chainFailureButton = document.querySelector(".chain-failure");
const chainStatus = document.querySelector(".chain-status");

function checkStep(label, shouldSucceed) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) resolve(`${label} 완료`);
      else reject(new Error(`${label} 실패`));
    }, 300);
  });
}

function runPaymentChain(shouldSucceed) {
  console.log("1. 체인 시작");
  chainStatus.textContent = "처리 중";

  // then 메서드는 새 Promise를 반환합니다.
  checkStep("좌석 확인", true)
    .then((seatMessage) => {
      console.log("3.", seatMessage);
      return checkStep("결제 확인", shouldSucceed);
    })
    .then((paymentMessage) => {
      console.log("4.", paymentMessage);
      return `${paymentMessage} / 예약 완료`;
    })
    .then((finalMessage) => {
      console.log("5. 성공:", finalMessage);
      chainStatus.textContent = finalMessage;
    })
    .catch((error) => {
      console.log("4. 실패:", error.message);
      chainStatus.textContent = error.message;
    })
    .finally(() => {
      console.log("6. 체인 종료");
    });
  console.log("2. 현재 코드 끝");
}

chainSuccessButton.addEventListener("click", () => runPaymentChain(true));
chainFailureButton.addEventListener("click", () => runPaymentChain(false));

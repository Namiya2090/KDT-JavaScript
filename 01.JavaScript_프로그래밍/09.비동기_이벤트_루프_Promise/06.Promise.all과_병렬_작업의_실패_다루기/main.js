const allSuccessButton = document.querySelector(".all-success");
const oneFailureButton = document.querySelector(".one-failure");
const allStatus = document.querySelector(".all-status");

function loadProfile() {
  console.log("프로필 시작");
  // 600ms 뒤에 fulfilled되는 Promise를 반환합니다.
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("프로필 완료");
      resolve("프로필");
    }, 600);
  });
}

function loadNotice(shouldSucceed) {
  console.log("공지 시작");
  // 200ms 뒤에 settled 되는 Promise를 반환합니다.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        console.log("공지 완료");
        resolve("공지");
      } else {
        console.log("공지 실패");
        reject(new Error("공지 실패"));
      }
    }, 200);
  });
}

function runAllTasks(shouldSucceed) {
  console.log("실행 시작");
  allStatus.textContent = "대기 중";

  const profileTask = loadProfile();
  const noticeTask = loadNotice(shouldSucceed);
  console.log("두 작업 시작 완료");

  // profileTask, noticeTask에 담겨 있는 Promise들이 settled 될 때까지
  // 대기 후에 모두 settled 되고 하나라도 rejected가 된다면 전체 결과는 rejected
  Promise.all([profileTask, noticeTask])
    .then(([profile, notice]) => {
      console.log("결과:", profile, "/", notice);
      allStatus.textContent = `${profile} / ${notice}`;
    })
    .catch((error) => {
      console.log("전체 실패:", error.message);
      allStatus.textContent = error.message;
    })
    .finally(() => {
      console.log("Promise.all 종료");
    });
}

allSuccessButton.addEventListener("click", () => runAllTasks(true));
oneFailureButton.addEventListener("click", () => runAllTasks(false));

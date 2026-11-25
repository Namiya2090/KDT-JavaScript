const successButton = document.querySelector(".course-success");
const failureButton = document.querySelector(".course-failure");
const courseStatus = document.querySelector(".course-status");

function waitForCourse(shouldSucceed) {
  // 300ms 뒤에 shouldSucceed 값에 따라 settled 되는 Promise 반환
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) resolve("JavaScript");
      else reject(new Error("과목 준비 실패"));
    }, 300);
  });
}

async function runCourse(shouldSucceed) {
  console.log("1. 실행 시작");
  courseStatus.textContent = "준비 중";

  try {
    // waitForCourse 함수에서 반환한 Promise가 settled 될 때까지 대긴
    const course = await waitForCourse(shouldSucceed);
    console.log("2. 성공:", course);
    courseStatus.textContent = course + " 준비 완료";
  } catch (error) {
    console.log("2. 실패:", error.message);
    courseStatus.textContent = error.message;
  } finally {
    console.log("3. 마무리");
  }
}

successButton.addEventListener("click", () => runCourse(true));
failureButton.addEventListener("click", () => runCourse(false));

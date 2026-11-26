const fetchSuccessButton = document.querySelector(".fetch-success");
const fetchFailureButton = document.querySelector(".fetch-failure");
const fetchStatus = document.querySelector(".fetch-status");

async function requestNotice(url) {
  console.log("1. 요청 시작");
  fetchStatus.textContent = "요청 중";

  try {
    // fetch(url)이 반환하는 Promise가 이행될 때까지 기다렸다가
    // 그 결과로 받은 Response 객체를 저장합니다.
    const response = await fetch(url);
    // 받은 response가 진짜 Response 객체가 맞는지
    console.log("2. Response 도착:", response instanceof Response);
    fetchStatus.textContent = "Response 도착";

    // 문서 내용 출력
    const noticeText = await response.text();
    console.log("문서 내용:", noticeText);
  } catch (error) {
    console.log("2. 네트워크 실패");
    fetchStatus.textContent = "네트워크 실패";
  } finally {
    console.log("3. 요청 종료");
  }
}

function handleFetchSuccess() {
  requestNotice("./data/notices.txt");
}

function handleFetchFailure() {
  requestNotice("http://127.0.0.1:65535/notices.txt");
}

fetchSuccessButton.addEventListener("click", handleFetchSuccess);
fetchFailureButton.addEventListener("click", handleFetchFailure);

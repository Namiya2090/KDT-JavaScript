const result = document.querySelector("#result");
const button = document.querySelector("#load");

async function loadNotices() {
  try {
    // 지정한 경로(./data/notices.json)로 요청을 보내고,
    // 반환된 Promise가 결정될 때까지 기다렸다가 Response 객체를 저장합니다.
    const response = await fetch("./data/notices.json");
    console.log("상태: ", response.status, response.ok);
    // HTTP 응답 상태 코드가 200 ~ 299 범위가 아니면 에러를 던집니다.
    if (!response.ok) throw new Error("HTTP " + response.status);

    // 응답 본문을 JSON 텍스트로 읽고, JS 객체, 배열로 파싱합니다.
    const notices = await response.json();
    result.textContent = notices[0].title;
    console.log("제목: ", notices[0].title);
  } catch (error) {
    result.textContent = "읽기 실패";
    console.log("실패 종류: ", error.name);
  }
}

button.addEventListener("click", loadNotices);

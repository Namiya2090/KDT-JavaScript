const source = document.querySelector("#source");
const reloadButton = document.querySelector("#reload");
const statusBox = document.querySelector("#status");
const list = document.querySelector("#notices");

let requestState = "idle";
let notices = [];
let errorMessage = "";

function render() {
  // 객체 리터럴 조회로 requestState 속성 값에 맞는 값을 텍스트로 지정
  statusBox.textContent = {
    idle: "응답을 고르고 불러오기를 눌러 주세요.",
    loading: "공지를 불러오는 중이에요.",
    success: "공지 " + notices.length + "개를 가져왔어요.",
    empty: "등록된 공지가 없어요.",
    error: errorMessage,
  }[requestState];

  // 로딩 중일 시 reloadButton, source 요소들에 접근 불가
  reloadButton.disabled = requestState === "loading";
  source.disabled = requestState === "loading";

  // requestState가 "success"면 각 notice의 title을 텍스트로 담은 <li> 요소 배열을,
  // 아니면 빈 배열([])을 item 변수에 할당
  const items =
    requestState === "success"
      ? notices.map((notice) => {
          const item = document.createElement("li");
          item.textContent = notice.title;
          return item;
        })
      : [];

  // 알림 목록의 자식 요소들을 items 요소로 교체
  list.replaceChildren(...items);
}

async function loadNotices() {
  // 로딩 중이면 함수를 종료하고 로딩중인 상태로 변환
  if (requestState === "loading") return;
  requestState = "loading";

  // 공지 배열과 에러 메시지를 초기화하고 렌더 함수 호출
  notices = [];
  errorMessage = "";
  render();

  try {
    // 로딩 상태를 확인할 수 있도록 500ms 대기
    await new Promise((resolve) => setTimeout(resolve, 500));

    // 셀렉트 박스에서 선택한 경로(source.value)로 요청해 Response 받기
    const response = await fetch(source.value);
    // response 상태 코드가 200~299 범위가 아니면 에러 발생
    if (!response.ok) throw new Error("응답 상태: " + response.status);

    // 응답 본문의 JSON을 파싱해 data에 저장
    const data = await response.json();
    // data가 배열이고, 모든 요소가 null이 아니며 각 요소의 title이 문자열인지 확인
    if (
      !Array.isArray(data) ||
      !data.every((item) => item !== null && typeof item.title == "string")
    ) {
      throw new Error("공지 배열 형식을 확인해주세요.");
    }

    // 공지 목록을 교체하고, 배열 길이에 따라 상태("success" / "empty") 결정
    notices = data;
    requestState = notices.length ? "success" : "empty";
  } catch (error) {
    errorMessage = error.message + " 응답을 확인하고 다시 시도해 주세요.";
    requestState = "error";
  } finally {
    // 모든 작업을 끝내고 렌더 함수 호출
    render();
  }
}

reloadButton.addEventListener("click", loadNotices);

// 초기 화면 렌더링
render();

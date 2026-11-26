const KEY = "crud_demo";
const input = document.querySelector("#input");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#list");

// [R] 조회
function load() {
  // 세션 저장소에서 KEY에 해당하는 값을 가져와 저장
  const raw = sessionStorage.getItem(KEY);
  // 가져온 값이 있으면 JS 객체, 배열로 파싱해서 반환하고
  // 없으면 빈 배열을 반환
  return raw ? JSON.parse(raw) : [];
}

// 저장
function save(items) {
  // 매개변수로 전달받은 값을 JSON 문자열화를 시켜 세션 저장소에 저장
  sessionStorage.setItem(KEY, JSON.stringify(items));
}

// 화면 그리기
function render() {
  // 세션 저장소에서 기존 목록을 불러와 items에 저장
  const items = load();
  // list 요소의 기존 내용을 초기화
  list.textContent = "";

  // items 배열의 요소를 하나씩 꺼내 반복
  items.forEach((item, index) => {
    // 빈 <li> 요소를 생성해 텍스트를 items 배열의 요소의 text 속성 값으로 지정
    const li = document.createElement("li");
    li.textContent = item.text + " ";

    // [U] 수정
    // 수정 버튼을 생성해 구성
    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.textContent = "수정";

    // 수정 버튼 클릭 시
    editBtn.onclick = () => {
      // 기존 내용을 기본값으로 넣은 입력 팝업을 띄웁니다.
      const next = prompt("새 내용", item.text);
      // 팝업에서 취소를 누르거나 새 입력값이 공백인 경우 함수를 종료
      if (!next || !next.trim()) return;
      // items 배열의 인덱스 번째 요소의 text 속성의 값을 새 입력값으로 변경
      items[index].text = next.trim();
      // 변경된 배열을 세션 저장소에 저장
      save(items);
      // 바뀐 내용을 화면에 업데이트
      render();
    };

    // [D] 삭제
    // 삭제 버튼을 생성해 구성
    const delBtn = document.createElement("button");
    delBtn.type = "button";
    delBtn.textContent = "삭제";

    // 삭제 버튼 클릭 시
    delBtn.onclick = () => {
      // items 배열에서 인덱스 번째 요소를 삭제
      items.splice(index, 1);
      // 변경된 배열을 세션 저장소에 저장
      save(items);
      // 바뀐 내용을 화면에 업데이트
      render();
    };

    // 새로운 항목에 수정, 삭제 버튼을 추가
    li.append(editBtn, delBtn);
    // 새로운 항목을 list 요소에 추가
    list.append(li);
  });
}

// [C] 생성
// addBtn 요소를 클릭하면
addBtn.onclick = () => {
  // text 변수에 입력한 문자열을 앞뒤 공백을 제거해 저장
  const text = input.value.trim();
  // 빈 문자열이면 함수를 종료
  if (!text) return;

  // 세션 저장소에서 기존 목록을 불러와 items에 저장
  const items = load();
  // 입력한 문자열을 text 속성 값으로 설정해 해당 객체를 items 배열에 저장
  // { text } = { text: text }
  items.push({ text });
  // 새 항목이 추가된 items 배열을 JSON.stringify()로 문자열화해서
  // 세션 저장소에 저장합니다.
  save(items);

  // 입력창을 초기화하고 변경된 세션 저장소의 데이터를 읽어와 화면에 그리기
  input.value = "";
  render();
};

// 초기 화면 그리기
render();

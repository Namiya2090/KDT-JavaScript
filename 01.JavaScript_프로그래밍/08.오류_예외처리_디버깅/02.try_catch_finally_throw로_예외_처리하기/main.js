const form = document.querySelector(".seat-form");
const input = document.querySelector("#seat-count");
const result = document.querySelector(".seat-result");

function parseSeatCount(rawValue) {
  // 전달된 값의 앞뒤 공백을 제거해 대입
  const value = rawValue.trim();
  const count = Number(value);

  // value가 빈 값이거나 count가 정수가 아니거나 1보다 작거나 8보다 클때 범위 오류를 던짐
  if (value === "" || !Number.isInteger(count) || count < 1 || count > 8) {
    throw new RangeError("좌석 수는 1부터 8 사이의 정수여야 합니다.");
  }

  // 반환
  return count;
}

form.addEventListener("submit", (event) => {
  // 기본 이벤트 제거
  event.preventDefault();

  // 기본 실행
  try {
    // 인자로 입력값을 전달해 parseSeatCount 함수 호출
    const count = parseSeatCount(input.value);
    // result 요소의 텍스트를 변경
    result.textContent = `${count}석을 선택했습니다.`;
  } catch (error) {
    // 오류 발생 시 범위 오류라면
    if (error instanceof RangeError) {
      // result 요소의 텍스트를 전달받은 문자열로 변경
      result.textContent = error.message;
    }
    // 아니라면 오류를 계속 던짐
    else throw error;
  } finally {
    // 입력창에 포커싱
    input.focus();
  }
});

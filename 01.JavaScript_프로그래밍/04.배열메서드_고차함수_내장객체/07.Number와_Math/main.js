const quantity = 13;
const capacity = 6;

// 작성할 곳: 유한한 숫자이며 음수가 아닌 수량인지 먼저 검사합니다.
// 유효하면 필요한 상자 수를 올림으로 계산하여 출력합니다.
if (!Number.isFinite(quantity) || quantity < 0) {
  console.log("수량을 확인해 주세요.");
} else {
  const boxes = Math.ceil(quantity / capacity);
  console.log(`필요한 상자 수: ${boxes}개`);
}

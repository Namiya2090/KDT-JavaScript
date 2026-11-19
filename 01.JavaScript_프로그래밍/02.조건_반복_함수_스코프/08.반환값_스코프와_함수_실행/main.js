const fee = 100;

// 호이스팅으로 인한 정상출력
console.log(getTotal(29999));
console.log(getTotal(30000));
console.log(fee);

// 30000 이상이면 배송비 무료, 미만이면 3000 반환
function getDeliveryFee(amount) {
  if (amount >= 30000) return 0;
  return 3000;
}

// 배송비 함수로 배송비를 구하고 물품 가격과 더한 값을 반환
function getTotal(amount) {
  const fee = getDeliveryFee(amount);
  return amount + fee;
}

const price = 7000; // 티켓 가격
const count = 3; // 티켓 수
const discount = 2000; // 할인 금액

// 할인 후 결제 금액 total
const total = price * count - discount;

// 금액과 20000원 이상인지 비교한 결과를 한 줄씩 출력
console.log(total + "원");
console.log(total >= 20000);

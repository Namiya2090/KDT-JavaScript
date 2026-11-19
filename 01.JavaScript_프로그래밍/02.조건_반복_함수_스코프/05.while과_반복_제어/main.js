let amount = 0;
let count = 0;
const target = 1000;

// target 값 이상이 될때까지 300씩 적립
while (amount < target) {
  amount += 300;
  count++;
}

// 출력
console.log("적립 횟수: " + count);
console.log("적립 금액: " + amount);

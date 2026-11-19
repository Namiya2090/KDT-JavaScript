const prices = [800, 1500, 2000];
let count = 0;
let sum = 0;

// 1000 이상인 가격의 개수와 합계를 구하는 반복문
for (let i = 0; i < prices.length; i++) {
  if (prices[i] < 1000) continue;
  count++;
  sum += prices[i];
}

// 출력
console.log("개수: " + count);
console.log("총 가격: " + sum);

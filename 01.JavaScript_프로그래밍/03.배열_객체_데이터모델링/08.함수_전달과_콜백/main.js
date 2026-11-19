// 두 값과 계산 함수를 받는 runCalculation 작성
function runCalculation(n1, n2, operation) {
  return operation(n1, n2);
}

// 계산 함수 두 가지
const add = (n1, n2) => n1 + n2;
const multiply = (n1, n2) => n1 * n2;

// 출력
console.log(`3 + 4 = ${runCalculation(3, 4, add)}`);
console.log(`3 x 4 = ${runCalculation(3, 4, multiply)}`);

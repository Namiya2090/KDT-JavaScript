// 매개변수에 rest
function sumPrices(...value) {
  // reduce로 합계를 구해 반환
  return value.reduce((total, value) => {
    return total + value;
  }, 0);
}

console.log(sumPrices());
console.log(sumPrices(3000));
console.log(sumPrices(3000, 1500, 500));

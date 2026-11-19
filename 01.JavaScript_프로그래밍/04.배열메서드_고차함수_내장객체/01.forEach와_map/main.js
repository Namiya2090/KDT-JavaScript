const prices = [12000, 8000, 5000];

// 1. forEach로 번호와 가격을 출력하세요.
const noticeResult = prices.forEach((price, index) => {
  const order = index + 1;
  console.log(`${order}. ${price}`);
});

// 2. map으로 10% 할인한 새 배열을 만드세요.
const discounted = prices.map((price) => {
  return price * 0.9;
});

// 3. 반환값, 할인 목록, 원본을 출력하세요.
console.log(noticeResult);
console.log(discounted);
console.log(prices);

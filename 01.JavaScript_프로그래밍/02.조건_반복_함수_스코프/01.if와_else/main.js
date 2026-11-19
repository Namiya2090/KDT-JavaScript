const amount = 29000;
let fee = 0;

// 가격이 30000 이상이면 배송비 무료, 미만이면 3000
if (amount >= 30000) fee = 0;
else fee = 3000;

// 출력
console.log("배송비: " + fee);

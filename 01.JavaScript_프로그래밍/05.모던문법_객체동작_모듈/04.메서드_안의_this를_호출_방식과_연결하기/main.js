const first = {
  title: "노트",
  price: 3000,
  quantity: 2,
  getTotal: function () {
    // 객체 자신의 가격과 갯수를 곱하기
    return this.price * this.quantity;
  },
};

const second = {
  title: "펜",
  price: 1000,
  quantity: 4,
  getTotal: first.getTotal,
};

console.log(first.getTotal());
console.log(second.getTotal());
console.log(first.getTotal === second.getTotal);

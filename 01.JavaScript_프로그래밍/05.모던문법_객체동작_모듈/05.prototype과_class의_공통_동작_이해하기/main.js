class Product {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  getTotal(quantity) {
    return this.price * quantity;
  }
  static isValidPrice(price) {
    return price >= 0;
  }
}
class SaleProduct extends Product {
  constructor(title, price, rate) {
    super(title, price);
    this.rate = rate;
  }
  getTotal(quantity) {
    return super.getTotal(quantity) * (1 - this.rate);
  }
}
const normal = new Product("노트", 3000);
const sale = new SaleProduct("노트", 3000, 0.1);
console.log(normal.getTotal(2));
console.log(sale.getTotal(2));
console.log(Product.isValidPrice(-100));
console.log(sale instanceof Product);
console.log(Object.hasOwn(sale, "getTotal"));

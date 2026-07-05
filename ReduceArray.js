const orderPrice = [100, 200, 300, 400, 500];

const totalOrderValue = orderPrice.reduce((total, price) => total + price, 0);

console.log(`The total order value is`, totalOrderValue);
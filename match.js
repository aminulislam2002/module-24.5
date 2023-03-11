const numbers = [10, 20, 30, 40, 50];
/* for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
} */
for (const number of numbers) {
  console.log(number);
}
const products = [
  { id: "01", name: "walton vivo", price: 19000 },
  { id: "02", name: "walton samsung Vivo", price: 19000 },
  { id: "03", name: "walton iphone", price: 19000 },
  { id: "04", name: "walton oppo", price: 19000 },
  { id: "05", name: "walton vivo", price: 19000 },
];
/* for (const product of products) {
  console.log(product);
} */
function matchProduct(product, search) {
  const matchd = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matchd.push(product);
    }
  }
  return matchd;
}
const result = matchProduct(products, "vivo");
console.log(result);

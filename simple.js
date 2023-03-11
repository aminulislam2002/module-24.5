// 1 theke 5 porjonto sonkhar jogfol ber korar niom
/* let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum = sum + i;
}
console.log(sum); */

// 5 theke 1 porjonto output
/* for (let j = 5; j >= 1; j--) {
  console.log(j); 
} */

// 5 theke 1 porjont(revers way) sum using function
function sum(i) {
  if (i == 1) {
    return 1;
  }
  return i + sum(i - 1);
}
const result = sum(5);
console.log(result);

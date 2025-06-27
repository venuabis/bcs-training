var a = 50;
var b = 40;
var c = a + b;

var a1 = 60;
var b1 = 40;
var c1 = a1 + b1;

// function - Declare once - Reuse many times

// sum -> function name
// function Declaration / Definition
// {} -> function body

// n1, n2 -> parameter
// n1 = 0 -> Default value
// 1. Terms
// 2. Working
// 3. Default value
// 4. Rest
function sum(n1 = 0, n2 = 0, ...arr) {
  console.log(arr);
  const ans = n1 + n2;
  return ans.toFixed(2);
}

// 60, 80 -> Arguments
var result1 = sum(60, 80); // function call // Reuse
var result2 = sum(70, 100); // Reuse
var result3 = sum(70.7867, 100.1111);

var result4 = sum(100);
var result5 = sum();

// arguments  > parameter
var result6 = sum(50, 60, 80, 90, 100);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);

// var x = 1;

// if (true) {
//   var x = 2;
//   console.log("Var dentro de scope", x);
// }

// console.log("Var fuera de scope", x);

let x = 1;

if (true) {
  console.log(x);
  let x = 2;
  console.log(x);
}

console.log(x);

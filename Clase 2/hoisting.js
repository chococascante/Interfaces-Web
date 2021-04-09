function foo() {
  document.getElementById("demo").innerHTML += " Hola Mundo!";
}

function fun() {
  return 10;
}

console.log(foo); // FELIZ COMO UNA LOMBRIZ

const numero = fun();

console.log(fun()); // FELIZ COMO UNA LOMBRIZ

window.onload = foo;

const x = 5;
console.log(x);

console.log(foo);

function suma(sumando1, sumando2) {
  return sumando1 + sumando2;
}

const document = {
  suma: suma,
};

const numero = suma(1, 2);

console.log(numero); // FELIZ COMO UNA LOMBRIZ

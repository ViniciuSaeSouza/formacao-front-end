// 1 - variáveis
let nome = "Saes";

console.log(nome);

nome = "Saes Souza";

console.log(nome);

const sexo = "Homem"; //const = constante, não muda seu valor.

console.log(sexo);

// 2 - mais sobre variáveis

// let 2test = "inválido";
// let @test = "inválido";

let a = 10,
  b = 20,
  c = 30;

console.log(a, b, c);

const nomecompleto = "Matheus Battisti";

const nomeCompleto = "João da Silva";

console.log(nomecompleto);

console.log(nomeCompleto);

let _test = "válido";

let $test = "válido";

console.log(_test, $test);

// 3 - Prompt

// const age = prompt("Digita a sua idade: ");

// console.log(`Você tem ${age} anos`);

// // 4 - Alert
// alert("testando");

// const z = 10;

// alert(z)

// 5 - Math
// console.log(Math.max(5, 2, 1, 24));

// console.log(Math.floor(5.14));

// console.log(Math.ceil(6.7));

// // 6 - Console
// console.log("Log!")

// console.error("erro!")

// console.warn("aviso!")

// 7 - if
// const m = 10;

// if (m > 5) {
//   console.log("M é maior que 5!")
// }

// const user = "João"

// if(user === "João") {
//   console.log("Olá joão!");
// }

// if(user === "Maria") {
//   console.log("Olá Maria!");
// }

// console.log(user === "João", user === "Maria");

// 8 - else
// const loggedIn = false

// if(loggedIn) {
//   console.log("Está logado!")
// } else {
//   console.log("Não está logado!")
// }

// const q = 10;
// const w = 25;

// if (q > 5 && w > 20) {
//   console.log("Números mais altos!")
// } else {
//   console.log("Números mais baixos!")
// }

// 9 - else if
if (1 > 2) {
  console.log("Teste1");
} else if (2 > 3) {
  console.log("Teste2")
} else if ( 5 > 1) {
  console.log("Teste3")
}

const userName = "Saes"
const userAge = 28;

if (userName === "Sales" && userAge === 30) {
  console.log("Bem vindo Sales!")
} else if (userName === "Saes" && userAge === 28) {
  console.log("Bem vindo Saes! você tem 28 anos")
} else {
  console.log("Nenhuma condição aceita!")
}


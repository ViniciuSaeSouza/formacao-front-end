// 1 - Number
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -128);

// 2 - Ops. Aritméticas
console.log(2 + 4);
console.log(10 - 5);
console.log(5 * 4);
console.log(10 / 2);

// 3 - Special Numbers
console.log(typeof Infinity); // Infinity com 'i' Maiúsculo

console.log(typeof -Infinity);

console.log(typeof 12 * "asd");

console.log(typeof NaN);

// 4 - Strings
console.log(typeof "Um texto em aspas");

console.log(typeof "Um texto em aspas simples");

console.log(typeof `Um texto em cràse`);

// 5 - Simbolos especiais em strings
console.log("Testando a \n quebra de linha");

console.log("Espaçamento \t de tab");

// 6 - Concatenação
console.log("Oi," + " tudo" + " bem?");

console.log(`Testando` + ` com` + ` crase`);

// 7 - Template Strings
console.log(`A soma de 2 + 2 é: ${2 + 2}`);

// 8 - Boolean
console.log(true);

console.log(false);

console.log(5 > 20);

console.log(30 > 10);

console.log(typeof true);

// 9 - Comparações
console.log(5 <= 5);

console.log(5 < 5);

console.log(10 == 10);

console.log(10 == 9);

console.log(10 != 9);

// 10 - Idêntico
console.log(9 == "9");

console.log(9 === "9");

console.log(9 != "9");

console.log(9 !== "9");

// 11 - Operadores Lógicos
console.log(true && true);

console.log(true && false);

console.log(5 > 2 && 2 < 10);

console.log(5 > 2 && "Matheus" === 1);

console.log(5 > 2 || "Matheus" === 1);

console.log(5 < 2 || 2 > 10);

console.log(!true);

console.log(!5 > 2);

// 12 - Empty Values 
console.log(typeof null, typeof undefined);

console.log(null == undefined);

console.log(null === undefined);


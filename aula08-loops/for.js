const readline = require("readline-sync");

let pares = 0;
let impares = 0;

for (let i = 1; i <= 10; i++) {
  let numero = readline.questionInt(`Digite o ${i}º número (Enter the ${i}th number): `);

  if (numero % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

console.log(`\nTotal de números pares: ${pares}`);
console.log(`Total de números ímpares: ${impares}`);

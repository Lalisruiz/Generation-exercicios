const readline = require('readline-sync');

let numero;
let somaPositivos = 0;

do {
  numero = parseInt(readline.question('Digite um número: '));

  if (numero > 0) {
    somaPositivos += numero;
  }

} while (numero !== 0);

console.log(`\nA soma dos números positivos é: ${somaPositivos}`);

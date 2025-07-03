const readline = require('readline-sync');

// Solicita os números ao usuário
let A = parseInt(readline.question("Digite o número A: "));
let B = parseInt(readline.question("Digite o número B: "));
let C = parseInt(readline.question("Digite o número C: "));

// Calcula a soma de A e B
let soma = A + B;

// Exibe a expressão e o resultado da comparação
console.log(`${A} + ${B} = ${soma} ${soma > C ? '>' : soma < C ? '<' : '='} ${C}`);

// Verifica se a soma é maior, menor ou igual a C e exibe a mensagem correspondente
if (soma > C) {
  console.log("A Soma de A + B é Maior do que C");
} else if (soma < C) {
  console.log("A Soma de A + B é Menor do que C");
} else {
  console.log("A Soma de A + B é Igual a C");
}
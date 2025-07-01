const readline = require('readline-sync');

// Solicita um número ao usuário
let num = parseInt(readline.question("Digite um número: "));

// Verifica se o número é par ou ímpar
let paridade = (num % 2 === 0) ? "par" : "ímpar";
let sinal;

// Verifica se o número é positivo, negativo ou neutro
if (num > 0) {
  sinal = "positivo";
} else if (num < 0) {
  sinal = "negativo";
} else {
  sinal = "neutro";
}

// Exibe o resultado de acordo com o valor digitado
if (num === 0) {
  console.log("O número 0 é neutro (nem positivo nem negativo) e é par.");
} else {
  console.log(`O Número ${num} é ${paridade} e ${sinal}!`);
}
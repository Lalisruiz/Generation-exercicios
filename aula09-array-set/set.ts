import * as readlineSync from 'readline-sync';

// Criando o Set com 10 números inteiros de 0 a 9
let numeros: Set<number> = new Set();

for (let i = 0; i < 10; i++) {
    numeros.add(i);
}

// Mostra todos os números do Set
console.log("\nNúmeros no Set:");
numeros.forEach((numero) => {
    console.log(numero);
});

// Solicita ao usuário um número para buscar
let numeroDigitado = parseInt(readlineSync.question("\nDigite o número que você deseja encontrar: "));

// Verifica se o número está no Set
if (numeros.has(numeroDigitado)) {
    console.log(`\nO número ${numeroDigitado} foi encontrado!`);
} else {
    console.log(`\nO número ${numeroDigitado} não foi encontrado!`);
}
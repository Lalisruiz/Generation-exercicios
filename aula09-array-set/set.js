"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// Criando o Set com 10 números inteiros de 0 a 9
var numeros = new Set();
for (var i = 0; i < 10; i++) {
    numeros.add(i);
}
// Mostra todos os números do Set
console.log("\nNúmeros no Set:");
numeros.forEach(function (numero) {
    console.log(numero);
});
// Solicita ao usuário um número para buscar
var numeroDigitado = parseInt(readlineSync.question("\nDigite o número que você deseja encontrar: "));
// Verifica se o número está no Set
if (numeros.has(numeroDigitado)) {
    console.log("\nO n\u00FAmero ".concat(numeroDigitado, " foi encontrado!"));
}
else {
    console.log("\nO n\u00FAmero ".concat(numeroDigitado, " n\u00E3o foi encontrado!"));
}

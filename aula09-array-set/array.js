"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// Criando um array vazio para guardar as cores
var cores = [];
// Repetir 5 vezes para pedir ao usuário digitar as cores
for (var i = 0; i < 5; i++) {
    var cor = readlineSync.question("Digite uma cor: ");
    cores.push(cor);
}
// Mostrar todas as cores digitadas
console.log("\nTodas as cores digitadas:");
for (var i = 0; i < cores.length; i++) {
    console.log(cores[i]);
}
// Mostrar as cores em ordem alfabética
cores.sort();
console.log("\nCores em ordem crescente:");
for (var i = 0; i < cores.length; i++) {
    console.log(cores[i]);
}

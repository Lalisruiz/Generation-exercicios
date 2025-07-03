import * as readlineSync from 'readline-sync';

// Criando um array vazio para guardar as cores
let cores: string[] = [];

// Repetir 5 vezes para pedir ao usuário digitar as cores
for (let i = 0; i < 5; i++) {
    let cor = readlineSync.question("Digite uma cor: ");
    cores.push(cor);
}

// Mostrar todas as cores digitadas
console.log("\nTodas as cores digitadas:");
for (let i = 0; i < cores.length; i++) {
    console.log(cores[i]);
}

// Mostrar as cores em ordem alfabética
cores.sort();

console.log("\nCores em ordem crescente:");
for (let i = 0; i < cores.length; i++) {
    console.log(cores[i]);
}
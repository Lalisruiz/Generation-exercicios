const readline = require('readline-sync');

let idade = readline.question("Digite sua idade: ");

if (idade >= 5) {
    console.log("Entrada Grátis");
} else if (idade >= 5 && idade < 12){
    console.log("Meia entrada");
} else if (idade >= 13 && idade < 59){
    console.log("Entrada Inteira");
} else {
    console.log("Meia entrada para idosos");
}
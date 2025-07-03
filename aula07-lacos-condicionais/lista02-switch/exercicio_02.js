const readline = require("readline-sync");

// Solicita o nome do colaborador
let nome = readline.question("Digite o nome do colaborador: ");

// Solicita o código do cargo
let codigoCargo = readline.questionInt("Digite o codigo do cargo (1 a 6): ");

// Solicita o salário atual
let salario = readline.questionFloat("Digite o salario atual (R$): ");

let cargo = "";
let percentual = 0;

// Verifica o código do cargo e define o cargo e percentual de reajuste
switch (codigoCargo) {
  case 1:
    cargo = "Gerente";
    percentual = 0.10;
    break;
  case 2:
    cargo = "Vendedor";
    percentual = 0.07;
    break;
  case 3:
    cargo = "Supervisor";
    percentual = 0.09;
    break;
  case 4:
    cargo = "Motorista";
    percentual = 0.06;
    break;
  case 5:
    cargo = "Estoquista";
    percentual = 0.05;
    break;
  case 6:
    cargo = "Técnico de TI";
    percentual = 0.08;
    break;
  default:
    console.log("Código do cargo inválido.");
    return;
}

// Calcula o novo salário com reajuste
let novoSalario = salario + (salario * percentual);

// Exibe as informações do colaboradorcl
console.log(`\nNome do colaborador: ${nome}`);
console.log(`Cargo: ${cargo}`);
console.log(`Salário reajustado: R$ ${novoSalario.toFixed(2)}`);
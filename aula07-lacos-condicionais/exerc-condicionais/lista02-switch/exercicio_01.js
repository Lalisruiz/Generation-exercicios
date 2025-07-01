const readline = require("readline-sync");

// Exibe o menu de produtos
console.log("### MENU DE PRODUTOS ###");
console.log("1 - Cachorro Quente - R$ 10.00");
console.log("2 - X-Salada        - R$ 15.00");
console.log("3 - X-Bacon         - R$ 18.00");
console.log("4 - Bauru           - R$ 12.00");
console.log("5 - Refrigerante    - R$ 8.00");
console.log("6 - Suco de Laranja - R$ 13.00");

// Solicita o código do produto
let codigo = readline.questionInt("Digite o codigo do produto (1 a 6): ");
// Solicita a quantidade
let quantidade = readline.questionInt("Digite a quantidade: ");

let produto = "";
let preco = 0;

// Verifica o código do produto e define o nome e preço
switch (codigo) {
  case 1:
    produto = "Cachorro Quente";
    preco = 10.00;
    break;
  case 2:
    produto = "X-Salada";
    preco = 15.00;
    break;
  case 3:
    produto = "X-Bacon";
    preco = 18.00;
    break;
  case 4:
    produto = "Bauru";
    preco = 12.00;
    break;
  case 5:
    produto = "Refrigerante";
    preco = 8.00;
    break;
  case 6:
    produto = "Suco de Laranja";
    preco = 13.00;
    break;
  default:
    console.log("Código inválido.");
    return;
}

// Valida a quantidade
if (quantidade <= 0) {
  console.log("Quantidade inválida.");
  return;
}

// Calcula o valor total
let total = quantidade * preco;

// Exibe o produto e o valor total
console.log(`\nProduto: ${produto}`);
console.log(`Valor total: R$ ${total.toFixed(2)}`);
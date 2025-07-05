import * as readline from 'readline-sync';

class Fila {
  private fila: string[] = [];

  adicionar(cliente: string) {
    this.fila.push(cliente);
    console.log('\nCliente Adicionado!');
  }

  listar() {
    if (this.fila.length === 0) {
      console.log('\nA fila está vazia!');
    } else {
      console.log('\nLista de Clientes na Fila:');
      this.fila.forEach(cliente => console.log(cliente));
    }
  }

  chamar() {
    if (this.fila.length === 0) {
      console.log('\nA fila está vazia!');
    } else {
      this.fila.shift();
      console.log('\nO Cliente foi chamado!');
    }
  }
}

const fila = new Fila();
let opcao: number;

do {
  console.log('\n1 - Adicionar Cliente');
  console.log('2 - Listar Clientes');
  console.log('3 - Chamar Cliente');
  console.log('0 - Sair');
  opcao = parseInt(readline.question('\nDigite uma opção: '));

  switch (opcao) {
    case 1:
      const nome = readline.question('Digite o nome: ');
      fila.adicionar(nome);
      break;
    case 2:
      fila.listar();
      break;
    case 3:
      fila.chamar();
      break;
    case 0:
      console.log('\nPrograma Finalizado!');
      break;
    default:
      console.log('\nOpção inválida!');
  }
} while (opcao !== 0);

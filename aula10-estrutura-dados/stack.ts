import * as readline from 'readline-sync';

class Pilha {
  private livros: string[] = [];

  adicionar(livro: string) {
    this.livros.push(livro);
    console.log('\nLivro adicionado!');
  }

  listar() {
    if (this.livros.length === 0) {
      console.log('\nA Pilha está vazia!');
    } else {
      console.log('\nLista de Livros na Pilha:');
      this.livros.forEach(livro => console.log(livro));
    }
  }

  retirar() {
    if (this.livros.length === 0) {
      console.log('\nA Pilha está vazia!');
    } else {
      this.livros.pop();
      console.log('\nUm livro foi retirado da pilha!');
    }
  }
}

const pilha = new Pilha();
let opcao: number;

do {
  console.log('\n1 - Adicionar Livro');
  console.log('2 - Listar Livros');
  console.log('3 - Retirar Livro');
  console.log('0 - Sair');
  opcao = parseInt(readline.question('\nDigite uma opção: '));

  switch (opcao) {
    case 1:
      const livro = readline.question('Digite o nome do livro: ');
      pilha.adicionar(livro);
      break;
    case 2:
      pilha.listar();
      break;
    case 3:
      pilha.retirar();
      break;
    case 0:
      console.log('\nPrograma Finalizado!');
      break;
    default:
      console.log('\nOpção inválida!');
  }
} while (opcao !== 0);

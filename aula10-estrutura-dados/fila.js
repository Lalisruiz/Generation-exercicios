"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline-sync"));
class Fila {
    constructor() {
        this.fila = [];
    }
    adicionar(cliente) {
        this.fila.push(cliente);
        console.log('\nCliente Adicionado!');
    }
    listar() {
        if (this.fila.length === 0) {
            console.log('\nA fila está vazia!');
        }
        else {
            console.log('\nLista de Clientes na Fila:');
            this.fila.forEach(cliente => console.log(cliente));
        }
    }
    chamar() {
        if (this.fila.length === 0) {
            console.log('\nA fila está vazia!');
        }
        else {
            this.fila.shift();
            console.log('\nO Cliente foi chamado!');
        }
    }
}
const fila = new Fila();
let opcao;
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

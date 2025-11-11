let nome  = "Carlos";
let idade = 23;
let ads = true;
let jogos = ["DarkSouls", "League of Legends", "Tales of Phantasia", "Final Fantasy XIV", "Silksong"];

let pessoaUm = {
    nome: "Carlos",
    idade: 23,
    ads: true
};

let pessoaDois = {
    nome: "Igo",
    idade: 28,
    ads: true,
    jogos: ["Farming Simulator 2025", "PES 2012", "Terranigma", "Super Mario World", "Resident Evil"]
};

console.log("Nome: ", nome);
console.log("Idade: ", idade);
console.log("Cursa ADS?", ads);
console.log("Jogo favorito: ", jogos[2]);
nome = "Igo";
console.log(nome);
console.log("Lista de nomes: ", pessoaUm.nome, " e ", pessoaDois.nome);
console.log("Jogo do", pessoaDois.nome,":", pessoaDois.jogos[4]);

/*
    Operadores
*/

//Operadores Aritméticos

let x;
let y;
let total;

x = 5;
y = 3;

total = x + y;
console.log("Adição: ",total);

total = x - y;
console.log("Subtração: ",total);

total = x * y;
console.log("Multiplicação: ",total);
console.log("Multiplacação: ", x*y);

total = x / y;
console.log("Divisão: ", total);

total = x % y;
console.log("Resto da Divisão: ", total);

total = x ** y;
console.log("Exponencial: ", total);


//Opderadores de Atribuição
x += 6;

console.log("O valor de X é: ",x);


//Operadores de Comparação
console.log("Igual a", 5 == "5");
console.log("Estritamente igual a", 5 === "5");

console.log("Diferente de", 5 != 6);
console.log("Estritamente diferente de", 5 !== "7");

console.log("Maior que", 10 > 5);
console.log("Menor que", 10 < 5);

console.log("Maior ou igual a", 10 >= 10);
console.log("Menor ou igual a", 10 <= 5);

//Opradores Lógicos

idade = 17;
let temCarteira = true;

console.log("Pode dirigir? ", (idade >= 18) && temCarteira);

let pix = false;
let cartao = true;

console.log("Pagar a conta?", pix || cartao);

console.log("Pode dirigir? ", !(idade >= 18) && temCarteira);


//Estruturas de Decisão

if ((pix === true)||(cartao === true)){
    console.log("Irá pagar.");
} else {
    console.log("Não tem como pagar.");
}

const diaSemana = 6;
let nomeDia;

switch (diaSemana){
    case 1:
        nomeDia = "Domingo";
        break;
    case 2:
        nomeDia = "Segunda-feira";
        break;
    case 3:
        nomeDia = "Terça-feira";
        break;
    case 4:
        nomeDia = "Quarta-feira";
        break;
    default:
        nomeDia = "Dia inválido";
}

if (diaSemana === 1){
    nomeDia = "Domingo";
} else if (diaSemana === 2){
    nomeDia = "Segunda-feira";
} else if (diaSemana === 3){
    nomeDia = "Terça-feira";
} else {
    nomeDia = "Dia inválido";
}

console.log("Hoje é:", nomeDia);



//Estrutura de Repetição

for (var aux = 0; aux <= 5; aux++){
    console.log("Valor da variavel auxiliar: ", aux);
}

let aux2 = 0;
while (aux2 <= 5){
    console.log("Valor da segunda variavel auxiliar: ",aux2);
    aux2++;
}

aux2 = 0;
do{
    console.log("Novo valor da segunda variavel auxiliar: ", aux2);
    aux2++;
} while (aux2 <= 5);

for (var aux = 0; aux <= 10; aux++){
    if (aux === 6){
        console.log("Valor da variavel auxiliar chegou a 6");
        break;
    }
    console.log("Valor da variavel auxiliar: ", aux);
}

for (var aux = 1; aux <= 10; aux++){
    if (aux % 2 !== 0){
        continue;
    }
    console.log("Número par encontrado: ", aux);
}

// Funções

function nomeDaFuncao () {
    console.log("Sou uma função");
}

nomeDaFuncao();

function soma (valorA, valorB) {
    console.log("A soma dos dois valores é:", valorA+valorB);
}

let valorX;
let valorY;

valorX = 199,3;
valorY = 120;

soma(valorX, valorY);

valorX = 56;
valorY = 5000;

soma(valorX, valorY);

function contaBancaria (valor){
    let saldoInicial = valor;

    function depositar (quantia){
        saldoInicial += quantia;
        console.log ("Deposito concluido com sucesso, novo saldo da conta é: ", saldoInicial);
    }

    function sacar (quantia){
        saldoInicial -= quantia;
        console.log ("Saque concluido com sucesso, novo saldo da conta é: ", saldoInicial);
    }

    return {
        depositar: depositar,
        sacar: sacar,
        verSaldo: () => console.log("O saldo atual é: ", saldoInicial)
    };
}



let minhaConta = contaBancaria(5000);


minhaConta.verSaldo();

minhaConta.sacar(4500);

let minhaContaDois = contaBancaria(100);

minhaContaDois.depositar(4500);


//Arrow Function
const somar = (a, b) => a + b;
console.log("Somar dois valores", somar(199.3, 120));

const subtrair = (a, b) => a - b;

let resultado = somar(50, 25);
console.log(resultado);

console.log("Valor resultado", subtrair(50, 25));

const par = valor => valor % 2;
let valorPar = par(23);
if (valorPar == 0) {
    console.log("É par");
} else {
    console.log("Não é par");
}

//Arrays

const nota = [7, 6, 6.5, 7.5, 8];

let tamanhoArray = nota.length;
const totalNota = nota.reduce((somaTotal, valorAtual) => {
    return somaTotal + valorAtual;
}, 0);

console.log("Media de notas: ", totalNota / tamanhoArray);

console.log("Tamanho do array é: ", tamanhoArray);

const precos = [9.99, 12, 28, 3.99];
const precosComDesconto = precos.map(precos => precos * 0.9);

console.log("Preços com desconto: ", precosComDesconto);
console.log("Preços sem desconto: ", precos);

const notaMaior = nota.filter(nota => nota >= 7);
console.log("Notas maiores que 7:", notaMaior);
console.log("Todas as notas:", nota);





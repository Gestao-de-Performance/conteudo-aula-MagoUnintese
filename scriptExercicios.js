//Aula 2 - Exercício 01
const produto ={
    nome: "HD 500gb",
    preco: 150,
    emEstoque: true,
    marca: ["Seagate", "Green", "Kingstom"]
};

console.log("O produto é:", produto.nome, "; Valor:", produto.preco, "; Marca:",produto.marca[1]);

//Aula 2 - Exercício 02
const precoOriginal = 120;
const desconto = 0.15;
let valorDesconto = precoOriginal * desconto;
let precoFinal = precoOriginal;

console.log(precoFinal -= valorDesconto);


//Aula 2 - Exercício 03

const usuarioDigitado = "admin";
const senhaDigitada = "senhaforte123";
const usuarioCorreto = "admin";
const senhaCorreta = "senhaforte123";
const estaBloqueado = false;

let credenciaisCorretas = false;
let loginLiberado = false;

if ((usuarioDigitado === usuarioCorreto) && (senhaDigitada === senhaCorreta)){
    credenciaisCorretas = true;
}

if ((credenciaisCorretas == true) && (estaBloqueado == false)){
    loginLiberado = true;
}

console.log(loginLiberado);


//Aula 03 - Exercício 01

const ladoA = 5;
const ladoB = 6;
const ladoC = 7;

if ((ladoA === ladoB) && (ladoA === ladoC)){
    console.log("Equilatero");
} else if ((ladoA === ladoB) || (ladoA === ladoC) || (ladoB === ladoC)){
    console.log("Isoceles");
} else {
    console.log("Escaleno");
}

//Aula 03 - Exercício 02

const numero = 9;

for (let aux = 1; aux <= 10; aux++){
    console.log(numero,"x",aux,"=", numero*aux);
    switch (aux){
        case 5:
            console.log("Metade da tabuada alcançada!");
            break;
        case 10:
            console.log("Fim da tabuada.");
            break;
    }
}

//Aula 03 - Exercício 03

const frase = "JavaScript é ivertio!";

let indice = 0;

while (indice < frase.length){
    const letraAtual = frase[indice];

    console.log("Letra que está sendo processada no momento:", letraAtual);

    if (letraAtual === " "){
        indice ++;
        continue;
    } else if (letraAtual === "d"){
        break;
    }

    indice ++;  
}

console.log("Valor final do indice: ",indice);

//Exercício Bonus 01
const valorUm = 199.3;
const valorDois = 120;

console.log("A soma dos valores é", valorUm + valorDois);

//Exercício Bonus 02 e 03
const valores = [51, 41, 61, 4, 5, 15320, 7, 8, 9, 10];
let somaVetor = 0;

for (let aux2 = 0; aux2 < valores.length; aux2++){
    somaVetor += valores[aux2];

    if ((valores[aux2] % 1 === 0) && (valores[aux2] % valores[aux2] === 0)){
        if((valores[aux2] % 2 === 0) || (valores[aux2] % 3 === 0)){
            if ((valores[aux2] === 2) || (valores[aux2] === 3)){
                console.log("O número:",valores[aux2],"é primo");
            } else{
                console.log("O número:",valores[aux2],"não é primo");
            }
        } else{
            console.log("O número:",valores[aux2],"é primo");
        }
    } else{
        console.log("O número:",valores[aux2],"não é primo");
    }
}

console.log("A média dos valores do array é:", somaVetor / valores.length);

//Exercício Bonus 04

const jogadorUm = 5;
const jogadorDois = 12;

let resultado = jogadorUm + jogadorDois;

if (resultado % 2 === 0){
    console.log("Par ganhou");
} else {
    console.log("Impar ganhou");
}

//Exercício Bonus 05

function fibonacci(numero){
    if (numero === 0){
        return 0;
    } else if (numero === 1){
        return 1;
    }

    let termoAnterior2 = 0;
    let termoAnterior1 = 1;
    let termoAtual = 0;

    for (let aux3 = 2; aux3 <= numero; aux3++){
        termoAtual = termoAnterior1 + termoAnterior2;
        termoAnterior2 = termoAnterior1;
        termoAnterior1 = termoAtual;
    }

    return termoAtual;
}

const valor = 14;
console.log("O", valor, "termo de fibonacci é:",fibonacci(valor));
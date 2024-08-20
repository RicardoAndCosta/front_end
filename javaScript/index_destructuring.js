/**
 *  É um recurso implementado no ES2015 onde podemos capturar fragmentos das informações repassadas
 *  informando apenas o paramentro que queremos buscar
 */

const Pessoa = {
    nome: 'Ricardo',
    idade: 39,
    endereco: {
        rua: 'Av Brasil',
        numero: 1234,
        cidade: 'São Paulo',
        uf: 'SP',
        cep: '12345-678'
    }
}

var {nome, idade} = Pessoa; // posso atribuir essa informação em uma variavel
console.log(nome, idade);

var {nome: n, idade: i} = Pessoa 
console.log(n, i);

console.log(Pessoa.endereco.rua);

var {endereco: {rua: logradouro, numero: nr}} = Pessoa;
console.log(`${logradouro}, ${nr}`);

var {endereco: {rua, numero, cep ='cep desconhecido'}} = Pessoa;
console.log(`${rua}, ${numero}, ${cep}`);

var { cidade: {uf, cep}} = Pessoa; // aqui o código quebra pois UF e CEP não estão no Pessoa, mas sim em Endereco

//também podemos realizar a desestruturação de um Array é menos comum, mas pode acontecer
const arr = [10, 20, 30, 40]
var [a] = arr;
console.log(a);

// posso pegar qq indice do array apenas separando por , 
var [a, b, ,d] = arr;
console.log(a, b, d);

// como pegar um indice de Array dentro de outro Array
const arrr = [
    [10, 20, 30, 40], 
    ['a', 'b', 'c', 'd']
];

// passo o primeiro array vazio e no segundo informo apenas a posição que preciso 
//LEMBRANDO É POUCO PROVAVEL PEGAR CASOS SEMELHANTES, mas pode acontecer
const [ , [ , , x]] = arrr; 
console.log(x);

// Podemos usar funções
function intervalo({min, max = 100}) {
    const res = Math.random() * (max - min) + min;

    return Math.floor(res)
}

console.log(
    intervalo({min: 10, max: 20})
);

const valores = {max: 50, min: 30}
console.log(
    intervalo(valores)
);

console.log(
    intervalo({min: 90})
);

// com array
function intervaloArr([min = 0, max = 100]) {
    console.log(min, max);

    // condicional que verifica se o primeiro valor informado é maior que o segundo se for ele inverte os dois para que a function funcione corretamente
    if (min > max) [min, max] = [max, min]

    const resArr = Math.random() * (max - min) + min
    return Math.floor(resArr)
}

console.log(
    intervaloArr([20, 30]),
    intervaloArr([30, 10]),
    intervaloArr([90]),
    intervaloArr([ , 5])
);
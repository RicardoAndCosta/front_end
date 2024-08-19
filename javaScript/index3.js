// Array
const valores = [5, 7.8, 6, 9, 10]
console.log(valores);

// qdade de elementos no array
console.log(valores.length);

//printa um elemento especifico
console.log(valores[3]);
console.log(valores[9]); // um elemento fora de indice

// declaração de um novo valor
valores[2] = 8;
valores[9] = 30; // fará q sejam criados 4 espaços vazios no array
console.log(valores);

//adicionar elementos no array
valores.push(35); // adiciona um elemento no final od array
console.log(valores);
valores.unshift(6); // adiciona um elemento na primeira posição do array
console.log(valores);
valores.splice(4, 0, 'joao', 'maria', 'jose'); // adiciona a partir do indice 'i' sem remover os valores que serãopassados na sequência
console.log(valores);

//remover elementos do array
valores.pop(); //remove o útimo elemento do array
console.log(valores);
valores.shift(); // remove o primeiro elemento do array
console.log(valores);
delete valores[4]; //remove o elemento informado
console.log(valores);
valores.splice(4, 1, 'pedro'); // qdo é informado no segundo paramento o valor ele busca no array a posição e troca pelo próximo valor informado 
console.log(valores);
let novo = valores.slice(4); // cria um novo array a partir do parametro informado 
console.log(novo);
let novo2 = valores.slice(4, 7); // podendo ter parametro do limitação
console.log(novo2);

// usos
const aprovados = ['João', 'Pedro', 'Daniel', 'Ronaldo', 'Cesar', 'Maria'];

// Forma tradicional
aprovados.forEach(function(nome, i) {
    console.log(`Nome do aprovado: ${i+1}) ${nome}`);
})

//Arrow function
aprovados.forEach(nome => console.log(`Nome do aprovado: ${nome}`))

//Armazenar uma função numa "variavel"
const exibirAprovados = aprovado => console.log('function variable: '+aprovado);
aprovados.forEach(exibirAprovados);

// como um forEach funciona ele acaba sendo um laço for que é executado enquanto houver valores para executar
// na pratica seria algo como
Array.prototype.meuForEach = function(callback) {

    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
};
const exibirAprovados2 = aprovado => console.log('function variable with meuForEach: '+aprovado);
aprovados.meuForEach(exibirAprovados2);

// MAP
// map ele serve para transformar um array em outro array com os dados transformados sem mudar o array original
const numbers = [1, 2, 3, 4, 5, 6] 

let results = numbers.map(function(e) {
    return e * 2
})
console.log(results);

const sum2 = el => el + 2;
const triple = el => el * 3;
const convertToBRL = el => `R$ ${parseFloat(el).toFixed(2).replace('.', ',')}`;

let newResults = numbers.map(sum2).map(triple).map(convertToBRL);
console.log(newResults);

// outros exemplos
    //JSON
const cart = [
    '{ "name": "Arroz", "price": 29.87}',
    '{ "name": "Feijão", "price": 9.87}',
    '{ "name": "Batata", "price": 6.74}',
    '{ "name": "Macarrão", "price": 3.87}',
    '{ "name": "Sal", "price": 1.87}',
    '{ "name": "Ovos", "price": 11.21}',
];

const jsonParse = json => JSON.parse(json);
const price = product => product.price;

const jsonResult = cart.map(jsonParse).map(price);
console.log(jsonResult);

// como um MAP funciona
Array.prototype.meuMap = function(callback) {
    const newArray = [];
    for(let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }

    return newArray
}

const name = product => product.name;
const jsonResult2 = cart.meuMap(jsonParse).meuMap(name);
console.log(jsonResult2);
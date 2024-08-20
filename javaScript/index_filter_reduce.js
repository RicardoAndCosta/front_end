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

// Filter serve para filtrar os dados que quero
const producto_expensive = product => product.price >= 9.00

const result = cart.map(jsonParse).filter(producto_expensive)
console.log(result);


const carts = [
    { name: "Arroz", price: 29.87},
    { name: "Feijão", price: 9.87},
    { name: "Batata", price: 6.74},
    { name: "Macarrão", price: 3.87},
    { name: "Sal", price: 1.87},
    { name: "Ovos", price: 11.21},
];

const result2 = carts.filter(producto_expensive)
console.log(result2);

// O filter funciona desta forma
Array.prototype.meuFilter = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(
                this[i]
            )
        }
    }
    return newArray
}

const resultMeuFilter = carts.meuFilter(producto_expensive)
console.log(resultMeuFilter);


//REDUCE 
    // serve para transformar um array em um outro tipo de elemento, string, outro tipo de array e etc
const cartReduce = [
    { name: "Arroz", price: 29.87, estoque: false},
    { name: "Feijão", price: 9.87, estoque: true},
    { name: "Batata", price: 6.74, estoque: false},
    { name: "Macarrão", price: 3.87, estoque: true},
    { name: "Sal", price: 1.87, estoque: true},
    { name: "Ovos", price: 11.21, estoque: false},
];

//exemplo caso eu precise saber o valor do meu carrinho, o reduce utiliza um parametro como inicial e soma ao próximo elemento o resultado será o 
// novo inicial até passar por todos os elementos
const taxa = 5.47;

const lista = cartReduce.map(p => p.price).reduce(function(inicial, atual){
    console.log(inicial, atual);
    return inicial + atual
}, taxa) // tb posso informar o inicial ele não é obrigatório

console.log(lista);

// Todos os produtos da cesta possuem estoque?
const disponivel = (resultado, estoque) => resultado && estoque;
console.log(cartReduce.map(p => p.estoque).reduce(disponivel));

// Existem produtos sem estoque?
const disponivel2 = (resultado, estoque) => resultado || estoque;
console.log(cartReduce.map(p => p.estoque).reduce(disponivel2));

// Como o REDUCE funciona
Array.prototype.meuReduce = function(callback, initValue){
    const index = initValue ? 0 : 1
    let accumulator = this[0] || initValue;

    for(let i = index; i < this.length; i++){
        accumulator = callback(accumulator, this[i], i, this)
    }

    return accumulator
}

const soma = (total, valor) => valor + total;
const numeros = [1, 2, 3, 4, 5]

console.log(numeros.meuReduce(soma));

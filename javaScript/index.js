console.log('Olá, mundo!')

/**
 * Diferença entre VAR e LET é que o JS faz hoisting com VAR fazendo com que a variavel possa ser utilizada mesmo
 * antes da sua declaração, atribuindo a ela um valor UNDEFINED o mesmo não ocorre com o LET 
 */

var a = 'Olá Mundo!'
a = 10
console.log(a);

/**
 * Neste cenário temos a seguinte situação o LET B é uma variavel de nível global podendo ser acessada por
 * qualquer trecho do código, já a variavel LET C ela é do escopo do IF e esta já não existe mais
 * quando é chamada no console.log() fora da condicional.
 */

let b = 'Valor';
console.log(b);

if(true) {
    let c = b;
    console.log(c);
}

console.log(b);
// console.log(c);
console.log(typeof b);
// console.log(typeof c);

/**
 * Já as constantes CONST sempre ficam com o mesmo valor quando for atribuido não sendo possivel altera-la
 */

const valor = 'Valor unico'
console.log(valor);

// valor = 'Novo valor'
console.log(valor);

// Template String
// é uma forma por exemplo de apresentar ao usuário uma msg com as informações das variaveis sem a necessidade de concatenação
// Usamos a crase e passamos qual variavel deve ser atribuida no espaço deixando mais limpo o código
let nome = 'Ricardo';
let idade = 39;
let cidade = 'São Paulo';
let uf = 'SP';

// Interpolação/Concatenação tradicional
console.log('Olá, meu nome é ' +nome+' tenho '+idade+' anos de idade e moro em '+cidade+'-'+uf);

// Template String
console.log(`Olá, meu nome é ${nome} tenho ${idade} anos de idade e moro em ${cidade}-${uf}`);

//Numbers
const peso1 = 1.2;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 8.876;
const avaliacao2 = 7.354;
const total = avaliacao1 * peso1 + avaliacao2 * peso2;

console.log(total);
const media = total / (peso1 + peso2);
console.log(media);
console.log(media.toFixed(2));

console.log(Math.ceil(media));

// Curiosidades do JavaScript
console.log('10' + 2); 
console.log('10' * 2);
console.log('10' / 2);
console.log('teste' * 2); //NaN - Not a Number
console.log(7/0); //Infinity
console.log(0.7 + 0.1); //0.79999999999999999 isso vem de uma convenção o ES5
console.log(109.76456468.toFixed(2)); // se tentar console.log(109.toFixed(2)) ele não funciona, para forçar console.log((109).toFixed(2))

// Calculo de area com funções matematicas
const raioG = 35;
const raioP = 25;

const areaG = Math.PI * Math.pow(raioG, 2);
const areaP = Math.PI * Math.pow(raioP, 2);

console.log(areaG, areaP);
const diferenca = (areaG -areaP) / Math.PI
console.log(`a diferença entre as areas é de ${diferenca.toFixed(2)}cm`);
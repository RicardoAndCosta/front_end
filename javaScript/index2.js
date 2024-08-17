// Strings

const faculdade = 'Uniciv'

// função que localiza um caractere na posição, lembrando String é um array
console.log(faculdade.charAt(3));
console.log(faculdade.charCodeAt(3));

console.log(faculdade.indexOf(n));
console.log(faculdade.indexOf(i)); // retorna o primeiro encontrado

console.log(faculdade.substring(1)); // retorna a partir da posição 1
console.log(faculdade.substring(1,3)); // retorna dentro do parametro passado

// concatenação
console.log('Faculdade'.concat(faculdade)); 
console.log('Faculdade '+faculdade); 
console.log(`Faculdade ${faculdade}`);


const nomes = 'Ana, Maria, José, Pedro, João';
console.log(nomes.split(',')); // retorna como um array de nomes onde a separação é o parametro informado neste caso a virgula

const creditCardNumber = '4004 5484 3214 8424';
const cc = creditCardNumber.split(' ');
console.log(cc);

// Booleanos 

let isAtivo = false;
console.log(isAtivo);
isAtivo = true;
console.log(isAtivo);

//negação da negação 
//usamos a ! como negação
console.log(!!isAtivo);

// verdadeiro
console.log('-------- verdadeiros ------------');
console.log(!!123987123);
console.log(!!-76237);
console.log(!!'teste');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!' ');
console.log(!!(isAtivo = true));

// falso
console.log('-------- falsos ------------');
console.log(!!0); //zero sempre trata como Falso
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);
console.log(!!(isAtivo = false));
console.log(!!(isAtivo = 0));

console.log('-------- considerações ------------');

let nome = '';
console.log(nome || 'Desconhecido');
console.log(!!('' || null || 0 || 'verdadeiro' || undefined || 123));
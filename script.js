// CONTEUDO DE ARRAYS

const meuArray = [24, 'Marina', false]
// indices        0       1       2
const primeiroElemento = meuArray[0]
const segundoElemento = meuArray[1]
const terceiroElemento = meuArray[2]

//console.log(primeiroElemento, segundoElemento, terceiroElemento)

// PRÁTICA GUIADA ---------------------------------------

/* Crie um array com 3 itens do tipo String
Crie um array com 3 itens do tipo Number
Crie um array com uma String, um número e um booleano;
Crie um array com apenas um valor. Um número.
Crie um array sem nenhum valor dentro. */

const minhasStrings = ['copo', 'plantinha', 'vinho']
const meusNumeros = [24, 29, 10]
const minhaListaDeVariasCoisas = ['Buda', 2, true]
const meuNumeroSolitario = [2023]
const minhaListaVazia = []

/* Cheque o length do primeiro array. O que acontece se tentarmos acessar o índice 3 deste array?
Verifique se o terceiro array inclui cada um dos itens;
No quarto array, imprima o valor do único item. 
Observe qual o seu índice, e imprima seu tamanho */

// a)
const tamanhoMinhasStrings = minhasStrings.length
console.log(`Tamanho do array minhasStrings:`, tamanhoMinhasStrings)

const quartoElementoMinhasStrings = minhasStrings[3]
console.log(`Valor que está na posição 3:`, quartoElementoMinhasStrings)

// b)
const temBuda = minhaListaDeVariasCoisas.includes('Buda')
console.log(`minhaListaDeVariasCoisas inclui Buda?`, temBuda)

const temDois = minhaListaDeVariasCoisas.includes(2)
console.log(`minhaListaDeVariasCoisas inclui 2`, temDois)

const temTrue = minhaListaDeVariasCoisas.includes(true)
console.log(`minhaListaDeVariasCoisas inclui true`, temTrue)

// c)
const valorItemunico = meuNumeroSolitario[0]
console.log(`QUal o valor do numero solitario?`, valorItemunico)

const tamanhoSolitario = meuNumeroSolitario.length
console.log(`Qual o tamanho da lista meuNumeroSolitario?`, tamanhoSolitario)

/* Crie uma cópia do primeiro array, utilizando a atribuição com sinal de igual.
Faça push() de uma nova string no array copiado
Imprima os dois arrays. Há diferença?
Como podemos resolver isso?
Com o array copiado corretamente, remova os itens dos índices 2 e 3 do array copiado.
Imprima novamente ambos os arrays */

// a) 
const minhasStringsCopiaErrada = minhasStrings

// b) 
minhasStringsCopiaErrada.push('livro')

// c)
console.log(`Array original`, minhasStrings)
console.log(`Copia errada`, minhasStringsCopiaErrada)

// d)
const minhasStringsCopiaCerta = minhasStrings.slice()
console.log(`Copia certa`, minhasStringsCopiaCerta)

minhasStringsCopiaCerta.splice(2,2)
console.log(`Array original`, minhasStrings)
console.log(`Copia certa pós splice()`, minhasStringsCopiaCerta)

// EXERCICIO DE FIXAÇAO ---------------------------------

/* Crie um array. Ele deve possuir apenas números, e estes números não devem seguir nenhuma ordem específica. Por enquanto, não vamos imprimir o array.

Depois disso, crie uma cópia deste array utilizando o método slice().

No array copiado: 
Remova o último item 
Adicione o número 6 no fim do array
Remova o número que está no índice 2 do array
Por fim, imprima os dois arrays */

const novaArray = [2, 90, 30, 3, 5, 12]
const novaArrayCopia = novaArray.slice()
novaArrayCopia.push(6)
novaArrayCopia.splice(2,1)
console.log (`Array inicial`, novaArray)
console.log (`Array pós modificação`, novaArrayCopia)

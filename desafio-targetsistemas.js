/*01) Ao final do processamento, qual será o valor da variável SOMA?*/
var indice = 13
var soma = 0
var k = 0

while (k < indice) {
    k = k + 1
    soma = soma + k
}

console.log(soma)

//O valor da variável soma será 91


/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.*/
function GerarFibonacci(number) {
    var fibonacci = []
    fibonacci[0] = 0
    fibonacci[1] = 1
    for (var i = 2; i < number; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    return fibonacci
}
var f = GerarFibonacci(15)
console.log(f)

/*3) Descubra a lógica e complete o próximo elemento:

a) 1, 3, 5, 7, _9_

b) 2, 4, 8, 16, 32, 64, _128_

c) 0, 1, 4, 9, 16, 25, 36, _49_

d) 4, 16, 36, 64, _100_

e) 1, 1, 2, 3, 5, 8, _13_

f) 2,10, 12, 16, 17, 18, 19, _200_
*/

/*4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?

IMPORTANTE:

a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.

b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)

c) Explique como chegou no resultado.

R: O carro e o caminhão estão a mesma distância de Ribeirão Preto!
R: Utilizando o princípio do movimento retilíneo uniforme para realizar os calculos*/

/*
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;*/

var inverteString = function(text) {
    var inverter = []
    for (var i = text.length - 1, j = 0; i >= 0; i--, j++)
        inverter[j] = text[i]
    return inverter.join('')
}
var s = inverteString('Guilherme')
console.log(s)
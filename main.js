/* Você pode apresentar o resultado tanto no **console** quanto em um **alerta** no navegador.

1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
    
    💡 Para saber o tipo de dado você pode usar o operador `typeof`
    
4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
*/

/* 1 
alert("Hello World!") 
*/ 

/* 2 
alert('Iremos somar 2 números.')
let numberOne = prompt('Digite o primeiro número: ')
let numberTwo = prompt('Digite o segundo número: ')
alert(Number(numberOne) + Number(numberTwo))
*/

/* 3 
let myVariable = 42

if (typeof myVariable === "number" ) {
    alert('É um número!')
} else {
    alert('Não é um número')
}
*/

/* 4 
let myVariable = "Olá, sou uma string";

if (typeof myVariable === "string") {
    alert('É uma string.')
} else {
    alert('Não é uma string')
}
*/

/* 5 

let myVariable = true

if (typeof myVariable === "boolean") {
    alert('É um booleano')
} else {
    alert('Não é um booleano')
}
*/

/* 6 
alert('Iremos subtrair 2 números.')
let numberOne = prompt('Digite o primeiro número: ')
let numberTwo = prompt('Digite o segundo número: ')
alert(Number(numberOne) - Number(numberTwo))
*/

/* 7 
alert('Iremos multiplicar 2 números.')
let numberOne = prompt('Digite o primeiro número: ')
let numberTwo = prompt('Digite o segundo número: ')
alert(Number(numberOne) * Number(numberTwo))
*/

/* 8 
alert('Iremos dividir 2 números.')
let numberOne = prompt('Digite o primeiro número: ')
let numberTwo = prompt('Digite o segundo número: ')
alert(Number(numberOne) / Number(numberTwo))
*/

/* 9 
let myNumber = 5;

if (typeof myNumber === 'number' && myNumber % 2 === 0) {
    alert('É um número par!')
} else {
    alert('É um número ímpar!')
}
*/

/* 10
let myNumber = 15;

if (typeof myNumber === 'number' && myNumber % 2 !== 0) {
    alert('É um número ímpar!')
} else {
    alert('É um número par!')
}
*/
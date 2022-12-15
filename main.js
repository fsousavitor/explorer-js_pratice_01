
const personName = prompt("Insira seu nome")
let firstNumber = prompt("Insira o primeiro numero")
let secondNumber = prompt("Insira o segundo numero")
let imparOrParMessage
let imparParResult
let numberCheck

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

let sum = firstNumber + secondNumber
let sub = firstNumber - secondNumber
let mult = firstNumber * secondNumber
let div = firstNumber / secondNumber
let divRest = firstNumber % secondNumber

function imparParCheck (a){
  let imparPar = a % 2
  return imparPar
}

imparParResult = imparParCheck (sum)

switch (imparParResult === 0){
  case true:
    imparOrParMessage = "Par"
    break;
  case false:
    imparOrParMessage = "Impar"
    break;  
}

firstNumber === secondNumber ? numberCheck = "iguais" : numberCheck = "diferentes"

alert (`${personName}, 
    Os numeros que você escolheu são ${numberCheck}
    A soma dos numeros que você escolheu é: ${imparOrParMessage}
    O total da soma dos numeros que você escolheu é: ${sum}   
    O total da subtração dos numeros que você escolheu é: ${sub}   
    O total da multiplicação dos numeros que você escolheu é: ${mult}   
    O total da divisão dos numeros que você escolheu é: ${div.toFixed(2)}   
    O total do resto da divisão dos numeros que você escolheu é: ${divRest}
`)
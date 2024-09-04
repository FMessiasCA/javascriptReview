// Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

const isNew = document.getElementById('isNew');
const isOld = document.getElementById('isOld');

isNew.addEventListener('click', () => alert("Hello World!"));
isOld.addEventListener('click', () => alert("Hi, nice to see u again!!! :)"));

// Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
const sum = document.getElementById('sum');


sum.addEventListener('click', (event) => {
    event.preventDefault();
    const numberA = document.getElementById('numberA').value;
    const numberB = document.getElementById('numberB').value;
    const showResult = document.getElementById('showResult');
    
    const sumTotal = Number(numberA) + Number(numberB);


    return showResult.innerText = sumTotal < 9 ? '0' + sumTotal : sumTotal;
})

/* function sum(numberA, numberB) {
    
} */
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

// Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
const discover = document.querySelector('#Lesson3_4 form button');

discover.addEventListener('click', (e) => {
    e.preventDefault();
    const randomCharacters = document.getElementById('randomCharacters').value;
    const span = document.querySelector('#Lesson3_4 span');

    if (randomCharacters == '') {
        return alert("You need to type something!")
    };

    span.innerText = isNaN(randomCharacters) ? `This is a string` : `It's a number`;
});
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

// Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número". Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
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

// Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
const subtraction = document.getElementById('subtraction');

subtraction.addEventListener('click', (event) => {
    event.preventDefault();

    const numberA = document.querySelector('#Lesson6 form #numberA').value;
    const numberB = document.querySelector('#Lesson6 #numberB').value;
    const showSubtraction = document.getElementById('showSubtraction');

    const sumTotal = Number(numberA) - Number(numberB);

    return showSubtraction.innerText =  0 < sumTotal && sumTotal < 9 ? '0' + sumTotal : sumTotal;
})

// Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
//Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
const division = document.getElementById('division');

division.addEventListener('click', (event) => {
    event.preventDefault();

    const numberA = document.querySelector('#Lesson8_9 #numberA').value;
    const numberB = document.querySelector('#Lesson8_9 #numberB').value;
    const showDivision = document.getElementById('showDivision');

    const sumTotal = Number(numberA) / Number(numberB);

    const oddOrEven = Number(numberA) % Number(numberB);
    
    if (oddOrEven == 0) {
        return showDivision.innerText =  `${sumTotal.toFixed(1)} and is a even number`;
    } else {
        return showDivision.innerText =  `${sumTotal.toFixed(1)} and is a odd number`;
    };
})
let secretNumber = 0;
let attempts = 1;
let drawNumbers = [];
let maxNumber = 10;

function setTextToElement(selector, text) {
    let htmlElement = document.querySelector(selector);
    htmlElement.innerHTML = text;
    return;
}


function checkUserGuess() {
    let userInput = parseInt(document.getElementById('userInput').value);

    // while (drawNumbers.length < 11) {

    if (userInput === secretNumber) {

        setTextToElement('p',`Acertaste el numero. Lo hiciste en ${attempts} ${(attempts == 1) ? 'vez':'veces'}`);
        clearInput();

        document.getElementById('userGuess').setAttribute('disabled',true);
        document.getElementById('userInput').setAttribute('disabled',true);
        document.getElementById('restartButton').removeAttribute('disabled');
        

    } else {

        if (userInput > secretNumber) {
            setTextToElement('p','El número secreto es menor');

        } else {
            setTextToElement('p','l número secreto es mayor');
        }

        attempts++;
        console.log(`Intento #${attempts}`);
        clearInput();

        if (attempts > 3) {
            setTextToElement('p','llegaste al numero maximo de intentos');

            document.getElementById('userGuess').setAttribute('disabled',true);
            document.getElementById('userInput').setAttribute('disabled',true);
            
            document.getElementById('restartButton').removeAttribute('disabled');
        }
    }
    return;
}



function generateSecretNumber() {
    let generatedNumber = Math.floor(Math.random() * maxNumber) + 1;
    console.log(generatedNumber);
    console.log(drawNumbers);


    if (drawNumbers.length === maxNumber){

        setTextToElement('p','Ya se sortearon todos los números posibles');
        document.getElementById('restartButton').setAttribute('disabled',true);



    } else {
        if (drawNumbers.includes(generatedNumber)){
            return generateSecretNumber();
        } else {
            drawNumbers.push(generatedNumber);
            return generatedNumber;
        }
    }

}


function clearInput() {
    document.querySelector('#userInput').value = '';
}


function initialConditions() {
    // setTextToElement('h1','Juego del número secreto!');
    // setTextToElement('p',`Indica un número del 1 al ${maxNumber}`);
    // secretNumber = generateSecretNumber();
    // attempts = 1;
    if (drawNumbers.length < 11) {
        document.getElementById('userInput').removeAttribute('enabled');
        document.getElementById('userGuess').removeAttribute('enabled');
        document.getElementById('restartButton').setAttribute('disabled',true);
    } else {
        setTextToElement('h1','Juego del número secreto!');
        setTextToElement('p',`Indica un número del 1 al ${maxNumber}`);
        secretNumber = generateSecretNumber();
        attempts = 1;
        document.getElementById('userInput').removeAttribute('disabled');
        document.getElementById('userGuess').removeAttribute('disabled');
    }
}

function resetGame() {
    //limpiar caja
    clearInput();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    initialConditions();
    //Desabilita el boton
    document.querySelector('#restartButton').setAttribute('disabled',true);
    
}

initialConditions();
let secretNumber = 0;
let attempts = 0;
let drawNumbers = [];
let maxNumber = 10;

function setTextToElement(selector, text) {
    let htmlElement = document.querySelector(selector);
    htmlElement.innerHTML = text;
    return;
}

function generateSecretNumber() {
    let generatedNumber = Math.floor(Math.random()*maxNumber)+1;
    console.log(generatedNumber);
    console.log(drawNumbers);

    if (drawNumbers.length === maxNumber){
        setTextToElement('p','Ya se sortearon todos los numeros posibles');
    } else {
    
        if (drawNumbers.includes(generatedNumber)){
            return generateSecretNumber();
        } else {
            drawNumbers.push(generatedNumber);
            return generatedNumber;
        }
    }
}

function checkUserGuess() {
    let userInput = parseInt(document.getElementById('userInput').value);
    if (userInput === secretNumber) {
        setTextToElement('p',`Acertaste el numero. Lo hiciste en ${attempts} ${(attempts == 1) ? 'vez':'veces'}`);
        document.getElementById('restartButton').removeAttribute('disabled');
    } else {
        if (userInput > secretNumber) {
            setTextToElement('p','El numero secreto es menor');
        } else {
            setTextToElement('p','El numero secreto es mayor');
        }
        attempts++;
        console.log(`intento #${attempts}`);
        clearInput();
        if (attempts > 3) {
            setTextToElement('p','llegaste al numero maximo de intentos');
        }
    }
    return;
}

function clearInput() {
    /*let valueBox = document.querySelector('#userValue');
        valueBox.value = '';    */
    document.querySelector('#userValue').value = '';
}

function initialConditions() {
    setTextToElement('h1','Juego del número secreto!');
    setTextToElement('p',`Indica un número del 1 al ${maxNumber}`);
    secretNumber = generateSecretNumber();
    attempts = 1;
    console.log(secretNumber);
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

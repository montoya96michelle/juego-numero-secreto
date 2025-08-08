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
    if (userInput === secretNumber) {

        setTextToElement('p',`Acertaste el numero. Lo hiciste en ${attempts} ${(attempts == 1) ? 'vez':'veces'}`);

        document.getElementById('userGuess').setAttribute('disabled',true); //desactivo el boton intentar
        document.getElementById('restartButton').removeAttribute('disabled'); //activo reseteo
        clearInput(); 

    } else {
        if (userInput > secretNumber) {
            setTextToElement('p','El número secreto es menor');

        } else {
            setTextToElement('p','El número secreto es mayor');
        }
        attempts++;
        console.log(`Intento #${attempts}`);
        clearInput();

        if (attempts > 3) {
            setTextToElement('p','llegaste al numero maximo de intentos');
            document.getElementById('userGuess').setAttribute('disabled',true);
            document.getElementById('restartButton').removeAttribute('disabled');
        }
    }
    return;
}

function clearInput() {
    document.querySelector('#userInput').value = '';
}

function generateSecretNumber() {
    let generatedNumber = Math.floor(Math.random() * maxNumber) + 1;
    console.log(generatedNumber);
    console.log(drawNumbers);
    document.getElementById('userGuess').removeAttribute('disabled');//se mantiene activo el boton de intento

    if (drawNumbers.length == maxNumber){
        setTextToElement('p','Ya se sortearon todos los números posibles');
        document.getElementById('userGuess').setAttribute('disabled', true);//desactivo el boton intentar
        document.getElementById('userInput').setAttribute('disabled',true);//desactivo el input
        clearInput();
        return;
    } 
    
    if (drawNumbers.includes(generatedNumber)){
        return generateSecretNumber();
    } else {
        drawNumbers.push(generatedNumber);
        return generatedNumber;
    }
    

}   

function initialConditions() {
    setTextToElement('h1','Juego del número secreto!');
    setTextToElement('p',`Indica un número del 1 al ${maxNumber}`);
    secretNumber = generateSecretNumber();
    attempts = 1;
}

function resetGame() {
    clearInput();
    initialConditions()
    document.getElementById('restartButton').setAttribute('disabled', true);
    
}

initialConditions();
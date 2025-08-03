let secretNumber = 0;
let attempts = 0;
let drawNumbers = [];
let maxAttempts = 10;

//Da nombre a las etiquetas p,h1,...
function setTextToElement(element,text) {
    //querySelector como selector general
    let titleGame = document.querySelector(element);
    titleGame.innerHTML = text;
    return;
}

//Retorna un numero random entre 1 y maxAttempts
function generateSecretNumbers() {
    // return Math.floor(Math.random()*maxAttempts)+1;
    let generateNumber = Math.floor(Math.random()*maxAttempts)+1;
    console.log(generateNumber);
    console.log(drawNumbers);

    if (drawNumbers.length === maxAttempts){
        setTextToElement('p','Ya se sortearon todos los numeros posibles');
    } else {
    
        if (drawNumbers.includes(generateNumber)){
            return generateNumber();
        } else {
            drawNumbers.push(generateNumber);
            return generateNumber;
        }
    }
}


function checkGuess() {
    // let userNumber = document.querySelector(input);
    let userNumber = parseInt(document.getElementById('userValue').value);
    // while (userNumber != secretNumber) {

    if (userNumber === secretNumber) {

        setTextToElement('p',`Acertaste el numero. Lo hiciste en ${attempts} ${(attempts == 1) ? 'vez':'veces'}`);

        document.getElementById('resetButton').removeAttribute('disabled');
        

    } else {
        if (userNumber > secretNumber) {
            setTextToElement('p','El numero secreto es menor');
        } else {
            setTextToElement('p','El numero secreto es mayor');
        }
        attempts++;
        console.log(`intento #${attempts}`);
        cleanBox();

        if (attempts > 3) {
            setTextToElement('p','llegaste al numero maximo de intentos');
        }
    }
        // break;

    return;

}

function cleanBox() {
    // let valueBox = document.querySelector('#userValue');
    // valueBox.value = '';
    document.querySelector('#userValue').value = '';

}

function setInitialConditions() {
    setTextToElement('h1','Juego del numero secreto');
    setTextToElement('p',`Indica un numero del 1 al ${maxAttempts}`);
    secretNumber = generateSecretNumbers
();
    attempts = 1;
}

function resetGame() {
    cleanBox(); 
    setInitialConditions();
    //desabilitar el boton
    document.querySelector('resetButton').setAttribute('disabled',true);

}

setInitialConditions();

let previousNumber = "";
let currentNumber = "";
let operator  = "";

const previousScreen = document.getElementById('previous-screen');
const currentScreen = document.getElementById('current-screen');

window.addEventListener('keydown', handleKeyPress)

// Fetching Clear Button & with Click Function
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', (e) => {
  clearCalculator();
})

// Fetching Delete Button & with Click Function
const deleteButton = document.getElementById('delete')
deleteButton.addEventListener('click', (e) => {
  deleteDigit();
})

// Fetching Decimal Button & with Click Function
const decimalButton = document.getElementById('decimal-point');
decimalButton.addEventListener('click', () => {
  addDecimalPoint();
})

// Fetching Equal Button & with Click Function
const equalButton = document.getElementById('equal');
equalButton.addEventListener('click', () => {
  if (currentNumber != "" && previousNumber != "") {
    calculate();
  }
})

// Fetching Number Buttons & with Click Function
const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((numberButton) => {
  numberButton.addEventListener('click', (e) => {
    handleNumber(e.target.textContent);
  })
})

// Fetching Operator Buttons & with Click Function
const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener('click', (e) => {
    handleOperator(e.target.textContent);
  })
})


function handleNumber(numberTextContent) {
  if (currentNumber.length < 11) {
    currentNumber += numberTextContent;
    currentScreen.textContent = currentNumber;
  }
}


function handleOperator(operatorTextContent) {
  if (previousNumber === "") {
    previousNumber = currentNumber;
    operatorCheck(operatorTextContent);
  } else if (currentNumber === "") {
    operatorCheck(operatorTextContent);
  } else {
    calculate();
    operator = operatorTextContent;
    currentScreen.textContent = "0";
    previousScreen.textContent = `${previousNumber} ${operator}`
  }
}


function operatorCheck(operatorTextContent) {
  operator = operatorTextContent;
  previousScreen.textContent = `${previousNumber} ${operator}`;
  currentScreen.textContent = "0";
  currentNumber = "";
}


function calculate() {
  previousNumber = Number(previousNumber);
  currentNumber = Number(currentNumber);

  if (operator === "+") {
    previousNumber += currentNumber;
  } else if (operator === "-") {
    previousNumber -= currentNumber;
  } else if (operator === "x") {
    previousNumber *= currentNumber;
  } else if (operator === '÷') {
      if (currentNumber <= 0) {
        previousNumber = "Error";
        displayResults();
        return;
      } 
      previousNumber /= currentNumber;
  } else if (operator === '%') {
    previousNumber %= currentNumber;
  }
  previousNumber = roundNumber(previousNumber);
  previousNumber = previousNumber.toString();
  displayResults();
}


function roundNumber(number) {
  return Math.round(number * 100000) / 100000;
}


function displayResults() {
  if (previousNumber.length <= 11) {
    currentScreen.textContent = previousNumber;
  } else {
    currentScreen.textContent = previousNumber.slice(0, 11) + "...";
  }
  previousScreen.textContent = "";
  operator = "";
  currentNumber = "";
}


function clearCalculator() {
  previousScreen.textContent = "";
  currentScreen.textContent = "";
  previousNumber = "";
  currentNumber = "";
  operator = "";
}


function deleteDigit() {
  if (currentNumber !== "") {
    currentNumber = currentNumber.slice(0, -1);
    currentScreen.textContent = currentNumber;
    if(currentNumber === "") {
      currentScreen.textContent = "0";
    }
  }
  if (currentNumber === "" && previousNumber !== "" && operator === ""){
    previousNumber = previousNumber.slice(0, -1);
    currentScreen.textContent = previousNumber;
  }
}


function addDecimalPoint() {
  if (!currentNumber.includes(".")) {
    currentNumber += ".";
    currentScreen.textContent = currentNumber;
  }
}

// Handles keyboard press
function handleKeyPress(e) {
  e.preventDefault();
  if (e.key >= 0 && e.key <= 9) {
    handleNumber(e.key);
  }
  if (
    e.key === "Enter" ||
    (e.key === "=" && currentNumber != "" && previousNumber != "")
  ) {
    calculate();
  }
  if (e.key === "+" || e.key === "-") {
    handleOperator(e.key);
  }
  if (e.key === "*") {
    handleOperator("x");
  }
  if (e.key === "/") {
    handleOperator("÷")
  }
  if (e.key === "%") {
    handleOperator("%");
  }
  if (e.key === ".") {
    addDecimalPoint();
  }
  if (e.key === "Backspace") {
    deleteDigit();
  }
  if (e.key === "Escape") {
    clearCalculator();
  }
}





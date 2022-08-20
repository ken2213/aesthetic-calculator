let currentNumber = '';
let previousNumber = '';
let operator = '';


//Selecting Previous Screen and Current Screen
const previousScreen = document.querySelector('#previous-screen');
const currentScreen = document.querySelector('#current-screen');

//Selecting Number and Operator Buttons from HTML
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

//Selecting Clear, Delete, Dot, and Equal Operator Buttons from HTML
const clearButton = document.getElementById('clear')
const deleteButton = document.getElementById('delete');
const dotButton = document.getElementById('dot');
const equalButton = document.getElementById('equal');


// CHECK!
// Responsible for Button Clicks
numberButtons.forEach((numberButton) => {
  numberButton.addEventListener('click', (e) => {
    handleNumber(e.target.textContent);
  })
})

// Outputs and Limits the Numbers to 11 digits
function handleNumber(number) {
  if (currentNumber.length < 11) {
    currentNumber += number;
    currentScreen.textContent = currentNumber;
  }
}

// CHECK!
// Responsible for Button Clicks
operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener('click', (e) => {
    handleOperator(e.target.textContent);
  })
})

// Outputs Operator Symbol
// Shifts value from Current Screen to Previous Screen
function handleOperator(operatorSymbols) {
  if (previousNumber === "") {
    previousNumber = currentNumber;
    operatorCheck(operatorSymbols);
  } else if (currentNumber === "") {
    operatorCheck(operatorSymbols);
  } else {
    calculate();
    operator = operatorSymbols;
    currentScreen.textContent = "";
    previousScreen.textContent = previousNumber + " " + operator
  }
  // operator = operatorSymbols;
  // previousNumber = currentNumber
  // previousScreen.textContent = `${previousNumber} ${operator}`

  // currentNumber = ""
  // currentScreen.textContent = "";
}

function operatorCheck(text) {
  operator = text;
  previousScreen.textContent = previousNumber + " " + operator;
  currentScreen.textContent = "0";
  currentNumber = "";
}


// CHECK!
equalButton.addEventListener('click', () => {
  if (currentNumber != "" && previousNumber != "") {
    calculate();
  }
})


function calculate() {
  previousNumber = Number(previousNumber)
  currentNumber = Number(currentNumber)

  if (operator === '+') {
    previousNumber += currentNumber;
  } else if (operator === '-') {
    previousNumber -= currentNumber;
  } else if (operator === 'x') {
    previousNumber *= currentNumber;
  } else if (operator === '÷') {
    if (currentNumber <= 0) {
      previousNumber = "Error!";
      displayResults()
      return;
    }
    previousNumber /= currentNumber
  } else if (operator === "%") {
    previousNumber %= currentNumber;
  }
  previousNumber = roundNumber(previousNumber);
  previousNumber = previousNumber.toString();
  displayResults();
}


function roundNumber(num) {
  return Math.round(num * 100000) / 100000;
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


clearButton.addEventListener('click', (e) => {
  clearCalculator()
})


function clearCalculator() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  previousScreen.textContent = "";
  currentScreen.textContent = "";
}







// let currentNumber = "";
// let previousNumber = "";
// let operator = "";

// const previousDisplayNumber = document.querySelector("#previousDisplayNumber")
// const currentDisplayNumber = document.querySelector("#currentDisplayNumber")

// const clearButton = document.getElementById("clear")
// const clearEntryButton = document.getElementById("clear-entry") 

// const numberButtons = document.querySelectorAll(".number");
// const operatorButtons = document.querySelectorAll(".operator")

// const equalButton = document.getElementById("equal")
// equalButton.addEventListener("click", calculate)


// numberButtons.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     handleNumber(e.target.textContent)
//   })
// })

// function handleNumber(number) {
//   if (currentNumber.length < 9) {
//     currentNumber += number;
//     currentDisplayNumber.textContent = currentNumber;
//   }
// }

// operatorButtons.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     handleOperator(e.target.textContent)
//   })
// })

// function handleOperator(op) {
//   operator = op;
//   previousNumber = currentNumber;
//   previousDisplayNumber.textContent = previousNumber + " " + operator;
//   currentNumber = "";
//   currentDisplayNumber.textContent = "";
// }

// function calculate() {
//   previousNumber = Number(previousNumber);
//   currentNumber = Number(currentNumber);

//   if (operator === "+") {
//     previousNumber += currentNumber;
//   } else if (operator === "-") {
//     previousNumber -= currentNumber;
//   } else if (operator === "x") {
//     previousNumber *= currentNumber;
//   } else if (operator === "÷") {
//     if (currentNumber <= 0) {
//       previousNumber = "Error";
//       previousDisplayNumber.textContent = "";
//       currentDisplayNumber.textContent = previousNumber;
//       operator = "";
//       return;
//     }
//     previousNumber /= currentNumber;
//   } else if (operator === "%") {
//     previousNumber %= currentNumber;
//   }

//   previousNumber = previousNumber.toString();
//   displayResults()

// }

// function roundNumber(num) {
//   return Math.round(num * 10000) / 10000
// }


// function displayResults() {
//   previousDisplayNumber.textContent = "";
//   operator = "";
//   if (previousNumber.length <= 11) {
//     currentDisplayNumber.textContent = previousNumber;
//   } else {
//     currentDisplayNumber.textContent = previousNumber.slice(0, 11) + "..."
//   }
// }



// const addition = (numOne, numTwo) => {
//   return numOne + numTwo;
// }

// const subtraction = (numOne, numTwo) => {
//   return numOne - numTwo;
// }

// const multiplication = (numOne, numTwo) => {
//   return numOne * numTwo;
// }

// const division = (numOne, numTwo) => {
//   return numOne / numTwo;
// }

// const operate = (operator) => {
//   return operator;
// }


// console.log(operate(addition(6, 3)))




// console.log(addition(5, 4))
// console.log(subtraction(5, 4))
// console.log(multiplication(5, 4))
// console.log(division(5, 4))







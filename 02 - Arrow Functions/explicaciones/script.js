let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let doubleArrayNumbers = [];

for (let i = 0; i < numbersArray.length; i++) {
  //   console.log(numbersArray[i] * 2);

  doubleArrayNumbers[i] = numbersArray[i] * 2;
}

// console.log(doubleArrayNumbers);

numbersArray.forEach(function (patata, i) {
  doubleArrayNumbers[i] = patata * 2;
});

// console.log(doubleArrayNumbers);

doubleArrayNumbers = numbersArray.map(function (number) {
  return number * 2;
});

console.log(doubleArrayNumbers);

let filteredArray = numbersArray.filter(function (number) {
  return number % 2 !== 0;
});

// console.log(filteredArray);

let total = numbersArray.reduce(function (total, actual) {
  return (total += actual);
}, -20);

console.log(total);

//TODO: ARROW FUNCTIONS

numbersArray.forEach(
  (number, index) => (doubleArrayNumbers[index] = number * 2)
);

doubleArrayNumbers = numbersArray.map((number) => number * 2);

let filteredArrayArrow = numbersArray.filter((number) => {
  console.log("hola");
  return number % 2 === 0;
});

let totalArrow = numbersArray.reduce((total, actual) => (total += actual));

function suma(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}

suma(5, 2);

let sumaArrow = (firstNumber, secondNumber) =>
  console.log(firstNumber + secondNumber);

sumaArrow(4, 9);

let username = 'Isaladwy';

username = '10';

console.log(username);

const apiResponse = {
  id: 1,
  name: 'Isaladwy',
  birthDate: '1990-01-01',
};

const localUser = apiResponse;

localUser.id = 2;

//////////////

let num1: number = 20;
let num2: number = 7;

const sum: number = num1 + num2;
console.log(sum);

const difference: number = num1 - num2;
console.log(difference);

const multi: number = num1 * num2;
console.log(multi);

const division: number = num1 / num2;
console.log(division);

const reminder: number = num1 % num2;
console.log(reminder);

//////////////

// console.log(5 == '5'); // loose equality (Value comparison)
// console.log(5 === '5'); // strict equality (Value and Type comparison)
// console.log(5 != '5'); // loose inequality (Value comparison)
// console.log(5 !== '5'); // strict inequality (Value and Type comparison)

console.log(num1 < num2); // less than
console.log(num1 > num2); // greater than
console.log(num1 <= num2); // less than or equal to
console.log(num1 >= num2); // greater than or equal to

//////////////

const x: boolean = true;
const y: boolean = false;

console.log(x && y); // logical AND
console.log(x || y); // logical OR
console.log(!x); // logical NOT
console.log(x && !y); // logical AND with NOT
console.log(!x && y); // logical NOT with AND
console.log(x || !y); // logical OR with NOT
console.log(!x || y); // logical NOT with OR
console.log((x && y) || !y); // complex logical expression

////////////////

const person = {
  username: 'Isaladwy',
  age: 30,
  eat: function () {
    return `I'm eating now`;
  },
  walk() {
    return `I'm walking now`;
  },
};

const { eat, walk } = person;

console.log(person.eat());
console.log(person.walk());

const islam = { ...person, username: 'Tamim', age: 2.5 };

console.log(islam.eat());
console.log(islam);

//////////////// Higher Order Functions

const numbers: number[] = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((number) => number * number);

const evenNumbers = numbers.filter((number) => number % 2 === 0);

const foundNumber = numbers.find((number) => number === 4);

const hasNegative = numbers.some((number) => number < 0);

const allPositive = numbers.every((number) => number >= 0);

const totalSum = numbers.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
);

console.log(squaredNumbers);
console.log(evenNumbers);
console.log(foundNumber);
console.log(hasNegative);
console.log(allPositive);
console.log(totalSum);

////////////////

const person2 = {
  username: 'Codeawy',
  walk() {
    console.log(this);
    return "I'm walking now";
  },
};

function printThis(this: unknown) {
  return this;
}
console.log(printThis());

///Synchronous (Blocking) language with Asynchronous (Non-Bloking) Capabilities///

function first() {
  console.log('First Function');
  second();
}
function second() {
  console.log('Second Function');
  // getProductsViaAPI();
  third();
  third();
  third();
  third();
  third();
}
function third() {
  console.log('Third Function');
}
function getProductsViaAPI() {
  // Asynchronous operation simulating an API call
  setTimeout(() => {
    console.log('Products fetched from API');
  }, 2000);
}
first();

///////////////////////////

let todoList: { id: number; todo: string }[] = [];

function getTodoList(callback: () => void) {
  console.log('fetching todo list from server...');

  setTimeout(() => {
    todoList = [{ id: 1, todo: 'Do something' }];
    callback();
  }, 3000);
  console.log('fetched todo list from server');
}

getTodoList(() => {
  console.log(todoList);
  console.log('Callback executed');
});

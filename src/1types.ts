let theName: string = "Tamim";
let theAge: number = 4;
let hire: boolean = true;
let all: any = "Islam";
let two: string | number;

theName = "Islam";
all = 6;

two = "jjj";
two = 66;

function add(n1: number, n2: number) {
  return n1 + n2;
}

console.log(add(10, 20));

////////////////////////////////////////

let myFriends = ["Tamim", "Islam", "4"];

for (let i = 0; i < myFriends.length; i++) {
  console.log(myFriends[i].repeat(3));
}

///////////////////////////////////////////

let arr1: number[] = [1, 2, 3];
let arr2: string[] = ["A", "B", "C"];
let arr3: (string | number)[] = [1, 2, 3, "A", "B", "C"];

let arr4: (string | number | string[] | boolean)[] = [
  true,
  false,
  1,
  2,
  3,
  "A",
  "B",
  ["C", "D"],
];

////////////////////////////////////////////

let showMsg = true;

function showDetails(name: string, age: number, salary: number): string {
  let test = 10;
  if (showMsg) {
    return `Hellow ${name}, Age is ${age}, salary ${salary}, ${test}`;
  }
  return `No Data ToShow`;
}

console.log(showDetails("Tamim", 4, 5000));

/////////////////////////////////////////////////

function showData(name: string = "hh", age: number, country?: string) {
  return `${name} - ${age} - ${country}`;
}

console.log(showData(undefined, 40));

/////////////////////////////////////////

function addAll(...nums: number[]) {
  let result = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     result += nums[i];
  //   }
  nums.forEach((num) => (result += num));
  return result;
}

console.log(addAll(10.5, 20, 30, 40, +true));

////////////////////////////////////////

const addition = function (n1: number, n2: number): number {
  return n1 + n2;
};
const additionArrow = (n1: number, n2: number): number => n1 + n2;

console.log(additionArrow(10, 20));

////////////////////////////

type st = string;

let theNa: st = "Tamim";

type stnum = string | number;

let alll: stnum = 10;

alll = "100";
alll = 100;
// alll= true;

type Buttons = {
  up: string;
  right: string;
  down: string;
  left: string;
};

type last = Buttons & {
  x: boolean;
};

function getActions(btns: last) {
  console.log(`Action For Buttons Up Is ${btns.up}`);
  console.log(`Action For Buttons Right Is ${btns.right}`);
  console.log(`Action For Buttons Down Is ${btns.down}`);
  console.log(`Action For Buttons Left Is ${btns.left}`);
}

getActions({
  up: "Jump",
  right: "Go Right",
  down: "Go Down",
  left: "Go Left",
  x: true,
});

///////////////////////////////////////////

function compare(n1: number, n2: number) {
  if (n1 === n2) {
    return 0;
  } else if (n1 > n2) {
    return 1;
  } else {
    return -1;
  }
}

console.log(compare(20, 20));
console.log(compare(20, 15));
console.log(compare(20, 30));

//////////////////////////////////////////////

let article: readonly [number, string, boolean] = [11, "Title One", true];
article = [12, "Two", false];
// article.push(100);
console.log(article);

const [id, title, published] = article; // Destructuring

console.log(id, title, published);

//////////////////////////////////////////////

function logging(msg: st): void {
  console.log(msg);
  // return msg;
  return;
}
console.log(logging("I'm A Message"));

const fail = (msg: st) => {
  throw new Error(msg);
  return;
};

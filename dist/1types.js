"use strict";
let theName = "Tamim";
let theAge = 4;
let hire = true;
let all = "Islam";
let two;
theName = "Islam";
all = 6;
two = "jjj";
two = 66;
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(10, 20));
let myFriends = ["Tamim", "Islam", "4"];
for (let i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i].repeat(3));
}
let arr1 = [1, 2, 3];
let arr2 = ["A", "B", "C"];
let arr3 = [1, 2, 3, "A", "B", "C"];
let arr4 = [
    true,
    false,
    1,
    2,
    3,
    "A",
    "B",
    ["C", "D"],
];
let showMsg = true;
function showDetails(name, age, salary) {
    let test = 10;
    if (showMsg) {
        return `Hellow ${name}, Age is ${age}, salary ${salary}, ${test}`;
    }
    return `No Data ToShow`;
}
console.log(showDetails("Tamim", 4, 5000));
function showData(name = "hh", age, country) {
    return `${name} - ${age} - ${country}`;
}
console.log(showData(undefined, 40));
function addAll(...nums) {
    let result = 0;
    nums.forEach((num) => (result += num));
    return result;
}
console.log(addAll(10.5, 20, 30, 40, +true));
const addition = function (n1, n2) {
    return n1 + n2;
};
const additionArrow = (n1, n2) => n1 + n2;
console.log(additionArrow(10, 20));
let theNa = "Tamim";
let alll = 10;
alll = "100";
alll = 100;
function getActions(btns) {
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
function compare(n1, n2) {
    if (n1 === n2) {
        return 0;
    }
    else if (n1 > n2) {
        return 1;
    }
    else {
        return -1;
    }
}
console.log(compare(20, 20));
console.log(compare(20, 15));
console.log(compare(20, 30));
let article = [11, "Title One", true];
article = [12, "Two", false];
console.log(article);
const [id, title, published] = article;
console.log(id, title, published);
function logging(msg) {
    console.log(msg);
    return;
}
console.log(logging("I'm A Message"));
const fail = (msg) => {
    throw new Error(msg);
    return;
};
//# sourceMappingURL=1types.js.map
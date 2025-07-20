"use strict";
let data = "1000";
console.log(data.repeat(3));
function getAction(btns) {
    console.log(`Hello ${btns.one}`);
    console.log(`Hello ${btns.two}`);
    console.log(`Hello ${btns.three}`);
}
getAction({ one: "string", two: 100, three: true, five: false });
let myObject = {
    username: "Tamim",
    id: 100,
    skills: {
        one: "HTML",
        two: "CSS",
    },
};
myObject.id = 101;
myObject.hire = true;
console.log(myObject.skills.one);
//# sourceMappingURL=3typeassertion.js.map
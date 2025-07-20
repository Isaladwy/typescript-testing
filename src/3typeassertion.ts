// let myImg = document.querySelector('#my-img') as HTMLImageElement;
// let myImg = <HTMLImageElement>document.querySelector("#my-img");
// console.log(myImg.src);

let data: any = "1000";
console.log((data as st).repeat(3)); // Error

//////////////////////// Union Types /////////////////////
type nu = number;
type bo = boolean;

type A = {
  one: st;
  two: nu;
  three: bo;
};

type B = A & {
  four: nu;
};

type C = {
  five: bo;
};

type mix = A & C;

function getAction(btns: mix) {
  console.log(`Hello ${btns.one}`);
  console.log(`Hello ${btns.two}`);
  console.log(`Hello ${btns.three}`);
}

getAction({ one: "string", two: 100, three: true, five: false });

////////////////////////////////////////////////////////

let myObject: {
  readonly username: st;
  id: nu;
  hire?: bo;
  skills: {
    one: st;
    two: st;
  };
} = {
  username: "Tamim",
  id: 100,

  skills: {
    one: "HTML",
    two: "CSS",
  },
};

// myObject.username = "Islam";
myObject.id = 101;
myObject.hire = true;

console.log(myObject.skills.one);



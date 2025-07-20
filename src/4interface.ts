////////////////// Interface ////////////////////

interface User {
  id?: nu;
  readonly username: st;
  country: st;
  // sayHello(): st;
  // sayWelcome: () => st;
  // getDouble(num: nu): nu;
}

let user: User = {
  id: 100,
  username: "Tamim",
  country: "Misr",
  // sayHello() {
  //   return `Hello ${this.username}`;
  // },
  // sayWelcome: () => {
  //   return `Welcome ${user.username}`;
  // },
  // getDouble(num) {
  //   return num * 2;
  // },
};
console.log(user);

function getData(data: User) {
  console.log(`Id Is ${data.id}`);
  console.log(`Username Is ${data.username}`);
  console.log(`Country Is ${data.country}`);
}
// console.log(user.sayHello());
// console.log(user.sayWelcome());
// console.log(user.getDouble(2));

// getData({ id: 100, username: "Islam", country: "Masr" });

///////////////////////////////////////////////////

interface Usr {
  idd: nu;
  usrname: st;
  country: st;
}

interface Moderator {
  role: stnum;
}

interface Admin extends Usr, Moderator {
  protect: bo;
}

let usr: Admin = {
  idd: 100,
  usrname: "Tamim",
  country: "Misr",
  role: "Mod",
  protect: true,
};

/////////////////////////////////////////

let el = document.getElementById("id") as HTMLElement;

interface Settings {
  readonly theme: bo;
  font: st;
}

interface Settings {
  sidebar: bo;
}

interface Settings {
  external: bo;
}

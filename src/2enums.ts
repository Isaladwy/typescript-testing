function getHard(): number {
  return 3;
}

enum Kids {
  Five = 25,
  Seven = 20,
  Ten = 15,
}

enum level {
  Kid = Kids.Ten,
  Easy = 9,
  Medium = Easy - 3,
  Hard = getHard(),
  // Insane,
}

let lvl: st = "Easy";

if (lvl === "Easy") {
  console.log(`The Level is ${lvl} and No. of Seconds is ${level.Kid}`);
}
 
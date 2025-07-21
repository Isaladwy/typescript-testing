let username = 'Isaladwy';

  username = '10'

  console.log(username)

  const apiResponse = {
    id:1,
    name: 'Isaladwy',
    birthDate: '1990-01-01',
  }

  const localUser = apiResponse

  localUser.id = 2

  //////////////

  let num1: number = 20;
  let num2: number = 7;

  const sum: number = num1 + num2;
  console.log(sum  )
  
  const difference: number = num1 - num2;
  console.log(difference)

  const multi: number = num1 * num2;
  console.log(multi)

  const division: number = num1 / num2;
  console.log(division)

  const reminder: number = num1 % num2;
  console.log(reminder)

  //////////////

  console.log(5 == '5') // loose equality (Value comparison)
  console.log(5 === '5') // strict equality (Value and Type comparison)

  console.log(5 != '5') // loose inequality (Value comparison)
  console.log(5 !== '5') // strict inequality (Value and Type comparison)

  console.log(num1 < num2) // less than
  console.log(num1 > num2) // greater than
  console.log(num1 <= num2) // less than or equal to
  console.log(num1 >= num2) // greater than or equal to

  //////////////

  const x: boolean = true;
  const y: boolean = false;

  console.log(x && y) // logical AND
  console.log(x || y) // logical OR
  console.log(!x) // logical NOT
  console.log(x && !y) // logical AND with NOT
  console.log(!x && y) // logical NOT with AND
  console.log(x || !y) // logical OR with NOT
  console.log(!x || y) // logical NOT with OR
  console.log(x && y || !y) // complex logical expression

////////////////

const person ={
  username: 'Isaladwy',
  age: 30,
  eat: function(){
    return `I'm eating now`
  },
  walk(){
    return `I'm walking now`
  }
}

const {eat, walk} = person

console.log(person.eat())
console.log(person.walk())
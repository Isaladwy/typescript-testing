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
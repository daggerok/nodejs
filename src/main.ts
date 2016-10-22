import Models from './modules/Models';

let n: number = -10;
let user: Models.User = { firstName: 'Don', lastName: 'Joe' };
let greeter = (user: Models.User) => {
  return `Hello, ${user.firstName} ${user.lastName}`;
};

console.log(greeter(user));
console.log(Math.abs(n));

export { greeter };

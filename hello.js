const sayHello = function (name) {
  console.log(`Hello, ${name}`);
}

sayHello('Caliban');
sayHello('Miranda');
sayHello('Ferdinand');

// func prod side effect
const sayHelloToConsole = function (name) {
  console.log('Hello, ' + name);
}
sayHelloToConsole('John');

// func prod result
const returnSayHello = function (name) {
  return 'Hello, ' + name;
}
const greeting = returnSayHello('John');
console.log(greeting);
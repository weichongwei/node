const hello = require('./hello');
console.log(hello);
console.log("laozi");
hello.name();
const Dog = require('./module');
console.log(Dog);
const dog = new Dog();
dog.sayName('魏崇伟');
dog.sayHello()
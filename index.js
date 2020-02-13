// const Person = require("./person")

// myperson = new Person("Jhon",44);

// myperson.sayHi();


const Logg = require('./logger');


myobj = new Logg();

myobj.on('event',(data)=>console.log("hel",data,"hellooo"))

myobj.log('hello')
/* eslint-disable strict */
class Person {
    constructor(name,age){
        this.name = name,
        this.age=age

    }
    sayHi(){
        console.log(this.name+""+this.age)
    }

}

module.exports = Person;
class Person {
     constructor(name, age){
         this.name=name;
         this.age=age;
     }

    greet() {
        return `Hello My Name is ${this.name} and the age is ${this.age}`
    }
}

const person1= new Person('Prabu',29);
const person2= new Person('Selvan' ,29);

// console.log(person1.greet());


// console.log(person1);
// console.log(person2);

class Customer extends Person {

    constructor(name, age, balance) {
        super(name, age);
        this.balance= balance;
    }

    customerInfo() {
        return `My Name is ${this.name} and the age is ${this.age} and the balance is ${this.balance} `
    }
}

const customer1 = new Customer('Hari',30, 300);

console.log(customer1.customerInfo());



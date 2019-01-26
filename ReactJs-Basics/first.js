// let  name="Prabu";

// name="Selvan";
// console.log(name);

// let email ;
// console.log(email);


const person = {
    name: 'Prabu',
    age : 29
}

console.log('before change ', person);

person.country= 'India';

console.log('After change ', person);

const nums = [1,2,3,4];

nums.push(100);

console.log(nums);

const sayHello = (name)=>  console.log(`Hello  ${name}`);

sayHello('Prabu Selvan');

const fruits = ['Apples', 'Oranges', 'Grapes'];

// For Each
fruits.forEach((fruit, index)=> console.log(fruit, index));

// Map

const singleFruit= fruits.map((fruit)=> fruit.slice(0,-1).toUpperCase());

console.log(singleFruit);


// Filter

const people= [
    {id:1 , name: 'Prabu'},
    {id:2 , name: 'Bob'},
    {id:3 , name: 'Selvan'},
]

const people2= people.filter((fil)=> fil.id!= 2);
// const people2= people.map((fil)=> fil.id!= 2);

// through map if we filter something it returns only true or false


console.log('Filtered Array is ', people2);



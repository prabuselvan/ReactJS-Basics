const arr=[1,2,3];

console.log('Old Array ',arr);

const newarr=[...arr,4,5];

console.log('Using Spread operator New Array is ', newarr);


const secondArray = [arr, 9, 10];

console.log('With out using spread operator ', secondArray);

// Using Objects

const person = {
    firstName: 'Prabu',
    lastName: 'Selvan'
}

console.log('Person is ', person);

const newPerson = {
    ...person,
    email: 'Prabu.selvan@gmail.com',
    DOB:'21-Jun-1989'
}
console.log('New Person is ', newPerson);

const thirdPerson = {
    ...newPerson,
    Sex: 'M',
    Job: 'Developer'
}


console.log('Third Person is ', thirdPerson);

// Destructuring

const  Profile = {
    name : 'Prabu Selvan',
    address: {
        street: 'Welcome Street' ,
        city: 'Boston USA',
    },
    hobbies : ['Music', 'Movies']

}

// console.log(Profile.name);

const {name, address,hobbies} = Profile;

// console.log(name, address.street, hobbies[1]);

const {street, city} = Profile.address;

console.log('Street is ', street);
console.log('City is ', city);








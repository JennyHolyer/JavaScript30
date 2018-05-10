// start with strings, numbers and booleans
/***
 it's ok to change the original one, it's not going to update the other one
***/

let age = 100;
let age2 = age;
// console.log(age, age2);
age = 200;
// console.log(age, age2);

let name = "Wes";
let name2 = name;
// console.log(name, name2);
name = "wesley";
// console.log(name, name2);

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.
const team = players; // team is a reference to the 'players' aka original array that means if we change anything in the reference or the original array it will change in both places.
// that's why we need to make a copy of the array to avoid mutating the original

// console.log(players, team);
// You might think we can just do something like this:
// team[3] = 'Lux';

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice(); // if we don't pass anything in it will just make a copy of the array.

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players]; // spreading iterable into the container that it is wrapped in SHALLOWLY.
team4[3] = "heeee hawww";
// console.log(team4);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
const team5 = Array.from(players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Wes Bos",
  age: 80
};

// and think we make a copy:
// const captain = person;
// captain.number = 99; // This will add the 'number' key and its value into the original obj.

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99, age: 12 });
// Object.assign(blank obj, obj you wish to copy all the props from, props you wish to overwrite)
// console.log(cap2);

// object ...spread works the same way as array spread SHALLOWLY!! It only goes in 1 level deep. It will overwrite anything deeper then that. If you need to clone deep then use cloneDeep :)
const cap3 = { ...person };
console.log("cap3", cap3);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const wes = {
  name: "Wes",
  age: 100,
  social: {
    twitter: "@wesbos",
    facebook: "wesbos.developer"
  }
};

console.log(wes);

const dev = Object.assign({}, wes);

// Not recommended 
// const test = JSON.stringify(wes) // => {"name":"Wes","age":100,"social":{"twitter":"@wesbos","facebook":"wesbos.developer"}}
// console.log(test);
// and the immediately JSON.parse to turn it back into an Obj.
const dev2 = JSON.parse(JSON.stringify(wes));

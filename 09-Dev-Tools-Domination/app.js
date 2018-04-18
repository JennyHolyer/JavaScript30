const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
// `` might be better
console.log('Hello I am a %s string!', '💩');

// Styled ************** I might use this one **************
// console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue')

// warning!
// Interesting... might use it :)
console.warn('OH NOOO');

// Error :|
console.error('Shit!');

// Info
console.info('Crocodiles eat 3-4 people per year');

// Testing
const p = document.querySelector('p');

console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p); // Shows all the properties and methods belong 'p'

// console.clear();

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting

console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');

// timing
// didn't know about this one
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });


// I will def use this one
console.table(dogs);
let map1 = new Map();
map1.set('1', 'str1');
map1.set(1, 'num1');
map1.set(true, 'bool1');

alert( map1.get(1) );
alert( map1.get('1') );
alert( map1.size );

let john1 = { name: "John" };
let visitsCountMap1 = new Map();
visitsCountMap1.set(john1, 123);
alert( visitsCountMap1.get(john1) );

let john2 = { name: "John" };
let ben1 = { name: "Ben" };
let visitsCountObj1 = {};
visitsCountObj1[ben1] = 234;
visitsCountObj1[john2] = 123;
alert( visitsCountObj1["[object Object]"] );

let map2 = new Map();
map2.set('1', 'str1')
  .set(1, 'num1')
  .set(true, 'bool1');

let recipeMap1 = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

for (let vegetable of recipeMap1.keys()) {
  alert(vegetable);
}

for (let amount of recipeMap1.values()) {
  alert(amount);
}

for (let entry of recipeMap1) {
  alert(entry);
}

recipeMap1.forEach( (value, key, map) => {
  alert(`${key}: ${value}`);
});

let map3 = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]);
alert( map3.get('1') );

let obj1 = {
  name: "John",
  age: 30
};
let map4 = new Map(Object.entries(obj1));
alert( map4.get('name') );

let prices1 = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);
alert(prices1.orange);

let map5 = new Map();
map5.set('banana', 1);
map5.set('orange', 2);
map5.set('meat', 4);
let obj2 = Object.fromEntries(map5.entries());
alert(obj2.orange);

let obj3 = Object.fromEntries(map5);

let set1 = new Set();
let john3 = { name: "John" };
let pete1 = { name: "Pete" };
let mary1 = { name: "Mary" };
set1.add(john3);
set1.add(pete1);
set1.add(mary1);
set1.add(john3);
set1.add(mary1);
alert( set1.size );

for (let user of set1) {
  alert(user.name);
}

let set2 = new Set(["oranges", "apples", "bananas"]);
for (let value of set2) alert(value);

set2.forEach((value, valueAgain, set) => {
  alert(value);
});
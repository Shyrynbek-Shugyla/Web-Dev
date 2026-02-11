let user1 = {
  name: "John",
  age: 30
};

Object.keys(user1); // ["name", "age"]
Object.values(user1); // ["John", 30]
Object.entries(user1); // [ ["name","John"], ["age",30] ]

let user2 = {
  name: "John",
  age: 30
};

for (let value of Object.values(user2)) {
  alert(value);
}

let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
);

alert(doublePrices.meat);
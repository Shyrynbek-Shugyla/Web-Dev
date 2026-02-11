let arr1 = ["I", "go", "home"];
delete arr1[1];
alert( arr1[1] );
alert( arr1.length );

let arr2 = ["I", "study", "JavaScript"];
arr2.splice(1, 1);
alert( arr2 );

let arr3 = ["I", "study", "JavaScript", "right", "now"];
arr3.splice(0, 3, "Let's", "dance");
alert( arr3 );

let arr4 = ["I", "study", "JavaScript", "right", "now"];
let removed = arr4.splice(0, 2);
alert( removed );

let arr5 = ["I", "study", "JavaScript"];
arr5.splice(2, 0, "complex", "language");
alert( arr5 );

let arr6 = [1, 2, 5];
arr6.splice(-1, 0, 3, 4);
alert( arr6 );

let arr7 = ["t", "e", "s", "t"];
alert( arr7.slice(1, 3) );
alert( arr7.slice(-2) );

let arr8 = [1, 2];
alert( arr8.concat([3, 4]) );
alert( arr8.concat([3, 4], [5, 6]) );
alert( arr8.concat([3, 4], 5, 6) );

let arr9 = [1, 2];
let arrayLike1 = {
  0: "something",
  length: 1
};
alert( arr9.concat(arrayLike1) );

let arr10 = [1, 2];
let arrayLike2 = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};
alert( arr10.concat(arrayLike2) );

["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});

let arr11 = [1, 0, false];
alert( arr11.indexOf(0) );
alert( arr11.indexOf(false) );
alert( arr11.indexOf(null) );
alert( arr11.includes(1) );

let fruits1 = ['Apple', 'Orange', 'Apple'];
alert( fruits1.indexOf('Apple') );
alert( fruits1.lastIndexOf('Apple') );

const arr12 = [NaN];
alert( arr12.indexOf(NaN) );
alert( arr12.includes(NaN) );

let users1 = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];
let user = users1.find(item => item.id == 1);
alert(user.name);

let users2 = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: "John"}
];
alert(users2.findIndex(user => user.name == 'John'));
alert(users2.findLastIndex(user => user.name == 'John'));

let users3 = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];
let someUsers = users3.filter(item => item.id < 3);
alert(someUsers.length);

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths);

let arr13 = [ 1, 2, 15 ];
arr13.sort();
alert( arr13 );

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
let arr14 = [ 1, 2, 15 ];
arr14.sort(compareNumeric);
alert(arr14);

let arr15 = [ 1, 2, 15 ];
arr15.sort(function(a, b) { return a - b; });
alert(arr15);

let arr16 = [ 1, 2, 15 ];
arr16.sort( (a, b) => a - b );
alert(arr16);

let countries = ['Österreich', 'Andorra', 'Vietnam'];
alert( countries.sort( (a, b) => a > b ? 1 : -1) );
alert( countries.sort( (a, b) => a.localeCompare(b) ) );

let arr17 = [1, 2, 3, 4, 5];
arr17.reverse();
alert( arr17 );

let names = 'Bilbo, Gandalf, Nazgul';
let arr18 = names.split(', ');
for (let name of arr18) {
  alert( `A message to ${name}.` );
}

let arr19 = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);
alert(arr19);

let str = "test";
alert( str.split('') );

let arr20 = ['Bilbo', 'Gandalf', 'Nazgul'];
let str1 = arr20.join(';');
alert( str1 );

let arr21 = [1, 2, 3, 4, 5];
let result1 = arr21.reduce((sum, current) => sum + current, 0);
alert(result1);

let arr22 = [1, 2, 3, 4, 5];
let result2 = arr22.reduce((sum, current) => sum + current);
alert( result2 );

let arr23 = [];
// Error: Reduce of empty array with no initial value
// arr23.reduce((sum, current) => sum + current);

alert(typeof {});
alert(typeof []);

alert(Array.isArray({}));
alert(Array.isArray([]));

let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};

let users4 = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
];

let soldiers = users4.filter(army.canJoin, army);
alert(soldiers.length);
alert(soldiers[0].age);
alert(soldiers[1].age);
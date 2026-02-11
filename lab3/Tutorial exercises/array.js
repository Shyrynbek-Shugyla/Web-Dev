let arr1 = new Array();
let arr2 = [];

let fruits1 = ["Apple", "Orange", "Plum"];

alert( fruits1[0] );
alert( fruits1[1] );
alert( fruits1[2] );

fruits1[2] = 'Pear';
fruits1[3] = 'Lemon';

alert( fruits1.length );

let fruits2 = ["Apple", "Orange", "Plum"];
alert( fruits2 );

let mixedArr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
alert( mixedArr[1].name );
mixedArr[3]();

let fruits3 = [
  "Apple",
  "Orange",
  "Plum",
];

let fruits4 = ["Apple", "Orange", "Plum"];
alert( fruits4[fruits4.length-1] );
alert( fruits4.at(-1) );

let fruits5 = ["Apple", "Orange", "Pear"];
alert( fruits5.pop() );
alert( fruits5 );

let fruits6 = ["Apple", "Orange"];
fruits6.push("Pear");
alert( fruits6 );

let fruits7 = ["Apple", "Orange", "Pear"];
alert( fruits7.shift() );
alert( fruits7 );

let fruits8 = ["Orange", "Pear"];
fruits8.unshift('Apple');
alert( fruits8 );

let fruits9 = ["Apple"];
fruits9.push("Orange", "Peach");
fruits9.unshift("Pineapple", "Lemon");
alert( fruits9 );

let fruits10 = ["Banana"];
let arr3 = fruits10;
alert( arr3 === fruits10 );
arr3.push("Pear");
alert( fruits10 );

let fruits11 = [];
fruits11[99999] = 5;
fruits11.age = 25;

let arr4 = ["Apple", "Orange", "Pear"];
for (let i = 0; i < arr4.length; i++) {
  alert( arr4[i] );
}

let fruits12 = ["Apple", "Orange", "Plum"];
for (let fruit of fruits12) {
  alert( fruit );
}

let arr5 = ["Apple", "Orange", "Pear"];
for (let key in arr5) {
  alert( arr5[key] );
}

let fruits13 = [];
fruits13[123] = "Apple";
alert( fruits13.length );

let arr6 = [1, 2, 3, 4, 5];
arr6.length = 2;
alert( arr6 );
arr6.length = 5;
alert( arr6[3] );

let arr7 = new Array("Apple", "Pear", "etc");
let arr8 = new Array(2);
alert( arr8[0] );
alert( arr8.length );

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
alert( matrix[0][1] );

let arr9 = [1, 2, 3];
alert( arr9 );
alert( String(arr9) === '1,2,3' );

alert( [] + 1 );
alert( [1] + 1 );
alert( [1,2] + 1 );

alert( [] == [] );
alert( [0] == [0] );

alert( 0 == [] );
alert('0' == [] );
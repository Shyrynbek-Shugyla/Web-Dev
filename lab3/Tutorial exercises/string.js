let single = 'single-quoted';
let double = "double-quoted";
let backticks = `backticks`;

function sum(a, b) {
  return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`);

let guestList1 = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList1);

let guestList2 = "Guests:\n * John\n * Pete\n * Mary";

alert(guestList2);

let str1 = "Hello\nWorld";
let str2 = `Hello
World`;

alert(str1 == str2);

alert( `The backslash: \\` );
alert( 'I\'m the Walrus!' );
alert( "I'm the Walrus!" );
alert( `My\n`.length );

let helloStr = `Hello`;

alert( helloStr[0] );
alert( helloStr.at(0) );
alert( helloStr[helloStr.length - 1] );
alert( helloStr.at(-1) );

let testStr = `Hello`;

alert( testStr[-2] );
alert( testStr.at(-2) );

for (let char of "Hello") {
  alert(char);
}

let hiStr = 'Hi';
hiStr = 'h' + hiStr[1];
alert( hiStr );

alert( 'Interface'.toUpperCase() );
alert( 'Interface'.toLowerCase() );
alert( 'Interface'[0].toLowerCase() );

let widgetStr = 'Widget with id';

alert( widgetStr.indexOf('Widget') );
alert( widgetStr.indexOf('widget') );
alert( widgetStr.indexOf("id") );

let widgetStr2 = 'Widget with id';
alert( widgetStr2.indexOf('id', 2) );

let foxStr = 'As sly as a fox, as strong as an ox';
let target = 'as';
let pos1 = 0;
while (true) {
  let foundPos = foxStr.indexOf(target, pos1);
  if (foundPos == -1) break;
  alert( `Found at ${foundPos}` );
  pos1 = foundPos + 1;
}

let foxStr2 = "As sly as a fox, as strong as an ox";
let target2 = "as";
let pos2 = -1;
while ((pos2 = foxStr2.indexOf(target2, pos2 + 1)) != -1) {
  alert( pos2 );
}

let widgetStr3 = "Widget with id";
if (widgetStr3.indexOf("Widget") != -1) {
    alert("We found it");
}

alert( "Widget with id".includes("Widget") );
alert( "Hello".includes("Bye") );
alert( "Widget".includes("id") );
alert( "Widget".includes("id", 3) );
alert( "Widget".startsWith("Wid") );
alert( "Widget".endsWith("get") );

let stringifyStr = "stringify";
alert( stringifyStr.slice(0, 5) );
alert( stringifyStr.slice(0, 1) );

let stringifyStr2 = "stringify";
alert( stringifyStr2.slice(2) );

let stringifyStr3 = "stringify";
alert( stringifyStr3.slice(-4, -1) );

let stringifyStr4 = "stringify";
alert( stringifyStr4.substring(2, 6) );
alert( stringifyStr4.substring(6, 2) );

let stringifyStr5 = "stringify";
alert( stringifyStr5.slice(2, 6) );
alert( stringifyStr5.slice(6, 2) );

let stringifyStr6 = "stringify";
alert( stringifyStr6.substr(2, 4) );

let stringifyStr7 = "stringify";
alert( stringifyStr7.substr(-4, 2) );

alert( 'a' > 'Z' );
alert( 'Österreich' > 'Zealand' );

alert( "Z".codePointAt(0) );
alert( "z".codePointAt(0) );
alert( "z".codePointAt(0).toString(16) );

alert( String.fromCodePoint(90) );
alert( String.fromCodePoint(0x5a) );

let unicodeStr = '';
for (let i = 65; i <= 220; i++) {
  unicodeStr += String.fromCodePoint(i);
}
alert( unicodeStr );

alert( 'Österreich'.localeCompare('Zealand') );
let arr1 = ["John", "Smith"];
let [firstName1, surname1] = arr1;
alert(firstName1);
alert(surname1);

let [firstName2, surname2] = "John Smith".split(' ');
alert(firstName2);
alert(surname2);

let [firstName3, , title1] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
alert( title1 );

let [a, b, c] = "abc";
let [one, two, three] = new Set([1, 2, 3]);

let user1 = {};
[user1.name, user1.surname] = "John Smith".split(' ');
alert(user1.name);
alert(user1.surname);

let user2 = {
  name: "John",
  age: 30
};

for (let [key, value] of Object.entries(user2)) {
  alert(`${key}:${value}`);
}

let user3 = new Map();
user3.set("name", "John");
user3.set("age", "30");

for (let [key, value] of user3) {
  alert(`${key}:${value}`);
}

let guest = "Jane";
let admin = "Pete";
[guest, admin] = [admin, guest];
alert(`${guest} ${admin}`);

let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
alert(name1);
alert(name2);

let [name3, name4, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
alert(rest[0]);
alert(rest[1]);
alert(rest.length);

let [name5, name6, ...titles] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

let [firstName4, surname3] = [];
alert(firstName4);
alert(surname3);

let [name7 = "Guest", surname4 = "Anonymous"] = ["Julius"];
alert(name7);
alert(surname4);

let [name8 = prompt('name?'), surname5 = prompt('surname?')] = ["Julius"];
alert(name8);
alert(surname5);

let options1 = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width1, height1} = options1;
alert(title1);
alert(width1);
alert(height1);

let {height2, width2, title2} = { title: "Menu", height: 200, width: 100 };

let options2 = {
  title: "Menu",
  width: 100,
  height: 200
};

let {width: w1, height: h1, title: t1} = options2;
alert(t1);
alert(w1);
alert(h1);

let options3 = {
  title: "Menu"
};

let {width3 = 100, height3 = 200, title3} = options3;
alert(title3);
alert(width3);
alert(height3);

let options4 = {
  title: "Menu"
};

let {width4 = prompt("width?"), title4 = prompt("title?")} = options4;
alert(title4);
alert(width4);

let options5 = {
  title: "Menu"
};

let {width: w2 = 100, height: h2 = 200, title: t2} = options5;
alert(t2);
alert(w2);
alert(h2);

let options6 = {
  title: "Menu",
  width: 100,
  height: 200
};

let { title5 } = options6;
alert(title5);

let options7 = {
  title: "Menu",
  height: 200,
  width: 100
};

let {title6, ...rest1} = options7;
alert(rest1.height);
alert(rest1.width);

let title7, width5, height4;
({title7, width5, height4} = {title: "Menu", width: 200, height: 100});
alert( title7 );

let options8 = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

let {
  size: {
    width6,
    height5
  },
  items: [item1, item2],
  title8 = "Menu"
} = options8;

alert(title8);
alert(width6);
alert(height5);
alert(item1);
alert(item2);

function showMenu1({title = "Untitled", width = 200, height = 100, items = []}) {
  alert( `${title} ${width} ${height}` );
  alert( items );
}

let options9 = {
  title: "My menu",
  items: ["Item1", "Item2"]
};
showMenu1(options9);

let options10 = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

function showMenu2({
  title = "Untitled",
  width: w3 = 100,
  height: h3 = 200,
  items: [item3, item4]
}) {
  alert( `${title} ${w3} ${h3}` );
  alert( item3 );
  alert( item4 );
}

showMenu2(options10);

function showMenu3({ title = "Menu", width = 100, height = 200 } = {}) {
  alert( '${title} ${width} ${height}' );
}
showMenu3();
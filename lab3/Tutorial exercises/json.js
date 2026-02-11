let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  spouse: null
};

let json1 = JSON.stringify(student);
alert(typeof json1);
alert(json1);

alert( JSON.stringify(1) );
alert( JSON.stringify('test') );
alert( JSON.stringify(true) );
alert( JSON.stringify([1, 2, 3]) );

let user1 = {
  sayHi() {
    alert("Hello");
  },
  [Symbol("id")]: 123,
  something: undefined
};

alert( JSON.stringify(user1) );

let meetup1 = {
  title: "Conference",
  room: {
    number: 23,
    participants: ["john", "ann"]
  }
};

alert( JSON.stringify(meetup1) );

let room1 = {
  number: 23
};

let meetup2 = {
  title: "Conference",
  participants: ["john", "ann"]
};

meetup2.place = room1;
room1.occupiedBy = meetup2;

// JSON.stringify(meetup2); // Error: Converting circular structure to JSON

let room2 = {
  number: 23
};

let meetup3 = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room2
};

room2.occupiedBy = meetup3;

alert( JSON.stringify(meetup3, ['title', 'participants']) );

alert( JSON.stringify(meetup3, ['title', 'participants', 'place', 'name', 'number']) );

alert( JSON.stringify(meetup3, function replacer(key, value) {
  return (key == 'occupiedBy') ? undefined : value;
}));

let user2 = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};

alert(JSON.stringify(user2, null, 2));

let room3 = {
  number: 23
};

let meetup4 = {
  title: "Conference",
  date: new Date(Date.UTC(2017, 0, 1)),
  room: room3
};

alert( JSON.stringify(meetup4) );

let room4 = {
  number: 23,
  toJSON() {
    return this.number;
  }
};

let meetup5 = {
  title: "Conference",
  room: room4
};

alert( JSON.stringify(room4) );
alert( JSON.stringify(meetup5) );

let numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers);
alert( numbers[1] );

let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
let user3 = JSON.parse(userData);
alert( user3.friends[1] );

let str1 = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetup6 = JSON.parse(str1, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});
alert( meetup6.date.getDate() );

let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;

schedule = JSON.parse(schedule, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

alert( schedule.meetups[1].date.getDate() );
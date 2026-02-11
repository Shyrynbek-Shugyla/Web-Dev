let john1 = { name: "John" };
let array1 = [ john1 ];
john1 = null;

let john2 = { name: "John" };
let map1 = new Map();
map1.set(john2, "...");
john2 = null;

let weakMap1 = new WeakMap();
let obj1 = {};
weakMap1.set(obj1, "ok");

let weakMap2 = new WeakMap();
weakMap2.set("test", "Whoops");

let john3 = { name: "John" };
let weakMap3 = new WeakMap();
weakMap3.set(john3, "...");
john3 = null;

let visitsCountMap1 = new Map();
function countUser1(user) {
  let count = visitsCountMap1.get(user) || 0;
  visitsCountMap1.set(user, count + 1);
}

let john4 = { name: "John" };
countUser1(john4);
john4 = null;

let visitsCountMap2 = new WeakMap();
function countUser2(user) {
  let count = visitsCountMap2.get(user) || 0;
  visitsCountMap2.set(user, count + 1);
}

let john5 = { name: "John" };
countUser2(john5);
john5 = null;

let cache1 = new Map();
function process1(obj) {
  if (!cache1.has(obj)) {
    let result = /* calculations of the result for */ obj;
    cache1.set(obj, result);
    return result;
  }
  return cache1.get(obj);
}

let obj2 = {};
let result1 = process1(obj2);
let result2 = process1(obj2);
obj2 = null;
alert(cache1.size);

let cache2 = new WeakMap();
function process2(obj) {
  if (!cache2.has(obj)) {
    let result = /* calculate the result for */ obj;
    cache2.set(obj, result);
    return result;
  }
  return cache2.get(obj);
}

let obj3 = {};
let result3 = process2(obj3);
let result4 = process2(obj3);
obj3 = null;

let visitedSet1 = new WeakSet();
let john6 = { name: "John" };
let pete1 = { name: "Pete" };
let mary1 = { name: "Mary" };
visitedSet1.add(john6);
visitedSet1.add(pete1);
visitedSet1.add(john6);
alert(visitedSet1.has(john6));
alert(visitedSet1.has(mary1));
john6 = null;
let range1 = {
  from: 1,
  to: 5
};

range1[Symbol.iterator] = function() {
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};

for (let num of range1) {
  alert(num);
}

let range2 = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },
  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (let num of range2) {
  alert(num);
}

for (let char of "test") {
  alert( char );
}

let str1 = '𝒳😂';
for (let char of str1) {
    alert( char );
}

let str2 = "Hello";
let iterator1 = str2[Symbol.iterator]();

while (true) {
  let result = iterator1.next();
  if (result.done) break;
  alert(result.value);
}

let arrayLike1 = {
  0: "Hello",
  1: "World",
  length: 2
};

for (let item of arrayLike1) {}

let arrayLike2 = {
  0: "Hello",
  1: "World",
  length: 2
};

let arr1 = Array.from(arrayLike2);
alert(arr1.pop());

let range3 = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },
  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

let arr2 = Array.from(range3);
alert(arr2);

let range4 = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },
  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

let arr3 = Array.from(range4, num => num * num);
alert(arr3);

let str3 = '𝒳😂';
let chars = Array.from(str3);
alert(chars[0]);
alert(chars[1]);
alert(chars.length);

let str4 = '𝒳😂';
let chars2 = [];
for (let char of str4) {
  chars2.push(char);
}
alert(chars2);
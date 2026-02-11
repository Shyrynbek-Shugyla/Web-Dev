let now = new Date();
alert( now );

let Jan01_1970 = new Date(0);
alert( Jan01_1970 );

let Jan02_1970 = new Date(24 * 3600 * 1000);
alert( Jan02_1970 );

let Dec31_1969 = new Date(-24 * 3600 * 1000);
alert( Dec31_1969 );

let date1 = new Date("2017-01-26");
alert(date1);

let date2 = new Date(2011, 0, 1, 0, 0, 0, 0);
let date3 = new Date(2011, 0, 1);

let date4 = new Date(2011, 0, 1, 2, 3, 4, 567);
alert( date4 );

let date5 = new Date();
alert( date5.getHours() );
alert( date5.getUTCHours() );

alert( new Date().getTimezoneOffset() );

let today1 = new Date();
today1.setHours(0);
alert(today1);

today1.setHours(0, 0, 0, 0);
alert(today1);

let date6 = new Date(2013, 0, 32);
alert(date6);

let date7 = new Date(2016, 1, 28);
date7.setDate(date7.getDate() + 2);
alert( date7 );

let date8 = new Date();
date8.setSeconds(date8.getSeconds() + 70);
alert( date8 );

let date9 = new Date(2016, 0, 2);
date9.setDate(1);
alert( date9 );

date9.setDate(0);
alert( date9 );

let date10 = new Date();
alert(+date10);

let start1 = new Date();
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}
let end1 = new Date();
alert( `The loop took ${end1 - start1} ms` );

let start2 = Date.now();
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}
let end2 = Date.now();
alert( `The loop took ${end2 - start2} ms` );

function diffSubtract(date1, date2) {
  return date2 - date1;
}

function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

function bench(f) {
  let date11 = new Date(0);
  let date12 = new Date();
  let start3 = Date.now();
  for (let i = 0; i < 100000; i++) f(date11, date12);
  return Date.now() - start3;
}

alert( 'Time of diffSubtract: ' + bench(diffSubtract) + 'ms' );
alert( 'Time of diffGetTime: ' + bench(diffGetTime) + 'ms' );

let time1 = 0;
let time2 = 0;
for (let i = 0; i < 10; i++) {
  time1 += bench(diffSubtract);
  time2 += bench(diffGetTime);
}
alert( 'Total time for diffSubtract: ' + time1 );
alert( 'Total time for diffGetTime: ' + time2 );

bench(diffSubtract);
bench(diffGetTime);
for (let i = 0; i < 10; i++) {
  time1 += bench(diffSubtract);
  time2 += bench(diffGetTime);
}

let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
alert(ms);

let date13 = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );
alert(date13);
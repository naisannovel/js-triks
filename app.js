// remove falsy value from an array.--------------------

// falsy value
// 0
// undefined
// false
// NaN
// null
// blank / ''

// Boolean(0)  // false
// Boolean(5)  // true

const ary = [10, 0, 'novel', null, 2, undefined, 5, false, 95, NaN, 29, ''];

const truthyValue = ary.filter(Boolean)
console.log(truthyValue);   // [ 10, 'novel', 2, 5, 95, 29 ]


// convert any value to boolean ----------------------

console.log('novel');   // novel
console.log(!!'novel');   // true
console.log(Boolean('novel'));   // true


// resizing an array ------------------------

const ary1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
ary1.length = 5;
console.log(ary1);  // [ 1, 2, 3, 4, 5 ]
console.log(ary1.length);   // 5


// flat an multi-dimensional array------------------

const ary2 = [1, 2, [3, 4, 5], 6, 7];
const ary3 = ary2.flat()
console.log(ary3);  // [1, 2, 3, 4, 5, 6, 7]


const ary4 = [1, 2, [3, 4, [5, 6, 7], 8], 9];
const ary5 = ary4.flat(Infinity)
console.log(ary5);  // [1, 2, 3, 4, 5, 6, 7]
/* const q = require('./home')

console.time('time');
q([2,7,4,5,12,4]);
console.timeEnd('time') */

function expressionMatter(a, b, c) {
  const first = a * b + c;
  const second = a * c + b;
  const third = b * c + a;
  const fourth = (a+b) * c;
  const fifth = (a+c) * b;
  const sixth = (b+c) * a;
  const seventh = a * b * c;
  const eight = a + b + c;
  console.log(eight,'e')
  const compare = Math.max(first,second,third,fourth,fifth,sixth,seventh,eight);

  return compare;
}

//console.log(expressionMatter(2, 1, 2), 6);
//console.log(expressionMatter(2, 1, 1), 4);
//console.log(expressionMatter(1, 1, 1), 3);
//console.log(expressionMatter(1, 2, 3), 9);
console.log(expressionMatter(1, 3, 1), 5);
//console.log(expressionMatter(2, 2, 2), 8);
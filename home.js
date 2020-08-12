//task 1
//lead time ~= 0.155ms
const auto = [
  { model: 'BMW', creationDate: 2020 },
  { model: 'Audi', creationDate: 2015 },
  { model: 'Volvo', creationDate: 2019 },
  { model: 'Mercedes', creationDate: 2010 },
];

function sortByYear(array) {
  const newArr = array;

  return newArr
    .sort((a,b) => {
      return b.creationDate - a.creationDate;
    });
}

//task 2
//lead time ~= 0.240ms
function multiplyEachElement(array) {
  let result = [];
  let sum = 1;

  for(let i = 0; i< array.length; i++) {
    sum *= array[i];
  }

  for (let i = 0; i < array.length; i++) {
    result.push(sum / array[i]);
  }

  return result
} 

//task 3
//lead time ~= 0.240ms
function coincidenceInString(string) {
  const newString  = string
    .replace(/\s/g,'')
    .toLowerCase()
    .split('')
    .sort();

  for (let i = 1; i < newString.length; i++) {
    if (newString[i-1] === newString[i]) {
      return newString[i];
    }
  };

  return newString
}

//task 4
//lead time ~= 0.175ms
function stonesWeight(array) {

  const max = Math.max(...array);
  const index = array.indexOf(max);

  array.splice(index,1);

  const secondMax = Math.max(...array);
  const indexSecond = array.indexOf(secondMax);

  array.splice(indexSecond,1);

  array.push(max - secondMax);

  return array.length === 1 ? array[0] : stonesWeight(array);
}

//task 5
//lead time ~= 0.191ms
const resultSquare = [];
function happy(number) {
  let string = String(number);
  let result = 0;

  for (let i = 0; i < string.length; i++) {
    result += Math.pow(parseInt(string[i]),2);
  }
  if(resultSquare.includes(result)) return false;
  resultSquare.push(result);

  return result === 1 ? true : happy(result);
}

//task 6
//lead time ~= 0.134ms
function factorial(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i 
  }

  return result;
}

module.exports = happy;

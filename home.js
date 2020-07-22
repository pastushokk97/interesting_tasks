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

module.exports = coincidenceInString;
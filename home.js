//task 1
function amount(number) {
  let totalIterations = 0;
  for (let i = 1; i < number; i++) {
    
    number = number / 2;
    totalIterations = i;

    if(number < 50) return totalIterations; 
  }
}

//task 2
function squarRoot() {
  const numbers = [4, 2, 5, 19, 13, 0, 10];
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return Math.sqrt(Math.pow(sum,3))
}

//task 3
function contain(number) {
  const array = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];

  for (let i = 0; i < array.length; i++) {
    if(array[i].includes(number)) return number;
  }

  return null;
}

//task 4
const auto = [
  { model: 'BMW', creationDate: 2020 },
  { model: 'Audi', creationDate: 2015 },
  { model: 'Volvo', creationDate: 2019 },
  { model: 'Mercedes', creationDate: 2010 },
];

function sortByYear(array) {
  return array
        .map((element) =>  {
          return element;
        })
        .sort((a,b) => {
          return b.creationDate - a.creationDate;
        })
}

console.log(sortByYear(auto),'w')
console.log(auto,'c')
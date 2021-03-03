let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

console.log(sumSalaries(salaries));
console.log(sumSalaries({}));

function sumSalaries(obj) {
  let sum = 0;

  for (let propertyKey in obj) {
    let propertyValue = obj[propertyKey];
    sum += propertyValue;
  }

  return sum;
}

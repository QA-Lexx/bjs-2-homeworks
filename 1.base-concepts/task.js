// Задача 1

"use strict";

function solveEquation(a, b, c) {
  
  let arr = [];

  let d = b ** 2 - (4 * a * c);
  Math.sqrt(d);
  console.log(d);
  let x;

    if (d < 0) {
        console.log(arr);
    } else if (d = 0) {
        x = -b / (2 * a);
        arr.push(x);
        console.log(arr);
    } else (d > 0);
    x = (-b + Math.sqrt(d)) / (2 * a) && (-b - Math.sqrt(d)) / (2 * a);
    for (x = 0; x < arr.length; x++) {
        arr.push(x);
        console.log(arr);
    }
    
    return arr;

}

console.log(solveEquation(1, 2, 3));

// Задача 2

"use strict";

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    
    console.log(percent, typeof percent, !Number.isNaN(percent));

    if (Number.isNaN(percent) && Number.isNaN(contribution) && Number.isNaN(amount)) {
        const perMonth = percent / 100 / 12;
        console.log('perMonth', perMonth);

        const bodyCredit = amount - contribution;
        const monthly = bodyCredit * (perMonth + (perMonth / (((1 + perMonth) ** countMonths) - 1)));
        const totalSum = parseFloat((monthly * countMonths).toFixed(2));
        return totalSum;
    }

    return false;
    
}

console.log(calculateTotalMortgage("test", 0, 10000, 36));
console.log(calculateTotalMortgage("0", 0, 10000, 36));
console.log(calculateTotalMortgage("3", 0, 10000, 36));
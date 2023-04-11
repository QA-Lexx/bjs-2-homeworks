// Задача 1

"use strict";

function solveEquation(a, b, c) {

	let arrSolveEquation = [];

	let discriminant = b ** 2 - (4 * a * c);
	Math.sqrt(discriminant);
	console.log(discriminant);
	let i;

	if (discriminant < 0) {
		console.log(arrSolveEquation);
	} else if (discriminant = 0) {
		i = -b / (2 * a);
		arrSolveEquation.push(i);
		console.log(arrSolveEquation);
	} else(discriminant > 0);
	i = (-b + Math.sqrt(discriminant)) / (2 * a) && (-b - Math.sqrt(discriminant)) / (2 * a);
	for (i = 0; i < arrSolveEquation.length; i++) {
		arrSolveEquation.push(i);
		console.log(arrSolveEquation);
	}

	return arrSolveEquation;

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
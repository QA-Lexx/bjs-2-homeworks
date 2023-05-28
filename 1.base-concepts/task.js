// Задача 1

"use strict";

function solveEquation(a, b, c) {

	let arrSolveEquation = [];
	let discriminant = b ** 2 - (4 * a * c);
	let i;
	let o;

	if (discriminant < 0) {
		let emptyArr = [];
	} else if (discriminant = 0) {
		i = -b / (2 * a);
		arrSolveEquation.push(i);
	} else {
		i = (-b + Math.sqrt(discriminant)) / (2 * a);
		o = (-b - Math.sqrt(discriminant)) / (2 * a);
		arrSolveEquation.push(i);
		arrSolveEquation.push(o);
	}

	return arrSolveEquation;

}

// Задача 2

"use strict";

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	Number(percent);
	Number(contribution);
	Number(amount);
	Number(countMonths);

	if (Number.isNaN(percent) && Number.isNaN(contribution) && Number.isNaN(amount)) {
		Number(perMonth);
		Number(bodyCredit);
		Number(monthly);
		Number(totalSum);

		const perMonth = percent / 100 / 12;
		const bodyCredit = amount - contribution;
		const monthly = bodyCredit * (perMonth + (perMonth / (((1 + perMonth) ** countMonths) - 1)));
		const totalSum = parseFloat((monthly * countMonths).toFixed(2));
		return totalSum;
	}

	return calculateTotalMortgage;

}
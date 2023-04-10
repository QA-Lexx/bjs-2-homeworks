// Задача 2

// 1.

let arrSum = [10, 10, 11, 20, 10];

function summElementsWorker(arrSum) {

	let sum = 0;

	for (let i = 0; i < arrSum.length; i++) {
		sum += arrSum[i];
	}

	return sum;

}

console.log(summElementsWorker(arrSum));

// 2.

let arrDifferenceMaxMin = [10, 10, 11, 20, 10];

function differenceMaxMinWorker(arrDifferenceMaxMin) {

	min = arrDifferenceMaxMin[0];
	max = min;

	for (i = 0; i < arrDifferenceMaxMin.length; i++) {
		if (arrDifferenceMaxMin[i] > max) max = arrDifferenceMaxMin[i];
		if (arrDifferenceMaxMin[i] < min) min = arrDifferenceMaxMin[i];
	}

	difference = max - min;

	return difference;

}

console.log(differenceMaxMinWorker(arrDifferenceMaxMin));

// 3.

let arrEvenOddWorker = [94, 51, 57, 41, 47, 66, 58, 10, 38, 17];
let sumEvenElement = 0;
let sumOddElement = 0;

function differenceEvenOddWorker(arrEvenOddWorker) {

	for (let i = 0; i < arrEvenOddWorker.length; i++) {
		if (arrEvenOddWorker[i] % 2) {
			sumEvenElement + 1;
		} else {
			sumOddElement + 1;
		}
	}

	differenceEvenOdd = sumEvenElement - sumOddElement;

	return differenceEvenOdd;

}

console.log(differenceEvenOddWorker(arrEvenOddWorker));

// 4.

let avgEvenElementsWorker = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let summEvenElement = 0;
let countEvenElement = 0;

function averageEvenElementsWorker(avgEvenElementsWorker) {

	for (let i = 0; i < avgEvenElementsWorker.length; i++) {
		if (avgEvenElementsWorker[i] % 2) {
			summEvenElement + avgEvenElementsWorker[i];
		} else {
			countEvenElement + 1;
		}
	}

	avgElement = avgEvenElementsWorker.reduce((total, amount) => total + amount) / avgEvenElementsWorker.length;

	return avgElement;

}

console.log(averageEvenElementsWorker(avgEvenElementsWorker));
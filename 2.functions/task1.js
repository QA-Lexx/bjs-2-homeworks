// Задача 1

function getArrayParams(arr) {

	let min, max, sum, avg;
	min = -Infinity;
	max = Infinity;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		} else if (arr[i] < min) {
			min = arr[i];
		}
	}

	arr.reduce((acc, c) => acc + c);
	avg = (numbers) => numbers.reduce((acc, number) => acc + number, 0) / numbers.length
	avg.toFixed;

	return {
		min: min,
		max: max,
		avg: avg
	};

}

console.log(getArrayParams([-99, 99, 10]));
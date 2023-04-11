function getArrayParams(...arr) {

	return { min: min, max: max, avg: avg };
  }
  
  function summElementsWorker(...arr) {
  
  }
  
  function differenceMaxMinWorker(...arr) {
  
  }
  
  function differenceEvenOddWorker(...arr) {
  
  }
  
  function averageEvenElementsWorker(...arr) {
  
  }
  
  function makeWork (arrOfArr, func) {
  
  }

// Задача 3

let arrOfArr = [];
let func = [];

let maxWorkerResult = -Infinity;

function makeWork(arrOfArr, func) {

	for (let i = 0; i < arrOfArr.length; i++) {
		func.push(arrOfArr[i]);

	}

	console.log(...arrOfArr);
	console.log(...func);

	let result = func;

	return result;

}

console.log(makeWork([10, 10, 11, 20, 10], []));
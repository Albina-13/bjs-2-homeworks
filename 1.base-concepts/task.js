"use strict"

function solveEquation(a, b, c) {
	let discriminant = Math.pow(b, 2) - 4 * a * c;
	let arr = [];

	if (discriminant < 0) {
		return arr;
	} else if (discriminant === 0) {
		let arr1 = -b / (2 * a);
    arr.push(arr1);
	} else {
		let arr2 = (-b + Math.sqrt(discriminant)) / (2 * a);
		let arr3 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(arr2, arr3);
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	if (typeof percent !== 'number' || typeof contribution !== 'number' || typeof amount !== 'number' || typeof countMonths !== 'number') {
		return NaN;
	}

	const monthlyPercent = percent / 100 / 12;

	const loanBody = amount - contribution;

	if (loanBody < 0) {
		return 0;
	}

	const monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1)));

	const totalAmount = monthlyPayment * countMonths;

	return Number(totalAmount.toFixed(2));
}
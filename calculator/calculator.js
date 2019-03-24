function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (numArray) {
	total = 0;
	numArray.forEach(element => {
		total += element;
	});
	return total;
}

function multiply (numArray) {
	if(numArray.length === 0) {
		return null;
	}
	product = 1;
	numArray.forEach(element => product *= element);
	return product;
}

function power(base, exp) {
	return base ** exp;
}

function factorial(number) {
	factorial = 1; 
	while (number > 0) {
		factorial *= number;
		number--;
	}
	return factorial;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
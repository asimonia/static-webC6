var sumOfSquares = 0;
var sum = 0;

// Calculate the sum of the squares
for (var x = 1; x <= 10; x++) {
	sumOfSquares += Math.pow(x, 2);
}


// Calculate the square of the sum
for (var y = 1; y <= 10; y++) {
	sum += y;
}

var squareOfSum = Math.pow(sum, 2);

console.log(sumOfSquares - squareOfSum);


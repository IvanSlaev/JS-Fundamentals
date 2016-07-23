var args = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
function solve(args){
	var lines = [],
	output = 'Triangle can be built';
	debugger;
	function Line(x1, y1, x2, y2) {
		var a = Math.abs(x1- x2);
		var b = Math.abs(y1 - y2);

		return Math.sqrt(a * a + b * b);
	}

	for (var i = 0; i < 12; i += 4) {
		lines[i / 4] = Line(+args[i], +args[i + 1], +args[i + 2], +args[i + 3]);
	}

	if(lines[0] + lines[1] < lines[2] || lines[2] + lines[1] < lines[0] || lines[0] + lines[2] < lines[1]){
		output = 'Triangle can not be built';
	}

	for(i = 0; i < 3; i += 1) {
		console.log(parseFloat(Math.round(lines[i] * 100) / 100).toFixed(2));
	}
	console.log(output);
}
solve(args);
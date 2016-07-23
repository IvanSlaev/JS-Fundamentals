function solve(args) {
    var number = +args[0];
    var string = '';

    for (var i = 1; i <= number; i++){
        string = string + i + ' ';
    }

    console.log(string);
}

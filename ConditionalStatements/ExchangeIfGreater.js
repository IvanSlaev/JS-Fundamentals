function solve(args) {
    var x = +args[0];
    var y = +args[1];
    var string = '';

    if (x > y){
        string = y.toString() + ' ' + x.toString();
    }
    else {
        string = x.toString() + ' ' + y.toString();
    }
    console.log(string);
}
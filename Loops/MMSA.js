function solve(args) {
    var min = +args[0];
    var max = +args[0];
    var sum = +args[0];

    for (var i = 1; i < +args.length; ++i){
        if (+args[i] < min){
            min = +args[i];
        }
        if (+args[i] > max){
            max = +args[i];
        }
        sum += +args[i];
    }

    var avg = sum/+args.length;

    console.log('min=' + min.toFixed(2));
    console.log('max=' + max.toFixed(2));
    console.log('sum=' + sum.toFixed(2));
    console.log('avg=' + avg.toFixed(2));
}
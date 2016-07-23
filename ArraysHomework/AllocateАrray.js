function solve(args) {
    var length = +args[0];

    var array = [length];
    array[0] = 0;
    for (var i = 1; i < length; ++i){
        array[i] = array[i - 1] + 5;
    }

    for (var i = 0; i < length; ++i){
        console.log(array[i]);
    }
}

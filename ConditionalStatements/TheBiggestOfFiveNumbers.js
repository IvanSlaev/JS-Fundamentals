function solve(args) {
    var buffer = +args[0];

    for (var i = 1; i < 5; i += 1){
        if (buffer < +args[i]){
            buffer = +args[i];
        }
    }
    console.log(buffer);
}
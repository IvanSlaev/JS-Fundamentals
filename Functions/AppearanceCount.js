var args = ['5', '5 2 5 4 5', '5'];
function solve(args) {
    debugger;
    var arrLength = +args[0],
        array = args[1].split(' ').map(Number),
        number = +args[2];

    var counter = 0;

    for (var i = 0; i < arrLength; i++){
        if (+array[i] === number){
            counter++;
        }
    }

    return counter;
}
solve(args);

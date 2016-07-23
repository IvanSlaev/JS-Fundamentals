var args = ['5', '5 2 5 4 5'];
function solve(args) {
    debugger;
    var arrLength = +args[0],
        array = args[1].split(' ').map(Number),
        counter = 0;

    for (var i = 1; i < arrLength - 1; i++){
        if (+array[i] > +array[i - 1] && +array[i] > +array[i + 1]){
            counter++;
        }
    }
    
    return counter;
}
solve(args);

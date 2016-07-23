var args = ['8\n1\n1\n2\n3\n4\n5\n5\n4'];
function solve(args) {
    debugger;
    var array = args[0].split("\n");
    var length = +array[0];
    array.shift();

    var maxSequence = 1;
    var max = 0;

    for (var i = 1; i < length; i += 1){
        if (+array[i] > +array[i - 1]){
            maxSequence++;
            if (maxSequence > 1 && maxSequence > max) {
                max = maxSequence;
            }
        }
        else {
            maxSequence = 1;
        }
    }

    console.log(max)
}
solve(args);
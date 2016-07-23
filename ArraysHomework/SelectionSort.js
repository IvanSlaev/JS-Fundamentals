var args = ['6\n3\n2\n1\n6\n2\n1'];
function solve(args) {
    debugger;
    var array = args[0].split("\n");
    var length = +array[0];
    array.shift();

    for (var i = 0; i < length; i++){
        for (var j = i + 1; j < length; j += 1){
            if (array[i] >= array[j]){
                var buffer = array[j];
                array[j] = array[i];
                array[i] = buffer;
            }
        }
    }

    console.log(array.join('\n'));
}
solve(args)

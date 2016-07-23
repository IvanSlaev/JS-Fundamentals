function solve(args) {
    var str = args[0].split('\n');
    var first = str[0];
    var second = str[1];

    if (first > second){
        console.log('>');
    }
    else if (first < second){
        console.log('<');
    }
    else{
        console.log('=')
    }
}

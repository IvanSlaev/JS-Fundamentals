function solve(args) {
    var number = args[0];

    var result = 0;

    for (var i = 0; i < number.length ; i += 1){
        if (number.charCodeAt(i) > 64){
            result = (number.charCodeAt(i) - 55) + result*16;
        }
        else{
            result = (number.charCodeAt(i) - 48) + result*16;
        }
    }
    console.log(result);
}

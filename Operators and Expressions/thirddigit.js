function solve(args) {
    var number = args[0];
    if (number.length >= 3){
        var thirdDigit = +number[number.length - 3];
        if (thirdDigit === 7){
            console.log('true');
        }
        else{
            console.log('false ' + thirdDigit);
        }
    }
    else{
        console.log('false ' + 0);
    }
}


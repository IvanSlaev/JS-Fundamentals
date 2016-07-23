function solve(args) {
    var number = +args[0];
    if (Math.abs(number) % 7 === 0 && Math.abs(number) % 5 === 0){
        console.log('true ' + number)
    }
    else{
        console.log('false ' + number)
    }
}
function solve(args) {
    var number = +args[0];
    if (Math.abs(number) % 2 === 1){
        console.log('odd ' + number)
    }
    else{
        console.log('even ' + number)
    }
}
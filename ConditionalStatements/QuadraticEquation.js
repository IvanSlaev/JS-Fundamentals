function solve(args) {
    var a = +args[0];
    var b = +args[1];
    var c = +args[2];

    var det = Math.pow(b, 2) - 4*a*c;

    if (det < 0){
        console.log('no real roots')
    }
    else if (det === 0){
        console.log('x1=x2=' + (-b/(2*a)).toFixed(2))
    }
    else if (det > 0){
        console.log('x1=' + ((-b - Math.sqrt(det))/(2*a)).toFixed(2) + '; x2=' +  + ((-b + Math.sqrt(det))/(2*a)).toFixed(2));
    }
}
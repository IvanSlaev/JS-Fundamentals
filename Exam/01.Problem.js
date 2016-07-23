function solve(args){
    var s = args[0].split(' ').map(Number),
        result = 0,
        status = [];

    // console.log(s);

    for (var j = 1; j < s.length - 1; j++){
        if (s[j - 1] > s[j] && s[j + 1] > s[j]){
            status[j - 1] = 0;
        }
        else if (s[j - 1] < s[j] && s[j + 1] < s[j]){
            status[j - 1] = 2;
        }
        else{
            status[j - 1] = 1;
        }
    }

    // console.log(status);
    for (var i = 1; i < s.length - 1; i++){
        if (status[i] === 0 && status[i - 1] === 2 && status[i + 1] === 2){
            result += s[i + 1];
        }
    }

    return console.log(result);
}

console.log(solve(["53 20 1 30 2 40 3 10 1"]));
console.log(solve(["53 20 1 30 30 2 40 3 10 1"]));
console.log(solve(["53 20 1 30 2 40 3 3 10 1"]));


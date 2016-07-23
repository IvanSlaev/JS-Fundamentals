var params = ['5 1 7 6 3 6 4 2 3 8'];
function solve(params) {

    var s = params[0].split(' ').map(Number),
        result,
        results = [s.length],
        status = [s.length],
        stones = 0,
        onePeak = true;
    result = 2;
    
    status[0] = s[0] > s[1] ? 2 : 0;
    status[s.length - 1] = s[s.length - 1] > s[s.length - 2] ? 2 : 0;

    for (var j = 1; j < s.length - 1; j++){
        if (s[j - 1] > s[j] && s[j + 1] > s[j]){
            status[j] = 0;
        }
        else if (s[j - 1] < s[j] && s[j + 1] < s[j]){
            status[j] = 2;
        }
        else{
            status[j] = 1;
        }
    }

    if (!status.includes(1)){
        result = 2;
    }
    else {
        var i = 0;

        while (i < s.length) {
            for (var k = i; k < s.length; k++) {
                if (status[k] === 2 && onePeak === true) {
                    stones++;
                    onePeak = false;
                    i++;
                }
                else if (status[k] === 2 && onePeak === false) {
                    stones++;
                    if (stones > result) {
                        result = stones;
                    }
                    stones = 0;
                    onePeak = true;
                    i = k;
                    {
                        break;
                    }
                }
                else if (status[k] === 1) {
                    stones++;
                    i++;
                }
                else {
                    i++;
                }
            }
        }
    }
    console.log(result);
}

solve(params);

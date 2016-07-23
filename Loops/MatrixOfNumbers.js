function solve(args) {
    var N = +args[0];
    var M = N;
    var i = 1;
    var j = 1;
    var string = '';

    while (true)
    {
        if (i <= M)
        {
            string += i + ' ';
            i++;
            continue;
        }
        else
        {
            i = i - M + j;
            M++;
            j++;
            console.log(string);
            string = '';
        }
        if (i > N){
            break;
        }
    }
}
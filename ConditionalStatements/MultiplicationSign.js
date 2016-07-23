function solve(args) {
    var A = +args[0];
    var B = +args[1];
    var C = +args[2];

    if (A === 0 || B === 0 || C === 0)
        console.log(0);
    else
    {
        if (A < 0)
        {
            if (B < 0)
            {
                if (C < 0)
                    console.log("-");
                else
                    console.log("+");
            }
            else
            {
                if (C < 0)
                    console.log("+");
                else
                    console.log("-");
            }
        }
        else
        {
            if (B < 0)
            {
                if (C < 0)
                    console.log("+");
                else
                    console.log("-");
            }
            else
            {
                if (C < 0)
                    console.log("-");
                else
                    console.log("+");
            }
        }
    }
}
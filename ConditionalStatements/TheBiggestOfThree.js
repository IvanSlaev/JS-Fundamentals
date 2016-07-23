function solve(args) {
    var a = +args[0];
    var b = +args[1];
    var c = +args[2];

    var buffer = a;

    if (buffer < b)
        buffer = b;
    if (buffer < c)
        buffer = c;
    console.log(buffer);
}
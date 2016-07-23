function solve(args) {
    var char = args[0].slice(-1);

    var arrayOfWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    return arrayOfWords[+char];
}

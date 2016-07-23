function GetLargestOfNumbers(args) {

    var numbers = args[0].split(' ');
    var a = +numbers[0];
    var b = +numbers[1];
    var c = +numbers[2];

    if (getMax(a, b) > c) {
        return getMax(a, b);
    } else {
        return c;
    }

    function getMax(first, second) {
        return first > second ? first : second;
    }
}
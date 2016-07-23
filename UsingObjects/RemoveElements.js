var args = [ '1', '2', '3', '2', '1', '2', '3', '2' ];
function solve(args) {
    debugger;
    var numberToBeRemoved = args[0];

    Array.prototype.Remove = function (numberToBeRemoved) {
        var newArray = [];

        for (var i = 0; i < args.length; i++) {
            if (this[i] !== numberToBeRemoved) {
                newArray.push(this[i]);
            }
        }

        return newArray;
    };

    console.log(args.Remove(numberToBeRemoved).join('\n'));
}
solve(args);
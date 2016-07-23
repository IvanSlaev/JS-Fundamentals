var args = ['sample text with nbsps'];
function solve(args) {
    var str = args[0];

    console.log(str.replace(/ /g, '&nbsp;'));
}
solve(args);
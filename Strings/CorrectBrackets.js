var args = [')(a+b))'];
function solve(args) {
    var str = args[0],
    openCount = 0,
    closeCount = 0;

    for (var i = 0; i < str.length; i++) {
      if (str[i] === '('){
        openCount++;
      }
      if (str[i] === ')'){
        closeCount++;
      }
    }

    return openCount === closeCount ? 'Correct' : 'Incorrect';
}
solve(args);

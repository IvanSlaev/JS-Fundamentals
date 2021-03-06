var params = [
    '3',
    '4',
    '--K-',
    'K--K',
    'Q--Q',
    '12',
    'd1 b3',
    'a1 a3',
    'c3 b2',
    'a1 c1',
    'a1 b2',
    'a1 c3',
    'a2 c1',
    'd2 b1',
    'b1 b2',
    'c3 a3',
    'a2 a3',
    'd1 d3'

];

function solve(params) {
    var rows = parseInt(params[0]),
        cols = parseInt(params[1]),
        tests = parseInt(params[rows + 2]),
        i,
        move,
        board = params.splice(2, rows);


    for (i = 0; i < tests; i++) {
        move = params[rows + i];
        var initRow = rows - +move[1],
            initCol = move.charCodeAt(0) - 'a'.charCodeAt(0),
            goalRow = rows - +move[4],
            goalCol = move.charCodeAt(3) - 'a'.charCodeAt(0),

            piece = board[initRow][initCol],
            goalPosition = board[goalRow][goalCol];

        if (isKnight(piece)){
            if (isEmpty(goalPosition) && isValidKnightMove(initRow, initCol, goalRow, goalCol)){
                console.log('yes');
            } else {
                console.log('no');
            }
        }
        else if (isQeen(piece)) {
            console.log('no');
        }
        else {
            console.log('no');
        }
    }

    function isValidKnightMove(initRow, initCol, goalRow, goalCol) {
        const knightMoves = [[-2, 1], [-1, 2], [1, 2], [2, 1],[2, -1], [1, -2], [-1, -2], [-2, -1]];
        for (var i = 0; i < knightMoves.length; i++){
            if (initRow + knightMoves[i][0] === goalRow && initCol + knightMoves[i][1] === goalCol){
                return true;
            }
        }
        return false;
    }

    function isKnight(piece) {
        return piece === 'K' ? true : false;
    }
    function isQeen(piece) {
        return piece === 'Q' ? true : false;
    }
    function isEmpty(piece) {
        return piece === '-' ? true : false;
    }
}
solve(params);

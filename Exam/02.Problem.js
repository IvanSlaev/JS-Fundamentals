function solve(args) {
    var field = args[0]. split(' '),
        coord = args[1].split(';').map(function (item) {
            return item.split(' ');
        }),
        moves = args.splice(2).map(function (item) {
            return item.split(' ');
        });

    // console.log(board);
    // console.log(coord);
    // console.log(moves);

    var board = {
            rows: +field[0] - 1,
            cols: +field[1] - 1
        },
        W = {
            row: +coord[0][0],
            col: +coord[0][1],
            traped: false
        },
        N = {
            row: +coord[1][0],
            col: +coord[1][1],
            traped: false
        },
        L = {
            row: +coord[2][0],
            col: +coord[2][1],
        },
        dirs = {
            u: [-1, 0],
            d: [1, 0],
            l: [0, -1],
            r: [0, 1]
        },
        whenLIsTraped = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]],
        traps = [],
        trapcount = 0;


    //console.log(W);
    //console.log(N);
    //console.log(L);

    for (var i = 0; i < moves.length; i += 1){
        if (moves[i][0] === 'mv'){
            if (moves[i][1][0] === 'L'){
                L.row = (L.row + dirs[moves[i][2]][0] > board.rows) || (L.row + dirs[moves[i][2]][0] < 0) ? L.row : L.row + dirs[moves[i][2]][0];
                L.col = (L.col + dirs[moves[i][2]][1] > board.cols) || (L.col + dirs[moves[i][2]][1] < 0) ? L.col : L.col + dirs[moves[i][2]][1];

                if (L.row === board.rows && L.col === board.cols){
                    console.log("Lsjtujzbo is saved! " + W.row + " " + W.col + " " + N.row + " " + N.col);
                }
            }
            else{
                var trol = moves[i][1][0];

                if (trol === 'W' && W.traped === false){
                    W.row = (W.row + dirs[moves[i][2]][0] > board.rows) || (W.row + dirs[moves[i][2]][0] < 0) ? W.row : W.row + dirs[moves[i][2]][0];
                    W.col = (W.col + dirs[moves[i][2]][1] > board.cols) || (W.col + dirs[moves[i][2]][1] < 0) ? W.col : W.col + dirs[moves[i][2]][1];

                    for (var k = 0; k < whenLIsTraped.length; k += 1){
                        if (L.row + whenLIsTraped[k][0] === W.row && L.col + whenLIsTraped[k][1] === W.col){
                            console.log("The trolls caught Lsjtujzbo at " + L.row + " " + L.col);
                        }
                    }

                    for (var t = 0; t < traps.length; t += 1){
                        if (W.row === traps[t][0] && W.col === traps[t][1]){
                            W.traped = true;
                        }
                    }
                }
                else if (trol === 'N' && N.traped === false){
                    N.row = (N.row + dirs[moves[i][2]][0] > board.rows) || (N.row + dirs[moves[i][2]][0] < 0) ? N.row : N.row + dirs[moves[i][2]][0];
                    N.col = (N.col + dirs[moves[i][2]][1] > board.cols) || (N.col + dirs[moves[i][2]][1] < 0)? N.col : N.col + dirs[moves[i][2]][1];

                    for (var k = 0; k < whenLIsTraped.length; k += 1){
                        if (L.row + whenLIsTraped[k][0] === N.row && L.col + whenLIsTraped[k][1] === N.col){
                            console.log("The trolls caught Lsjtujzbo at " + L.row + " " + L.col);
                        }
                    }

                    for (var t = 0; t < traps.length; t += 1){
                        if (N.row === traps[t][0] && N.col === traps[t][1]){
                            N.traped = true;
                        }
                    }
                }
                debugger;
                for (var t = 0; t < traps.length; t += 1){

                    if ((N.row ===  traps[t][0]) && (W.row === traps[t][0]) && (N.col === traps[t][1]) && (W.col === traps[t][1])){
                        N.traped = false;
                        W.traped = false;
                        traps = traps.splice(t, 1);
                        trapcount -= 1;
                    }
                }
            }
        }
        else{
            traps[trapcount] = [L.row, L.col];
            trapcount += 1;
        }
    }
}


solve([
    '4 4',
    '0 0;0 0;0 2',
    'lay trap',
    'mv Lsjtujzbo d',
    'lay trap',
    'mv Lsjtujzbo d',
    'lay trap',
    'mv Lsjtujzbo d',
    'lay trap',
    'mv Wboup r',
    'mv Wboup r',
    'mv Nbslbub r',
    'mv Wboup r',
    'mv Wboup r',
    'mv Nbslbub r',
    'mv Nbslbub r',
    'mv Wboup d',
    'mv Wboup d'
]);
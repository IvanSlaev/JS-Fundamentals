function solve(args) {
    var x = +args[0];
    var y = +args[1];
    var ci = '';
    var re = '';
    var R = Math.sqrt(Math.pow(x - 1, 2) + Math.pow(y - 1, 2));
    if (R <= 1.5){
        ci = "inside circle ";
    }
    else{
        ci = "outside circle ";
    }
    if (x >= -1 && x <= 5 && y >= -1 && y <= 1){
        re = "inside rectangle";
    }
    else{
        re = "outside rectangle";
    }
    console.log(ci + re);
}
var args = ['We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anYTHing</lowcase> else.'];
function solve(args) {

    var str = args[0],
        startIndex = 0,
        newString = "",
        i = 0;

    while (i < str.length){
        if (str.substr(i, 8) === "<upcase>"){
            newString += str.substr(startIndex, i - startIndex);
            var index = str.indexOf("</upcase>", i + 8);
            newString += str.substr(i + 8, index - (i + 8)).toUpperCase();
            i = index + 9;
            startIndex = index + 9;
        }
        else if (str.substr(i, 9) === "<lowcase>"){
            newString += str.substr(startIndex, i - startIndex);
            var index = str.indexOf("</lowcase>", i + 9);
            newString += str.substr(i + 9, index - (i + 9)).toLowerCase();
            i = index + 10;
            startIndex = index + 10;
        }
        else if (str.substr(i, 9) === "<orgcase>"){
            newString += str.substr(startIndex, i - startIndex);
            var index = str.indexOf("</orgcase>", i + 9);
            newString += str.substr(i + 9, index - (i + 9));
            i = index + 10;
            startIndex = index + 10;
        }
        else if (i === str.length - 1) {
            newString += str.substr(startIndex);
            i++;
        }
        else{
            i++;
        }
    }

    console.log(newString);
}
solve(args);
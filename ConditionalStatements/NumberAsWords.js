function solve(args) {
    var number = +args[0];
    var text = '';

     var numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
     var capNumbers = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    var decs = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
     var capDecs = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
     var tenUp = ['', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
     var capTenUp = ['', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];

    var string = number.toString();

    var hun;
    var dec;
    var one;

    if (string.length === 1){
        one = +string[0];
        text = capNumbers[one];
    }
    else if (string.length === 2){
        dec = +string[0];
        one = +string[1];

        if (one === 0){
            text = capDecs[dec];
        }
        else if (dec === 1){
            text = capTenUp[one + 1];
        }
        else{
            text = capDecs[dec] + ' ' + numbers[one];
        }
    }
    else if (string.length === 3){
        hun = +string[0];
        dec = +string[1];
        one = +string[2];

        if (one === 0 && dec === 0 ){
            text = capNumbers[hun] + ' hundred';
        }
        else if (one === 0 && dec != 0 ){
            text = capNumbers[hun] + ' hundred and ' + decs[dec];
        }

        else if (one != 0 && dec === 1){
            text = capNumbers[hun] + ' hundred and ' + tenUp[one + 1];
        }
        else if (one != 0 && dec === 0){
            text = capNumbers[hun] + ' hundred and ' + numbers[one];
        }
        else{
            text = capNumbers[hun] + ' hundred and ' + decs[dec] + ' ' + numbers[one];
        }
    }

    console.log(text)
}
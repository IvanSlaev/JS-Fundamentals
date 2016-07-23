var args = [ '{ "name": "John", "age": 4 }',
    "My name is #{name} and I am #{age}-years-old"]

function solve(args){
            result = this;
        String.prototype.PlaceHolder = function (object) {
            var variable;
debugger;
        for (variable in object){
            result = result.replace(new RegExp('#{' + variable + '}', 'g'), object[variable])
        }
        return result;
    };

    var obj = JSON.parse(args[0]),
        str = args[1].PlaceHolder(obj);

    console.log(str);
}
solve(args);
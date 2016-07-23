var args = [
    'Gosho', 'Petrov', '32',
    'Bay', 'Ivan', '81',
    'John', 'Doe', '42'
];
function solve(args) {
    debugger;
    var people = [],
        j = 0,
        minIndex = 0,
        minAge = +args[2];

    function makePeople(firstName, lastName, age) {
        return {
            FirstName: firstName,
            LastName: lastName,
            Age: age
        }
    }

    for (var i = 0; i < args.length / 3; i++){
        people.push(makePeople(args[j], args[j + 1], +args[j + 2]));
        if (minAge > +args[j + 2]){
            minAge = +args[j + 2];
            minIndex = i;
        }
        j += 3;
    }

    return people[minIndex].FirstName + ' ' + people[minIndex].LastName;
}
console.log(solve(args));

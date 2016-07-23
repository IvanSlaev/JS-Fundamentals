var args = ['http://telerikacademy.com/Courses/Courses/Details/239'];
function solve(args) {
    var str = args[0];

    var indexProt = str.indexOf('://'),
        indexSer = str.indexOf('/', indexProt + 3);

    var prot = 'protocol: ' + str.substring(0, indexProt),
        server = 'server: ' + str.substring(indexProt + 3, indexSer),
        res = 'resource: ' + str.substring(indexSer);

    console.log(prot);
    console.log(server);
    console.log(res);
}
solve(args);
 
var args = ['<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>'];
function solve(args) {
    debugger;
    var str = args[0],
        siteArray = str.match(/<a href=".*?">.*?<\/a>/g);

    for (var link of siteArray){
        var array = link.split(['<a href="', '">', '</a>']);
    }
}
solve(args);

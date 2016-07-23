var args = [
    '<html>',
    '  <head>',
    '    <title>Sample site</title>',
    '  </head>',
    '  <body>',
    '    <div>text',
    '      <div>more text</div>',
    '      and more...',
    '    </div>',
    '    in body',
    '  </body>',
    '</html>'];
function solve(args) {
    let string = '';

    for (let line of args) {
        string += line.replace(/<.+?>/ig, '').trim();
    }

    console.log(string);
}
solve(args);
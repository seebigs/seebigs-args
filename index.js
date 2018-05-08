var minimist = require('minimist');

function parse(argsArray) {
    argsArray = argsArray || process.argv.slice(2);
    return minimist(argsArray);
}

parse.parse = parse;

module.exports = parse;

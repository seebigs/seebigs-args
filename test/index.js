var args = require('../index.js');

var fromCLI = args();
var parsed = args.parse(['--one=one', '--two=2.2', 'three', '-cb']);

var expectations = [
    {
        actual: fromCLI.foo,
        expected: true,
        label: 'fromCLI.foo to be true',
    },
    {
        actual: fromCLI.bar,
        expected: 123,
        label: 'fromCLI.bar to be 123',
    },
    {
        actual: fromCLI._,
        expected: ['extra'],
        label: 'fromCLI._ to be ["extra"]',
    },
    {
        actual: parsed.one,
        expected: 'one',
        label: 'parsed.one to be "one"',
    },
    {
        actual: parsed.two,
        expected: 2.2,
        label: 'parsed.two to be 2.2',
    },
    {
        actual: parsed._,
        expected: ['three'],
        label: 'parsed._ to be ["three"]',
    },
    {
        actual: parsed.c,
        expected: true,
        label: 'parsed.c to be true',
    },
    {
        actual: parsed.b,
        expected: true,
        label: 'parsed.b to be true',
    },
];

expectations.forEach(function (expectation) {
    if (typeof expectation.expected === 'object') {
        if (expectation.actual.toString() !== expectation.expected.toString()) {
            console.log('\nFailure: Expected ' + expectation.label + '\n');
            process.exit(1);
        }

    } else {
        if (expectation.actual !== expectation.expected) {
            console.log('\nFailure: Expected ' + expectation.label + '\n');
            process.exit(1);
        }
    }
});

console.log('\nAll tests passed!\n');

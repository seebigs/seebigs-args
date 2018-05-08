# seebigs-args

Just a simple wrapper for [minimist](https://github.com/substack/minimist) so that you don't need to remember to pass `process.argv.slice(2)`

## Install
```
$ npm install seebigs-args
```

## Use
app.js
```js
const args = require('seebigs-args');

console.log(args._); // ['command']
console.log(args.foo); // true
console.log(args.bar); // 123
console.log(args.x); // true
console.log(args.y); // true
```

```
$ node app command --foo --bar=123 -xy
```

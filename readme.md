# genderize

Install with `npm install genderize`. This is a wrapper for the [genderize web service](http://genderize.io/).

Note that you should not use this to guess which gender you should assign to
a person. Names are not a reliable predictor of which gender people want to use.
I think it should only be used for analytical purposes of a set of names.

## Example
```js
var genderize = require('genderize')

genderize('Julia', function (err, obj) {
  console.log(obj.gender) // outputs 'female'
}
```

### List
```js
genderize.list(['Julia', 'Finn', 'Christian'], function (err, obj) {
  console.log(obj)
})
```

## CLI

You can also do `npm install genderize -g` and you will get a simple streaming interface for piping
in names and getting beck new line delimited JSON objects.

Given names.txt
```
Julia
Florian
Finn
```

This command will result:

```sh
$ genderize < names.txt
{"name":"Finn","gender":"male","probability":"1.00","count":29}
{"name":"Florian","gender":"male","probability":"1.00","count":205}
{"name":"Julia","gender":"female","probability":"1.00","count":913}
```
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
})

// optional localization parameters (see https://genderize.io/#localization)
genderize('Andrea', {language_id: 'it'}, function (err, obj) {
  console.log(obj.gender) // outputs 'male'
})
```

### Stream
```js
objectStream
  .pipe(genderize({language_id: 'it'}))
  .pipe(ndjson.stringify())
  .pipe(process.out)
```

### List
```js
genderize.list(['Julia', 'Finn', 'Christian', 'Andrea'], function (err, obj) {
  console.log(obj)
})

genderize.list(['Julia', 'Finn', 'Christian', 'Andrea'], {language_id: 'it'}, function (err, obj) {
  console.log(obj)
})
```

## CLI

You can also do `npm install genderize -g` and you will get a simple streaming interface for piping
in names and getting beck new line delimited JSON objects.

Given names.txt
```
"Julia"
Florian
Finn
Andrea
```

This command could result. Note that it doesn't have to be in the correct order.

```sh
$ genderize < names.txt
{"name":"Julia","gender":"female","probability":"0.99","count":2099}
{"name":"Florian","gender":"male","probability":"1.00","count":469}
{"name":"Finn","gender":"male","probability":"0.99","count":81}
{"name":"Andrea","gender":"female","probability":"0.79","count":5623}

$ genderize --language_id it < names.txt
{"name":"Julia","gender":"female","probability":"1.00","count":7,"language_id":"it"}
{"name":"Florian","gender":"male","probability":"1.00","count":4,"language_id":"it"}
{"name":"Finn","gender":null,"language_id":"it"}
{"name":"Andrea","gender":"male","probability":"0.98","count":1033,"language_id":"it"}
```

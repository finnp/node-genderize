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
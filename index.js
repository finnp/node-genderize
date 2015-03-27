var stringify = require('querystring').stringify
var request = require('request')

function genderize(firstname, options, cb) {
  var qs = stringify({name: firstname})

  if (typeof options === 'function') {
    cb = options
  } else {
    qs += '&' + stringify(options)
  }

  request('http://api.genderize.io?' + qs, function (err, res, body) {
    if(err) cb(err)
    cb(null, JSON.parse(body))
  })
}

genderize.list = function (names, options, cb) {
  var values = names.reduce(function (acc, current, index) {
    acc['name[' + index  + ']'] = current
    return acc
  }, {})

  var qs = stringify(values)

  if (typeof options === 'function') {
    cb = options
  } else {
    qs += '&' + stringify(options)
  }

  request('http://api.genderize.io?' + qs, function (err, res, body) {
    if(err) cb(err)
    cb(null, JSON.parse(body))
  })
}

module.exports = genderize
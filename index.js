var stringify = require('querystring').stringify
var request = require('request')
var through = require('through2')

function genderize(firstname, options, cb) {
  var qs = stringify({name: firstname})

  if (typeof options === 'function') {
    cb = options
  } else {
    qs += '&' + stringify(options)
  }

  request('https://api.genderize.io?' + qs, function (err, res, body) {
    if(err) cb(err)
    cb(null, JSON.parse(body))
  })
}

genderize.stream = function(options) {
  options = options || {}
  return through.obj(function (chunk, enc, cb) {
    if(Buffer.isBuffer(chunk)) chunk = chunk.toString()
    genderize(chunk, options, cb)
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

  request('https://api.genderize.io?' + qs, function (err, res, body) {
    if(err) cb(err)
    cb(null, JSON.parse(body))
  })
}

module.exports = genderize

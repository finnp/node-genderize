var stringify = require('querystring').stringify
var request = require('request')

function genderize(firstname, cb) {
  var qs =  stringify({name: firstname})
  request('http://api.genderize.io?' + qs, function (err, res, body) {
    if(err) cb(err)
    cb(null, JSON.parse(body))
  })
}

genderize.list = function (names, cb) {

  var values = names.reduce(function (acc, current, index) {
    acc['name[' + index  + ']'] = current
    return acc
  }, {})
  
  var qs = stringify(values)
  
  request('http://api.genderize.io?' + qs, function (err, res, body) {
    if(err) cb(err)
    cb(null, JSON.parse(body))
  })
}

module.exports = genderize
var querystring = require('querystring')
var request = require('request')

module.exports = function (firstname, cb) {
  var qs =  querystring.stringify({name: firstname})
  request('http://api.genderize.io?' + qs, function (err, res, body) {
    if(err) cb(err)
    cb(null, JSON.parse(body))
  })
}
var genderize = require('./')

genderize('Julia', function (err, obj) {
  console.log(obj)
})

genderize.list(['Julia', 'Finn', 'Christian'], function (err, obj) {
  console.log(obj)
})
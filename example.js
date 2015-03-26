var genderize = require('./')

genderize('Julia', function (err, obj) {
  console.log(obj)
})

genderize.list(['Julia', 'Finn', 'Christian'], function (err, obj) {
  console.log(obj)
})

genderize('Andrea', function (err, obj) {
  console.log(obj)
})

genderize('Andrea', {language_id: 'it'}, function (err, obj) {
  console.log(obj)
})

genderize.list(['Julia', 'Finn', 'Christian', 'Andrea'], {language_id: 'it'}, function (err, obj) {
  console.log(obj)
})
var genderize = require('./')

genderize('Julia', function (_, obj) {
  console.log(obj)
})

genderize.list(['Julia', 'Finn', 'Christian'], function (_, obj) {
  console.log(obj)
})

genderize('Andrea', function (_, obj) {
  console.log(obj)
})

genderize('Andrea', {language_id: 'it'}, function (_, obj) {
  console.log(obj)
})

genderize.list(['Julia', 'Finn', 'Christian', 'Andrea'], {language_id: 'it'}, function (_, obj) {
  console.log(obj)
})

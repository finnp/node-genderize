#!/usr/bin/env node

var split = require('split')
var unquote = require('unquote')
var genderize = require('./')
var args = process.argv.slice(2)

process.stdin
  .pipe(split())
  .on('data', function (name) {
    var options = args.reduce(function (acc, current, index) {
      var parts = current.split('=')
      acc[parts[0]] = parts[1]
      return acc
    }, {})

    genderize(unquote(name), options, function (err, data) {
      if(err) return console.error(err)
      console.log(JSON.stringify(data))
    })
  })
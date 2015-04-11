#!/usr/bin/env node

var split = require('split')
var unquote = require('unquote')
var minimist = require('minimist')
var ndjson = require('ndjson')
var through = require('through2')
var genderize = require('./')

var args = minimist(process.argv.slice(2))

process.stdin
  .pipe(split())
  .pipe(through(function (name, enc, cb) {
    cb(null, unquote(name.toString()))
  }))
  .pipe(genderize.stream(args))
  .pipe(ndjson.stringify())
  .pipe(process.stdout)
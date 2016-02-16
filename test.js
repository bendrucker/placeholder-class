'use strict'

var test = require('tape')
var proxyquire = require('proxyquire')
var fs = require('fs')

test(function (t) {
  t.plan(3)

  var expected = fs.readFileSync(__dirname + '/fixture.css', 'utf8').trim()
  var placeholder = proxyquire('./', {
    'cuid': function () {
      return 'randId'
    },
    'insert-styles': function (css) {
      t.equal(css, expected, 'inserts css into head')
    }
  })

  var id = placeholder({color: 'red'})
  t.equal(id, 'randId', 'returns randomized class')

  var cachedId = placeholder({color: 'red'})
  t.equal(cachedId, 'randId', 'returns same class for deeply equal input')
})

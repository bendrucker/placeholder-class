'use strict'

var cuid = require('cuid')
var toCss = require('style-css')
var insertStyles = require('insert-styles')

var cache = {}

module.exports = function placeholder (styles) {
  var key = JSON.stringify(styles)

  if (cache[key]) return cache[key]

  var css = {}
  var id = cuid()
  cache[key] = id

  var classSelector = '.' + id
  var webkit = classSelector + '::-webkit-input-placeholder'
  var moz = classSelector + '::-moz-placeholder'

  css[webkit] = css[moz] = styles

  insertStyles(toCss(css))

  return id
}

/**
 * Imports
 */

var pickAs = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should pick from object', function (t) {
  var source = {a: 1, b: 2, c: 3}
  t.deepEqual(pickAs({a: 'd', c: 'e'}, source), {d: 1, e: 3})
  t.end()
})

test('should pick from nested object', function (t) {
  var source = {a: {b: 2}, c: 3}
  t.deepEqual(pickAs({'a.b': 'd', c: 'e'}, source), {d: 2, e: 3})
  t.end()
})

test('should ignore undefined values', function (t) {
  var source = {a: {b: 2}}
  t.deepEqual(pickAs({'a.b': 'd', d: 'e'}, source), {d: 2})
  t.end()
})

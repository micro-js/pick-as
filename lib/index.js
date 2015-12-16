/**
 * Modules
 */

var values = require('@f/values')
var getProp = require('@f/get-prop')
var isUndefined = require('@f/is-undefined')

/**
 * Expose pickAs
 */

module.exports = pickAs['default'] = pickAs

/**
 * Return partial copy of object containing specified subset of aliased keys.
 * @param  {Object} map Source keys to alias.
 * @param  {Object} obj Source
 * @return {Object}
 */

function pickAs (map, obj) {
  var destKeys = Object.keys(map)
  var srcKeys = values(map)
  var copy = {}
  var val

  for (var i = 0; i < destKeys.length; ++i) {
    val = getProp(srcKeys[i], obj)
    if (!isUndefined(val)) {
      copy[destKeys[i]] = val
    }
  }

  return copy
}

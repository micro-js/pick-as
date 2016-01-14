
# pick-as

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Return partial copy of object containing specified subset of aliased keys.

## Installation

    $ npm install @f/pick-as

## Usage

```js
var pickAs = require('@f/pick-as')

var source = {a: {b: 2}, c: 3}
pickAs({'a.b': 'd', c: 'e'}, source) // => {d: 2, e: 3}

```

## API

### pickAs(map, obj)

- `map` - A map of keys to pick to their new names
- `obj` - Source to copy

**Returns:** Partial copy of `obj` with aliased keys.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/pick-as.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/pick-as
[git-image]: https://img.shields.io/github/tag/micro-js/pick-as.svg
[git-url]: https://github.com/micro-js/pick-as
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/pick-as.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/pick-as

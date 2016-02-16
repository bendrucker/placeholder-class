# placeholder-class [![Build Status](https://travis-ci.org/bendrucker/placeholder-class.svg?branch=master)](https://travis-ci.org/bendrucker/placeholder-class)

> Create a random class name that implements placeholder pseudoclass styling in CSS


## Install

```
$ npm install --save placeholder-class
```


## Usage

Calling `placeholder` returns a randomized class name and appends the supplied CSS rules to the document `<head>` for that class. That class can then be used to apply placeholder styling to any element.

```js
var placeholder = require('placeholder-class')

var className = placeholder({color: 'red'})
//=> cikpsfdg40000z9oj9dkwfzas
```

## API

#### `placeholder(styles)` -> `string`

##### styles

*Required*  
Type: `object`

A DOM style object.


## License

MIT © [Ben Drucker](http://bendrucker.me)

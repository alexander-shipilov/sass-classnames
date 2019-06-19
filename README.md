sass-classnames
===========

[![Version](http://img.shields.io/npm/v/@helioscompanies/sass-classnames.svg)](https://www.npmjs.org/package/@helioscompanies/sass-classnames)

[Sass](https://sass-lang.com/) implementation of [classnames](https://www.npmjs.org/package/classnames).

Install with [npm](https://www.npmjs.com/), [Bower](https://bower.io/), or [Yarn](https://yarnpkg.com/):

npm:
```sh
npm install @helioscompanies/sass-classnames
```

Bower:
```sh
bower install @helioscompanies/sass-classnames
```

Yarn (note that `yarn add` automatically saves the package to the `dependencies` in `package.json`):
```sh
yarn add @helioscompanies/sass-classnames
```

## Usage

The `class-names` function takes any number of arguments which can be a `string`, `list`, `arglist` or `map`
(other types are ignored).

```scss
@debug class-names(foo, (bar: true), (baz, ted)); // .foo.bar.baz.ted
```

### Keywords

The `class-names` function supports any number of [keywords](https://sass-lang.com/documentation/functions/map#keywords).
If the value associated with a given keyword is falsy (is equal to `false`, `null`, `0` or an empty string),
that keyword won't be included in the output.

```scss
@debug class-names($foo: false, $bar: null, $baz: 0, $ted: '');              // null
@debug class-names($foo: true, $bar: 1, $bar: non-empty-string, $ted: #fff); // .foo.bar.baz.ted
```

### Maps

If the value associated with a given key is falsy, that key won't be included in the output.

```scss
@debug class-names((foo: false, bar: null, baz: 0, ted: '')); // null

@debug class-names((foo: true));               // .foo
@debug class-names((foo: true, bar: true));    // .foo.bar
@debug class-names((foo: true), (bar: true));  // .foo.bar
```

### Strings

The `string` argument `foo` (or `'foo'` or `"foo"`) is short for `(foo: true)`.

```scss

@debug class-names(foo, bar);          // .foo.bar
@debug class-names("foo", "bar");      // .foo.bar
@debug class-names('foo', 'bar');      // .foo.bar

```

### Lists

Lists will be recursively flattened as per the rules above:

```scss
@debug class-names(a, (b, (c: true, d: false))); // .a.b.c
```

Real-world example:

```scss
@import "node-modules/@helioscompanies/sass-classnames/index";

#{ class-names(message) } { color: #000; }
#{ class-names(message, error) } { color: red; }

// .message { color: #000 }
// .message.error { color: red } 

```

## License
The sass-classnames package is open-sourced software licensed under the
[MIT license](http://opensource.org/licenses/MIT).
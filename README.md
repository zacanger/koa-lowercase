# koa-lowercase

Simple lowercasing middleware for Koa 2.

--------

## Installation:

`npm i -S koa-lowercase`

## Usage:

```javascript
import lower from 'koa-lowercase'

// other stuff

app.use(lower)

// probably more other stuff
```

If you're using `require` you'll need to do `require('koa-lowercase').default`.

`POST`, `HEAD`, `PUT`, and `DELETE` are _not_ lowercased.

Querystrings are not lowercased.

__Please note__ this module is for Koa 2. If you're using Koa 1, consider
[this module](https://www.npmjs.com/koa-lowercase-url) or
[this one](https://npmjs.com/koa-lowercase-path).

## License:

[MIT](./LICENSE.md)

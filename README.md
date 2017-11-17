# koa-lowercase

Simple lowercasing middleware for Koa 2.

--------

## Installation:

`npm i -S koa-lowercase`

## Usage:

```javascript
import Koa from 'koa'
import lower from 'koa-lowercase'

const app = new Koa()

app.use(lower)
// other middlewares, routes, etc.

app.listen(process.env.PORT || 3000)
console.log(`Serving on ${port}`)
```

If you're using `require` you'll need to do `require('koa-lowercase').default`.

`POST`, `HEAD`, `PUT`, and `DELETE` are _not_ lowercased.

Querystrings are not lowercased.

__Please note__ this module is for Koa 2. If you're using Koa 1, consider
[this module](https://www.npmjs.com/koa-lowercase-url) or
[this one](https://npmjs.com/koa-lowercase-path).

## License:

[MIT](./LICENSE.md)

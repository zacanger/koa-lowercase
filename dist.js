'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const lowercase = async (ctx, next) => {
  const { origin, path, querystring } = ctx.request;
  const op = `${origin}${path}`;
  if (/[A-Z]/.test(op) && !['POST', 'HEAD', 'PUT', 'DELETE'].includes(ctx.method)) {
    const ld = `${op.toLowerCase()}${querystring ? '?' + querystring : ''}`;
    ctx.status = 301;
    ctx.redirect(ld);
    return;
  }

  return next();
};

exports.default = lowercase;

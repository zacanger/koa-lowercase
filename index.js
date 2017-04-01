const lowercase = (ctx, next) => {
  if (
    /[A-Z]/.test(ctx.url) &&
    ![ 'HEAD', 'PUT', 'DELETE' ].includes(ctx.method)
  ) {
    ctx.status = 301
    ctx.redirect(ctx.url.toLowerCase())
    return
  }

  return next()
}

export default lowercase

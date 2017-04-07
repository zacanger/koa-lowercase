const lowercase = (ctx, next) => {
  const { origin, path, querystring } = ctx.request
  const op = `${origin}${path}`
  if (
    /[A-Z]/.test(op) &&
    ![ 'HEAD', 'PUT', 'DELETE' ].includes(ctx.method)
  ) {
    const ld = `${op.toLowerCase()}?${querystring || ''}`
    ctx.status = 301
    ctx.redirect(ld)
    return
  }

  return next()
}

export default lowercase

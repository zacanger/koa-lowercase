const lowercase = (ctx, next) => {
  if (/[A-Z]/.test(ctx.url)) {
    ctx.status = 301
    ctx.redirect(ctx.url.toLowerCase())
  } else {
    return next()
  }
}

export default lowercase

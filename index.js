const lowercase = async (ctx, next) => {
  if (/[A-Z]/.test(ctx.url)) {
    ctx.status = 301
    ctx.redirect(ctx.url.toLowerCase())
  } else {
    await next()
  }
}

export default lowercase

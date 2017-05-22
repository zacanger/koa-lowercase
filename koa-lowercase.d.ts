import { Middleware } from 'koa'
declare function lowercase (ctx, next): Middleware
declare namespace lowercase {}
export = lowercase

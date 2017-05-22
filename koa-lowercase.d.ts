import { Middleware } from 'koa'
declare function lowercase (ctx: any, next: () => Promise<any>): Middleware
declare namespace lowercase {}
export = lowercase

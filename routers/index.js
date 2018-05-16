const koaRouter = require("koa-router");

const apiRouter = require("./api");

let allRouters = new koaRouter();

allRouters.use('/api',apiRouter.routes(),apiRouter.allowedMethods());

module.exports = allRouters;
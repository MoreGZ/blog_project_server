const koaRouter = require("koa-router");
const apiController = require("./../controllers/api");

let routers = new koaRouter();

routers
    .post("/login",apiController.login)
    .post("/logout",apiController.logout)
    .post("/checkLog",apiController.checkLog);

module.exports = routers;

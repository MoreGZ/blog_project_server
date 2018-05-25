const koaRouter = require("koa-router");
const apiController = require("./../controllers/api/index");

let routers = new koaRouter();

routers
    .post("/login",apiController.login)
    .post("/logout",apiController.logout)
    .post("/checkLog",apiController.checkLog)
    .post("/editInformation",apiController.editInformation)
    .post("/register",apiController.register)

    .get("/getArticlesByClassify",apiController.getArticlesByClassify)
    .get("/getArticleById",apiController.getArticleById)
    .get("/getArticlesByKeyword",apiController.getArticlesByKeyword)
    .post("/removeArticle",apiController.removeArticle)
    .post("/addArtilce",apiController.addArtilce)
    .post("/editArticle",apiController.editArticle)
    
    .post("/addClassName",apiController.addClassName)
    .post("/removeClassName",apiController.removeClassName)
    .post("/editClassName",apiController.editClassName)
    .get("/getClassNames",apiController.getClassNames)

module.exports = routers;

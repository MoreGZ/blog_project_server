const koa = require("koa");
const koaStatic = require("koa-static");
const koaViews = require("koa-views");
const koaLogger = require("koa-logger");
const bodyParser = require("koa-bodyparser");
const koaSession = require("koa-session-minimal");
const MysqlStore = require("koa-mysql-session");

const path = require('path');

const config = require("./config/index");
const routers = require("./routers/index");

const app = new koa();

// session存储配置
const sessionMysqlConfig = {
    user: config.dbConfig.user,
    host: config.dbConfig.host,
    password: config.dbConfig.password,
    database: config.dbConfig.database,
}

// 配置session中间件
app.use(koaSession({
    key:'session_id',
    store: new MysqlStore(sessionMysqlConfig)
}))

// 配置控制台日志中间件
app.use(koaLogger());

// 配置ctx.body解析中间件
app.use(bodyParser({
    enableTypes:['json', 'form', 'text']
}))

// 配置静态资源加载中间件
app.use(koaStatic(
    path.join(__dirname,'static')
))

// 配置服务端模板渲染引擎中间件
app.use(koaViews(
    path.join(__dirname,"views"),
    {
        extension:"ejs"
    }
))

// 初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods());

// 监听启动端口
app.listen(config.port,()=>{
    console.log(`open server in port ${config.port}`);
});



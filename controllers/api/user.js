const services = require("../../services/api/user");

const login = async function(ctx){
    console.log("You are requesting the login controller");
    const result = await services.loginServices();
    // let formData = ctx.request.body;
    // let result = {
    //     success: false,
    //     code: "",
    //     message: "",
    //     data: null
    // }
    // let dbResult = await services.loginServices(formData);
    // if(dbResult.length){
    //     result.success = true;
    //     result.code = "001";
    //     result.message = codes["001"];
    //     result.data = dbResult[0];
    // }else{
    //     result.success = false;
    //     result.code = "006";
    //     result.message = codes["006"];
    //     result.data = dbResult;
    // }

    // if(result.success){
    //     let session = ctx.session;
    //     session.isLogin = true;
    //     session.username = formData.username;
    //     session.password = formData.password;
    // }
    // ctx.body = result;
}

const logout = async function(ctx){
    console.log("You are requesting the logout controller");
    const result = await services.logoutService();
    // ctx.session = null;
    // result = {
    //     success: true,
    //     message: codes['001'],
    //     data: null,
    //     code: '001',
    // }
    // ctx.body = result;
}

const checkLog = async function(ctx){
    console.log("You are requesting the checkLog controller");
    const result = await services.checkLogService();
    // let result = {
    //     success: false,
    //     message: codes['002'],
    //     data: null,
    //     code: '002',
    // } 
    // let session = ctx.session
    // if( session && session.isLogin === true  ) {
    //     result.success = true
    //     result.message = codes['001']
    //     result.code = '001'
    //     result.data = session;
    // }
    // ctx.body = result;
}

const editInformation = async function(ctx){
    console.log("You are requesting the editInformation controller");
    const result = await services.editInformationService();
}

const register = async function(ctx){
    console.log("You are requesting the register controller");
    const result = await services.registerService();
}

module.exports = {
    login,
    logout,
    checkLog,
    register,
    editInformation
}
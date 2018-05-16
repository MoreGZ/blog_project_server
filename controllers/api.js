const apiServices = require("../services/api");
const codes = require("../codes/index");

let login = async function(ctx){
    let formData = ctx.request.body;
    let result = {
        success: false,
        code: "",
        message: "",
        data: null
    }
    let dbResult = await apiServices.loginServices(formData);
    if(dbResult.length){
        result.success = true;
        result.code = "001";
        result.message = codes["001"];
        result.data = dbResult[0];
    }else{
        result.success = false;
        result.code = "006";
        result.message = codes["006"];
        result.data = dbResult;
    }

    if(result.success){
        let session = ctx.session;
        session.isLogin = true;
        session.username = formData.username;
        session.password = formData.password;
    }
    ctx.body = result;
}

let logout = async function(ctx){
    ctx.session = null;
    result = {
        success: true,
        message: codes['001'],
        data: null,
        code: '001',
    }
    ctx.body = result;
}

let checkLog = async function(ctx){
    let result = {
        success: false,
        message: codes['002'],
        data: null,
        code: '002',
    } 
    let session = ctx.session
    if( session && session.isLogin === true  ) {
        result.success = true
        result.message = codes['001']
        result.code = '001'
        result.data = session;
    }
    ctx.body = result;
}

module.exports = {
    login,
    logout,
    checkLog
}


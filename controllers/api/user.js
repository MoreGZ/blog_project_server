const codeMap = require("../../codes/index"); 
const services = require("../../services/api/user");

const login = async function(ctx){
    console.log("You are requesting the login controller");
    let formData = ctx.request.body;
    let response = {
        success: false,
        code: "",
        message: "",
        data: null
    }

    const result = await services.loginServices(formData);

    if(result.length){
        response.success = true;
        response.code = "001";
        response.message = codeMap["001"];
        response.data = result[0];
    }else{
        response.success = false;
        response.code = "006";
        response.message = codeMap["006"];
        response.data = result;
    }

    if(response.success){
        let session = ctx.session;
        session.isLogin = true;
        session.username = formData.username;
        session.password = formData.password;
        session.user_id = result[0].user_id;
    }

    ctx.body = response;
}

const logout = async function(ctx){
    console.log("You are requesting the logout controller");
    const result = await services.logoutService();
    let response = {
        success: false,
        message: "",
        data: null,
        code: '',
    }
    if(ctx.session){
        ctx.session = null
        response.success = true;
        response.code = "";
        response.message = codeMap["001"];
    }else{
        response.success =false;
        response.code = "012";
        response.message = codeMap["012"];
    }
    
    ctx.body = response;
}

const checkLog = async function(ctx){
    console.log("You are requesting the checkLog controller");
    const result = await services.checkLogService();
    let response = {
        success: false,
        message: "",
        data: null,
        code: '',
    } 

    let session = ctx.session

    if( session && session.isLogin === true  ) {
        response.success = true
        response.message = codeMap['001']
        response.code = '001'
        response.data = true;
    }else{
        response.success = true
        response.message = codeMap['002']
        response.code = '002'
        response.data = true;
    }

    ctx.body = response;
}

const editInformation = async function(ctx){
    console.log("You are requesting the editInformation controller");
    let formData = ctx.request.body;
    let response = {
        success: true,
        message: "",
        data: null,
        code: '',
    }
    const result = await services.editInformationService(formData);
    
    if(!result){
        response.success = false;
        response.message = codeMap['007'];
        response.code = '007';
        data: null
    }else{
        response.success = true;
        response.message = codeMap['001'];
        response.code = '001';
        code.data = null;
    }
    ctx.body = response
}

const getInformationById = async function(ctx){
    console.log("You are requesting the getInformationById controller");
    let formData = ctx.request.query;
    let response = {
        success: false,
        message: "",
        code: "",
        data: null
    }

    const result = await services.getInformationByIdService(formData);
    if(!result){
        response.message = codeMap['007'];
        response.code = '007';
        response.data = null;
    }else{
        response.success = true;
        response.message = codeMap['001'];
        response.code = '001';
        response.data = result; 
    }

    ctx.body = response;
}

const register = async function(ctx){
    console.log("You are requesting the register controller");
    let response = {
        success: false,
        message: "",
        code: "",
        data: null
    }
    let formData = ctx.request.body;
    console.log(formData);
    const result = await services.registerService(formData);
    if(result){
        response.code = "001";
        response.message = codeMap["001"];
        response.data = null;
        response.success = true;
    }else{
        response.code = "003";
        response.message = codeMap["003"];
        response.data = null;
    }

    ctx.body = response;
}

module.exports = {
    login,
    logout,
    checkLog,
    register,
    getInformationById,
    editInformation
}
const models = require("../../models/api/user");

const loginServices = async (formData) => {
    console.log("You are using the loginServices");
    const result = await models.loginModel();
    // let result = await models.loginModel({
    //     username: formData.username,
    //     password: formData.password
    // })
    
    // return result;
}

const logoutService = async (ctx) => {
    console.log("You are using the logoutService");    
    const result = await models.logouModel();
}

const checkLogService = async (ctx) => {
    console.log("You are using the checkLogService");    
    const result = await models.checkLogModel();
}

const editInformationService = async (ctx) => {
    console.log("You are using the editInformationService");    
    const result = await models.editInformatioModel();
}

const registerService = async (ctx) => {
    console.log("You are using the registerService");   
    const result = await models.registeModel(); 
}

module.exports = {
    loginServices,
    logoutService,
    checkLogService,
    editInformationService,
    registerService,
}

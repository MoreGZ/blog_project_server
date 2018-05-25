const dbUtil = require("../../utils/db_util");

let loginModel = async (params) => {
    console.log("You are using the loginModel");    
    // let sql = `
    //     select * from user 
    //     where username='${params.username}' and password='${params.password}'
    // `;
    // let result = await dbUtil.query(sql);

    // return result;
}

const logouModel = async (params) => {
    console.log("You are using the logouModel");    
}

const checkLogModel = async (params) => {
    console.log("You are using the checkLoModel");    
}

const editInformatioModel = async (params) => {
    console.log("You are using the editInformatioModel");    
}

const registeModel = async (params) => {
    console.log("You are using the registeModel");    
}

module.exports = {
    loginModel,
    logouModel,
    checkLogModel,
    editInformatioModel,
    registeModel
}
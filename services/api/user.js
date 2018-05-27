const models = require("../../models/api/user");

const loginServices = async (formData) => {
    console.log("You are using the loginServices");
    const result = await models.loginModel({
        username: formData.username,
        password: formData.password
    })
    
    return result;
}

const logoutService = async (ctx) => {
    console.log("You are using the logoutService");    
    const result = await models.logouModel();
}

const checkLogService = async (ctx) => {
    console.log("You are using the checkLogService");    
    const result = await models.checkLogModel();
}

const editInformationService = async (formData) => {
    console.log("You are using the editInformationService");    
    const result = await models.editInformatioModel({
        user_id: formData.user_id,
        name: formData.name,
        age: formData.age,
        sex: formData.sex,
        email: formData.email,
        github: formData.github,
        blog: formData.blog,
        major: formData.major,
        education: formData.education,
        college: formData.college,
        university: formData.university,
        gpa: formData.gpa,
        introduction: formData.introduction,
        zhihu: formData.zhihu
    });


    return result;
}

const getInformationByIdService = async(formData) => {
    console.log("You are using the getInformationByIdService");
    const result = await models.getInformationByIdModel({
        user_id: formData.user_id
    })
    
    if(result.length == 0){
        return null
    }else{
        return result[0];
    }
    
}

const registerService = async (params) => {
    console.log("You are using the registerService"); 
    const result = await models.registeModel({
        username: params.username,
        password: params.password
    }); 

    return result;
}

module.exports = {
    loginServices,
    logoutService,
    checkLogService,
    editInformationService,
    getInformationByIdService,
    registerService,
}

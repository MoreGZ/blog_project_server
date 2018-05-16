const apiModule = require("../models/api");


let loginServices = async (formData) => {
    let result = await apiModule.login({
        username: formData.username,
        password: formData.password
    })
    
    return result;
}

let logoutService = (ctx) => {
    
}


module.exports = {
    loginServices,
    logoutService
}
const services = require("../../services/api/classify");
const codeMap = require("../../codes/index"); 

const addClassName = async function(ctx){
    console.log("You are requesting the addClassName controller");
    const formData = ctx.request.body;
    let response = {
        success: false,
        code: "",
        message: "",
        data: null
    }
    const result = await services.addClassNameService(formData);

    if(!result){
        response.code = "009";
        response.message = codeMap["009"];
    }else{
        response.code = "001";
        response.message = codeMap["001"];
    }

    ctx.body = response
}

const removeClassName = async function(ctx){
    console.log("You are requesting the removeClassName controller");
    const formData = ctx.request.body;
    let response = {
        success: false,
        code:"",
        message: "",
        data: null
    }
    const result = await services.removeClassNameService(formData);

    if(result){
        response.success = true;
        response.code = "001";
        response.message = codeMap['001'];
        data: null
    }else{
        response.success = false;
        response.code = "010";
        response.message = codeMap['010'];
        data: null
    }

    ctx.body = response;
}

const editClassName = async function(ctx){
    console.log("Your are requesting the editClassName controller");
    const formData = ctx.request.body;
    let response = {
        success: false,
        code:"",
        message: "",
        data: null
    }
    console.log(formData);
    const result = await services.editClassNameService(formData);

    if(result){
        response.success = true;
        response.code = "001";
        response.message = codeMap['001'];
        data: null
    }else{
        response.success = false;
        response.code = "010";
        response.message = codeMap['010'];
        data: null
    }

    ctx.body = response;
}

const getClassNames = async function(ctx){
    console.log("You are requesting the editClassName controller");
    const formData = ctx.request.query;
    let response = {
        success: true,
        code: "001",
        message: codeMap["001"],
        data: null
    }
    const result = await services.getClassNamesService(formData);
    response.data = result;
    
    ctx.body = response
}

module.exports = {
    addClassName,
    removeClassName,
    editClassName,
    getClassNames,
}
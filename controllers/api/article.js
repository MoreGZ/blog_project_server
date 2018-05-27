const services = require("../../services/api/article");
const checkUtil = require("../../utils/check_util");
const codeMap = require("../../codes/index");

const getArticlesByClassify = async function(ctx){
    console.log("You are requesting the getArticlesByClassify controller")
    let session = ctx.session;
    let response = {
        success: false,
        code: "",
        message: "",
        data: null
    }
    const loginCallback = async (response, ctx) => {
        let formData = ctx.request.query;
        formData.user_id = ctx.session.user_id;
        const result = await services.getArticlesByClassifyService(formData);
        
        if(result){
            response.success = true;
            response.code = "001";
            response.message = codeMap["001"];
            response.data = result;
        }
    }

    // 检查是否已经登录
    await checkUtil.isLogin({
        session: ctx.session,
        response: response,
        ctx: ctx
    },loginCallback)

    ctx.body = response;
}

const getArticleById = async function(ctx){
    console.log("You are requesting the getArticleById controller");
    let session = ctx.session;
    let response = {
        success: false,
        code: "",
        message: "",
        data: null
    }
    const loginCallback = async (response, ctx) => {
        let formData = ctx.request.query;
        formData.user_id = ctx.session.user_id;
        const result = await services.getArticleByIdService(formData);
        
        if(result.length > 0){
            response.success = true;
            response.code = "001";
            response.message = codeMap["001"];
            response.data = result[0];
        }else{
            response.code = "014";
            response.message = codeMap["014"];
        }
    }

    // 检查是否已经登录
    await checkUtil.isLogin({
        session: ctx.session,
        response: response,
        ctx: ctx
    },loginCallback)

    ctx.body = response;
}

const getArticlesByKeyword = async function(ctx){
    console.log("You are requesting the getArticleByKeyword controller");
    let session = ctx.session;
    let response = {
        success: false,
        code: "",
        message: "",
        data: null
    }
    const loginCallback = async (response, ctx) => {
        let formData = ctx.request.query;
        formData.user_id = ctx.session.user_id;
        const result = await services.getArticlesByKeywordService(formData);
        
        if(result){
            response.success = true;
            response.code = "001";
            response.message = codeMap["001"];
            response.data = result;
        }
    }

    // 检查是否已经登录
    await checkUtil.isLogin({
        session: ctx.session,
        response: response,
        ctx: ctx
    },loginCallback)

    ctx.body = response;
}

const removeArticle = async function(ctx){
    console.log("You are requisting the removeArticle controller");
    let session = ctx.session;
    let response = {
        success: false,
        code: "",
        message: "",
        data: null
    }
    const loginCallback = async (response, ctx) => {
        let formData = ctx.request.body;
        formData.user_id = ctx.session.user_id;
        const result = await services.removeArticleService(formData);
        
        if(result){
            response.success = true;
            response.code = "001";
            response.message = codeMap["001"];
        }else{
            response.code = "011";
            response.message = codeMap["011"];
        }
    }

    // 检查是否已经登录
    await checkUtil.isLogin({
        session: ctx.session,
        response: response,
        ctx: ctx
    },loginCallback)

    ctx.body = response;
}

const addArtilce = async function(ctx){
    console.log("You are requesting the addArtilce controller");
    let session = ctx.session;
    let response = {
        success: false,
        code: "",
        message: "",
        data: null
    }
    const loginCallback = async (response, ctx) => {
        let formData = ctx.request.body;
        formData.user_id = ctx.session.user_id;
        const result = await services.addArtilceService(formData);
        
        if(result){
            response.success = true;
            response.code = "001";
            response.message = codeMap["001"];
        }else{
            response.code = "013";
            response.message = codeMap["013"];
        }
    }

    // 检查是否已经登录
    await checkUtil.isLogin({
        session: ctx.session,
        response: response,
        ctx: ctx
    },loginCallback)

    ctx.body = response;
}

const editArticle = async function(ctx){
    console.log("You are requesting the editArticle controller");
    let session = ctx.session;
    let response = {
        success: false,
        code: "",
        message: "",
        data: null
    }
    const loginCallback = async (response, ctx) => {
        let formData = ctx.request.body;
        formData.user_id = ctx.session.user_id;
        const result = await services.editArticleService(formData);
        
        if(result){
            response.success = true;
            response.code = "001";
            response.message = codeMap["001"];
        }else{
            response.code = "014";
            response.message = codeMap["014"];
        }
    }

    // 检查是否已经登录
    await checkUtil.isLogin({
        session: ctx.session,
        response: response,
        ctx: ctx
    },loginCallback)

    ctx.body = response;
}



module.exports ={
    getArticlesByClassify,
    getArticleById,
    getArticlesByKeyword,
    removeArticle,
    addArtilce,
    editArticle
}
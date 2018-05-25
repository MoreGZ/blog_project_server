const models = require("../../models/api/article");

const getArticlesByClassifyService = async function(ctx){
    console.log("You are using the getArticlesByClassifyService")
    const result = await models.getArticlesByClassifyModel();
}

const getArticleByIdService = async function(ctx){
    console.log("You are using the getArticleByIdService");
    const result = await models.getArticleByIdModel();
}

const getArticlesByKeywordService = async function(ctx){
    console.log("You are using the getArticlesByKeywordService")
    const result = await models.getArticlesByKeywordModel();
}

const removeArticleService = async function(ctx){
    console.log("You are using the removeArticleService")
    const result = await models.removeArticleModel();
}

const addArtilceService = async function(ctx){
    console.log("You are using the addArtilceService")
    const result = await models.addArtilceModel();
}

const editArticleService = async function(ctx){
    console.log("You are using the editArticleService")
    const result = await models.editArticleModel();
}


module.exports ={
    getArticlesByClassifyService,
    getArticleByIdService,
    getArticlesByKeywordService,
    removeArticleService,
    addArtilceService,
    editArticleService
}
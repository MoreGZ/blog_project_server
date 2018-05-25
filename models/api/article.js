const dbUtil = require("../../utils/db_util");

const getArticlesByClassifyModel = async function(params){
    console.log("You are using the getArticlesByClassifyModel")
}

const getArticleByIdModel = async function(params){
    console.log("You are using the getArticleByIdModel")
}

const getArticlesByKeywordModel = async function(params){
    console.log("You are using the getArticlesByKeywordModel")
}

const removeArticleModel = async function(params){
    console.log("You are using the removeArticleModel")
}

const addArtilceModel = async function(params){
    console.log("You are using the addArtilceModel")
}

const editArticleModel = async function(params){
    console.log("You are using the editArticleModel")
}


module.exports ={
    getArticlesByClassifyModel,
    getArticleByIdModel,
    getArticlesByKeywordModel,
    removeArticleModel,
    addArtilceModel,
    editArticleModel
}
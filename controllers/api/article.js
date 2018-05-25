const services = require("../../services/api/article");

const getArticlesByClassify = async function(ctx){
    console.log("You are requesting the getArticlesByClassify controller")
    const result = await services.getArticlesByClassifyService();
}

const getArticleById = async function(ctx){
    console.log("You are requesting the getArticleById controller");
    const result = await services.getArticleByIdService();
}

const getArticlesByKeyword = async function(ctx){
    console.log("You are requesting the getArticleByKeyword controller");
    const result = await services.getArticlesByKeywordService();
}

const removeArticle = async function(ctx){
    console.log("You are requisting the removeArticle controller");
    const result = await services.removeArticleService();
}

const addArtilce = async function(ctx){
    console.log("You are requesting the addArtilce controller");
    const result = await services.addArtilceService();
}

const editArticle = async function(ctx){
    console.log("You are requesting the editArticle controller");
    const result = await services.editArticleService();
}



module.exports ={
    getArticlesByClassify,
    getArticleById,
    getArticlesByKeyword,
    removeArticle,
    addArtilce,
    editArticle
}
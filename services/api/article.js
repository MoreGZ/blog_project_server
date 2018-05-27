const models = require("../../models/api/article");

const getArticlesByClassifyService = async function(formData){
    console.log("You are using the getArticlesByClassifyService")
    const result = await models.getArticlesByClassifyModel({
        user_id: formData.user_id,
        class_name: formData.class_name
    });

    return result;
}

const getArticleByIdService = async function(formData){
    console.log("You are using the getArticleByIdService");
    const result = await models.getArticleByIdModel({
        user_id: formData.user_id,
        article_id: formData.article_id
    });

    return result;
}

const getArticlesByKeywordService = async function(formData){
    console.log("You are using the getArticlesByKeywordService")
    console.log(formData);
    const result = await models.getArticlesByKeywordModel({
        user_id: formData.user_id,
        keyword: formData.keyword
    });

    return result;
}

const removeArticleService = async function(formData){
    console.log("You are using the removeArticleService")
    const result = await models.removeArticleModel({
        user_id: formData.user_id,
        article_id: formData.article_id
    });

    if(result.affectedRows == 0){
        result = null
    }

    return result;
}

const addArtilceService = async function(formData){
    console.log("You are using the addArtilceService")
    let result = await models.addArtilceModel({
        user_id: formData.user_id,
        title: formData.title,
        content: formData.content,
        classification: formData.classification,
        cover_img: formData.cover_img
    });

    if(result.affectedRows == 0){
        result = null
    }

    return result;
}

const editArticleService = async function(formData){
    console.log("You are using the editArticleService")
    let result = await models.editArticleModel({
        user_id: formData.user_id,
        article_id: formData.article_id,
        title: formData.title,
        content: formData.content,
        classification: formData.classification,
        cover_img: formData.cover_img
    });

    if(result.affectedRows == 0){
        result = null
    }

    return result;
}


module.exports ={
    getArticlesByClassifyService,
    getArticleByIdService,
    getArticlesByKeywordService,
    removeArticleService,
    addArtilceService,
    editArticleService
}
const dbUtil = require("../../utils/db_util");

const getArticlesByClassifyModel = async function(params){
    console.log("You are using the getArticlesByClassifyModel")
    let sql = `
        select * from article
        where user_id=${params.user_id} and classification='${params.class_name}'
    `;
    const result = await dbUtil.query(sql);

    return result;
}

const getArticleByIdModel = async function(params){
    console.log("You are using the getArticleByIdModel")
    let sql = `
        select * from article
        where user_id=${params.user_id} and article_id='${params.article_id}'
    `;
    const result = await dbUtil.query(sql);
    
    return result;
}

const getArticlesByKeywordModel = async function(params){
    console.log("You are using the getArticlesByKeywordModel")
    let sql = `
        select * from article
        where user_id='${params.user_id}' and (content LIKE '%${params.keyword}%' or title LIKE '%${params.keyword}%')
    `
    const result = await dbUtil.query(sql);

    return result;
}

const removeArticleModel = async function(params){
    console.log("You are using the removeArticleModel")
    let sql = `
        delete from article
        where user_id=${params.user_id} and article_id=${params.article_id}
    `
    let result = await dbUtil.query(sql);

    return result;
}

const addArtilceModel = async function(params){
    console.log("You are using the addArtilceModel")
    let currentTime = (new Date()).getTime();
    let sql =`
        insert into article 
        (user_id,title,create_time,update_time,content,classification,cover_img)
        values
        (${params.user_id},'${params.title}','${currentTime}','${currentTime}','${params.content}','${params.classification}','${params.cover_img}')
    `
    let result = await dbUtil.query(sql);

    return result;
}

const editArticleModel = async function(params){
    console.log("You are using the editArticleModel")
    let currentTime = (new Date()).getTime();
    let sql = `
        UPDATE article 
        SET title='${params.title}',
            content='${params.content}',
            classification='${params.classification}',
            cover_img='${params.cover_img}',
            update_time='${currentTime}'
        WHERE user_id=${params.user_id} and article_id=${params.article_id}
    `
    let result = await dbUtil.query(sql);

    return result;
}

module.exports ={
    getArticlesByClassifyModel,
    getArticleByIdModel,
    getArticlesByKeywordModel,
    removeArticleModel,
    addArtilceModel,
    editArticleModel
}
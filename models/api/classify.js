const dbUtil = require("../../utils/db_util");

const addClassNameModel = async function(params){
    console.log("You are using the addClassNameModel");
    let sql = `
        select * from class
        where user_id=${params.user_id} and class_name='${params.class_name}'
    `
    let result = await dbUtil.query(sql);
    if(result.length){
        result = null
    }else{
        sql = `
            insert into class
            (user_id,class_name)
            values
            (${params.user_id},'${params.class_name}')
        `
        result = await dbUtil.query(sql);
    }

    return result;
}

const removeClassNameModel = async function(params){
    console.log("You are using the removeClassNameModel");
    let sql = `
        delete from class
        where user_id=${params.user_id} and class_name='${params.class_name}'
    `
    let result = dbUtil.query(sql);

    return result;
}

const editClassNameModel = async function(params){
    console.log("You are using the editClassNameModel");
    console.log(params);
    let sql = `
        UPDATE class 
        SET class_name='${params.class_name}' 
        WHERE class_id=${params.class_id}
    `
    let result = dbUtil.query(sql);

    return result;
}

const getClassNamesModel = async function(params){
    console.log("You are using the getClassNamesModel");
    let sql = `
        select * from class
        where user_id=${params.user_id}
    `
    let result = dbUtil.query(sql);

    return result;
}

module.exports = {
    addClassNameModel,
    removeClassNameModel,
    editClassNameModel,
    getClassNamesModel,
}
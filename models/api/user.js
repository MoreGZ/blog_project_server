const dbUtil = require("../../utils/db_util");

let loginModel = async (params) => {
    console.log("You are using the loginModel");
    console.log(params);    
    let sql = `
        select * from user 
        where username='${params.username}' and password=md5('${params.password}')
    `;
    let result = await dbUtil.query(sql);

    return result;
}

const logouModel = async (params) => {
    console.log("You are using the logouModel");    
}

const checkLogModel = async (params) => {
    console.log("You are using the checkLoModel");    
}

const editInformatioModel = async (params) => {
    console.log("You are using the editInformatioModel");
    let checkUserSql = `
        select * from user
        where user_id='${params.user_id}'
    `;
    let result = await dbUtil.query(checkUserSql);
    if(result.length === 0){
        console.log("用户不存在");
        result = null;
    }else{
        let editInformationSql = `
            insert into info
            (user_id,name,age,sex,email,github,blog,major,education,college,university,gpa,introduction,zhihu)
            values
            (
                ${params.user_id},
                '${params.name}',
                ${params.age},
                '${params.sex}',
                '${params.email}',
                '${params.github}',
                '${params.blog}',
                '${params.major}',
                '${params.education}',
                '${params.college}',
                '${params.university}',
                ${params.gpa},
                '${params.introduction}',
                '${params.zhihu}'
            )
        `;
        result = await dbUtil.query(editInformationSql); 
    }
    return result;
}

const getInformationByIdModel = async (params) => {
    console.log("You are using the getInformationByIdModel");
    let id = parseInt(params.user_id);
    const getInfoSql = `
        select * from info
        where user_id=${id}
        ORDER BY info_id DESC
    `;

    const result = await dbUtil.query(getInfoSql);

    return result;
}

const registeModel = async (params) => {
    console.log("You are using the registeModel");
    let checkIfUsernameExitSql = `
        select username from user
        where username='${params.username}' 
    `;
    let checkResult = await dbUtil.query(checkIfUsernameExitSql);

    // 不存在当前的username,可以进行注册
    if(checkResult.length <= 0){
        const registerSql = `
            insert into user
            (username, password)
            values
            ('${params.username}',md5('${params.password}'))
        `;
        let registerResult = await dbUtil.query(registerSql);

        const insertId = registerResult.insertId;
        const CreateInfoSql = `
            insert into info
            (user_id)
            values
            ('${insertId}')
        `;
        registerResult = await dbUtil.query(CreateInfoSql);

        return registerResult
    }else{
        return null;
    }
}

module.exports = {
    loginModel,
    logouModel,
    checkLogModel,
    editInformatioModel,
    getInformationByIdModel,
    registeModel
}
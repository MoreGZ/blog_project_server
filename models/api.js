const dbUtil = require("../utils/db_util");

let login = async (params) => {
    let sql = `
        select * from user 
        where username='${params.username}' and password='${params.password}'
    `;
    let result = await dbUtil.query(sql);

    return result;
}

module.exports = {
    login
}
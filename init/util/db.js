const mysql = require("mysql");
const dbConfig = require("./../../config/index").dbConfig;

let pool = mysql.createPool({
    host: dbConfig.host,
    user: dbConfig.user,
    database: dbConfig.database,
    password: dbConfig.password
})

let query = (sql) => {
    return new Promise(function(resolve,reject){
        pool.getConnection(function(err,connection){
            if(err){
                reject(err)
            }else{
                connection.query(sql,function(err,rows){
                    if(err){
                        reject(err);
                    }else{
                        resolve(rows);
                    }
                })
            }
        })
    })
}

module.exports = {
    query
}
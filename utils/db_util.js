const mysql = require("mysql");
const dbConfig = require("../config/index").dbConfig;


let pool = mysql.createPool({
    host:dbConfig.host,
    password:dbConfig.password,
    user:dbConfig.user,
    database:dbConfig.database,
})

let query = (sql, params) => {
    return new Promise(function(resolve,reject){
        pool.getConnection(function(err, connection){
            if(err){
                reject(err)
            }else{
                connection.query(sql, params, function(err, rows){
                    if(err){
                        reject(err);
                    }else{
                        resolve(rows);
                    }
                    connection.release();
                })
            }
        })
    })
}
module.exports = {
    query
}
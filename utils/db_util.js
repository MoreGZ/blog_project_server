const mysql = require("mysql");
const dbConfig = require("../config/index").dbConfig;

const pool = mysql.createPool({
    host:dbConfig.host,
    password:dbConfig.password,
    user:dbConfig.user,
    database:dbConfig.database,
})

const query = (sql, params) => {
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
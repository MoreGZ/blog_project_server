let getSqlContentMap = require("./util/get_sql_content_map");
let db = require("./util/db");

let initDatabase = function(){
    let sqlContentMap = getSqlContentMap();
    for(let key in sqlContentMap){
        let contents = sqlContentMap[key].split(";");
        for(let contentKey in contents){
            let sql = contents[contentKey].trim();
            if(sql){
                db.query(sql)
                .then(function(rows){
                    console.log(rows);
                })
                .catch(function(err){
                    throw(err);
                })
            }
        }
    }
}

initDatabase();
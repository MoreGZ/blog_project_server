const fs = require("fs");
const path = require("path");

let getSqlFileMap = function(){
    let fileMap = fs.readdirSync(path.join(__dirname,"../","sql"));
    let sqlFileMap = [];
    fileMap.forEach((item) => {
        if(path.extname(item) === ".sql"){
            sqlFileMap.push(path.join(__dirname,"../","sql",item));
        }
    })

    return sqlFileMap;
}

module.exports = getSqlFileMap;


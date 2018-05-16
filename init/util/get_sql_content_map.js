const fs = require("fs");
const path = require("path");

let getSqlFileMap = require("./get_sql_file_map");



let getSqlContentMap = function(){
    let sqlFileMap = getSqlFileMap(),
        contentMap = {};
    sqlFileMap.forEach((filePath) => {
        let key = path.basename(filePath).split(".")[0];
        contentMap[key] = fs.readFileSync(filePath, 'binary');
    })

    return contentMap
}

module.exports = getSqlContentMap;

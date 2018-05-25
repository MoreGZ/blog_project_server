const models = require("../../models/api/classify");

const addClassNameService = async function(ctx){
    console.log("You are using the addClassNameService");
    const result = await models.addClassNameModel();
}

const removeClassNameService = async function(ctx){
    console.log("You are using the removeClassNameService");
    const result = await models.removeClassNameModel();
}

const editClassNameService = async function(ctx){
    console.log("You are using the editClassNameService");
    const result = await models.editClassNameModel();
}

const getClassNamesService = async function(ctx){
    console.log("You are using the getClassNamesService");
    const result = await models.getClassNamesModel();
}

module.exports = {
    addClassNameService,
    removeClassNameService,
    editClassNameService,
    getClassNamesService,
}
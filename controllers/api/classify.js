const services = require("../../services/api/classify");


const addClassName = async function(ctx){
    console.log("You are requesting the addClassName controller");
    const result = await services.addClassNameService();
}

const removeClassName = async function(ctx){
    console.log("You are requesting the removeClassName controller");
    const result = await services.removeClassNameService();
}

const editClassName = async function(ctx){
    console.log("Your are requesting the editClassName controller");
    const result = await services.editClassNameService();
}

const getClassNames = async function(ctx){
    console.log("You are requesting the editClassName controller");
    const result = await services.getClassNamesService();
}

module.exports = {
    addClassName,
    removeClassName,
    editClassName,
    getClassNames,
}
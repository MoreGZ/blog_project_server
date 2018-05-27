const models = require("../../models/api/classify");

const addClassNameService = async function(formData){
    console.log("You are using the addClassNameService");
    const result = await models.addClassNameModel({
        user_id: formData.user_id,
        class_name: formData.class_name
    });

    return result;
}

const removeClassNameService = async function(formData){
    console.log("You are using the removeClassNameService");
    let result = await models.removeClassNameModel({
        user_id: formData.user_id,
        class_name: formData.class_name
    });

    if(result.affectedRows == 0){
        result = null;
    }

    return result;
}

const editClassNameService = async function(formData){
    console.log("You are using the editClassNameService");
    const result = await models.editClassNameModel({
        class_id: formData.class_id,
        class_name: formData.class_name
    });

    if(result.affectedRows == 0){
        result = null;
    }

    return result;
}

const getClassNamesService = async function(formData){
    console.log("You are using the getClassNamesService");
    const result = await models.getClassNamesModel({
        user_id: formData.user_id
    });

    return result
}

module.exports = {
    addClassNameService,
    removeClassNameService,
    editClassNameService,
    getClassNamesService,
}
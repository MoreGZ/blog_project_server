const userControllers = require("./user");
const articleControllers = require("./article");
const classifyControllers = require("./classify");

module.exports = {
    login: userControllers.login,
    logout: userControllers.logout,
    checkLog: userControllers.checkLog,
    editInformation: userControllers.editInformation,
    getInformationById: userControllers.getInformationById,
    register: userControllers.register,

    getArticlesByClassify: articleControllers.getArticlesByClassify,
    getArticleById: articleControllers.getArticleById,
    getArticlesByKeyword: articleControllers.getArticlesByKeyword,
    removeArticle: articleControllers.removeArticle,
    addArtilce: articleControllers.addArtilce,
    editArticle: articleControllers.editArticle,

    addClassName: classifyControllers.addClassName,
    removeClassName: classifyControllers.removeClassName,
    editClassName: classifyControllers.editClassName,
    getClassNames: classifyControllers.getClassNames,
}

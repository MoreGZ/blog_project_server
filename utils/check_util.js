const codeMap = require("../codes/index");

const isLogin =  async function() {
    // 设置默认值
    let params = arguments[0] ? arguments[0] : null;
    let successCallback = arguments[1] ? arguments[1] : () => {};
    let failCallback = arguments[2] ? arguments[2] : (response, ctx) => {
        response.code = "002";
        response.message = codeMap['002'];
    }
    if(params.session && params.session.isLogin){
        await successCallback(params.response, params.ctx);
    }else{
        failCallback(params.response, params.ctx);
        
    }
}

module.exports = {
    isLogin
}
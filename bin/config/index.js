// config/index.js
/**
 * @alias module:config/index.js
 * @author liaochengyong
 * @descripttion Server-side config file
 * @date 2023/05/18
 * */
module.exports = {
  promptTypeList: [
    {
      type: "list",
      message: "请选择对应拉取的模板类型",
      name: "type",
      choices: [
        {
          name: "react",
          value: {
            url: "https://github.com/llabbss/fullStack.git",
            gitName: "react-web-tempalte",
            val: "react模板"
          }
        },
        {
          name: "vue",
          value: {
            url: "https://github.com/llabbss/vue-web-template.git",
            gitName: "vue-web-template",
            val: "vue模板"
          }
        },
        {
          name: "CMS",
          value: {
            url: "https://github.com/llabbss/lin-cms-koa.git",
            gitName: "CMS-backend",
            val: "cms后台模板"
          }
        },
        {
          name: "ssl",
          value: {
            url: "openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem",
            gitName: "openssl-pem",
            val: "ssl证书生成"
          }
        }
      ]
    }
  ]
};

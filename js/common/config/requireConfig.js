//requireJS配置文件
require.config({
    //这里的baseUrl会自动补全后面的/
    baseUrl: "../js/",

    //配置不兼容的模块，如jquery插件
    shim: {
        'jqmask': ['jquery'],
        'jquery.formItem': ['jquery']
    },

    //路径映射
    paths: {
        //通用插件
        "handlebars": "lib/handlebars",
        "uploader": 'lib/imgUploader/handlers',

        //业务通用模块
        "base": "common/base",
        "io": "common/cpt/io",

        //jquery插件
        "jquery": 'lib/jq/jquery-2.1.4.min',
        "jqmask": 'lib/jq/jquery.mask',
        "formItem": 'lib/jq/jquery.formItem'
    }
});

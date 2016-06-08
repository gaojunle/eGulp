/**
 * @author  jinlong on 2015/11/18
 *
 * @descript 通用的requirejs配置文件
 * @version 1.0
 * @example:
 */
require.config({
    baseUrl: 'http://static.liangyi.com',
    paths: {
        'fastclick': 'js/mobile/common/fastclick',
        'template7': 'js/mobile/common/template7',

        /*以下为了兼容PC版代码而定义的文件*/
        "handlebars": "module/handlebars/handlebars",
        "Dialog": "module/artDialog/artdialog",
        'Slider': 'module/switchable',
        "swfUpload": 'module/imgUploader/swfupload',
        "uploader": 'module/imgUploader/handlers',
        "mask": 'js/common/cpt/mask',
        "Panel": "js/widget/panel",
        "Ly": "js/widget/ly",
        "base": "js/common/base",
        "io": "js/common/cpt/io"
    }
});
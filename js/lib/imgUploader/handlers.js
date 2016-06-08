define(['swfUpload'], function () {

    var obj = {};
    var UPLOADING = "";
    var UPLOADINGFAIL = "";
    var UPLOADBUTTON = "";

    function fileDialogComplete(numFilesSelected, numFilesQueued) {
        if (numFilesSelected > 0) {
            this.startUpload();
        }
    }


    function uploadComplete(file) {
        if (this.getStats().files_queued > 0) {
            this.startUpload();
        }
    }

    function handlerControl(editorId) {

        this.editorId = editorId;

        this.getEditor = function () {
            return Wenda.Editor.get(this.editorId).editor;
        },
            this.getLoadingImg = function (id) {
                var editor = this.getEditor();
                if (id) {
                    return editor.iframe.contentWindow.document.getElementById(id);
                }
                return null;
            },
            this.insert = function (id) {
                $("#editorwraper").show();
                var editor = this.getEditor();
                editor.execCommand('insertHTML', '<p><img  id="' + id + '" src="' + UPLOADING + '" /></p>');
            },
            this.changeLoadingImg = function (id, elText) {
                var imgNode = this.getLoadingImg(id);
                $(imgNode).parent().html(elText);
            },
            this.failed = function (id) {
                var imgNode = this.getLoadingImg(id);
                imgNode.html('<img class="errorMsg_shouldbe_removed" src="' + UPLOADINGFAIL + '"/>');
            },
            this.finish = function (id, data) {
                var upingimg = this.getLoadingImg(id);
                if (!upingimg) {
                    return;
                }
                if (data.errno == 0) {
                    var editor = this.getEditor();
                    this.changeLoadingImg(id, "<img src='" + data.data.url + "'/>");
                    editor.adjustHeight && editor.adjustHeight(true);
                } else {
                    this.failed(id);
                }
            }
    }

    function flashUploader(opt) {
        var handler = new handlerControl(opt.id);
        var config = {
            upload_url: "/submit/uploadimg/",
            file_size_limit: "5 MB",
            file_types: "*.jpg;*.png;*.gif",
            file_types_description: "图片文件",
            file_upload_limit: 0,
            file_post_name: 'picdata',
            file_queued_handler: function (file) {
                //handler.insert(file.id);
            },
            file_dialog_complete_handler: fileDialogComplete,
            upload_success_handler: function (file, data) {
                data = data.evalExp();
                //handler.finish(file.id, data);
            },
            file_queue_error_handler: function (file, errorNumber) {
                if (errorNumber == -110) {
                    alert('请不要上传超过5MB的图片');
                }
                ;
            },
            upload_complete_handler: uploadComplete,
            button_image_url: UPLOADBUTTON,
            button_placeholder_id: "upLoaderButton",
            button_width: 50,
            button_height: 20,
            button_text_top_padding: 0,
            button_text_left_padding: 18,
            button_window_mode: SWFUpload.WINDOW_MODE.TRANSPARENT,
            button_cursor: SWFUpload.CURSOR.HAND,
            flash_url: "/swf/swfupload.swf",
            custom_settings: {},
            debug: false
        }

        opt && $.ObjectH.mix(config, opt, true);
        return new SWFUpload(config);
    };

    return {

        initUploader: flashUploader

    }
});

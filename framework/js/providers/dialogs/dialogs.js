/**
 * Created by admin on 2017/1/19.
 */
//infrastructure/providers/dialogs/spinnerDialog.js
/**
 * @require ngDialog.js
 */

angular.module('h5_angularjs').factory("Dialogs", ["$log", "ngDialog",
    function($log, ngDialog) {
        return {
            /**
             * show spinner dialog.
             * @param  {string} bodyHtml you'd better pass normal text here.
             */
            showSpinner: function(tipTxt, config) {
                tipTxt = tipTxt || "加载中";
                config = config || {closeButton:true};
                // default timeout 2 minus.
                var timeout = config.timeout || 1000 * 60 * 2;
                var isModal = config.isModal || false;
                //allow do something while spinner was dispear.
                var preCloseCallback = config.preCloseCallback;
                // open alert dialog
                var btnTemplate = '<div class="body-inner" touch-scrolling>\
                        <div class="modal-body ngdialog-message">\
                            <div class="loading-wrapper">\
                                <div class="loading">\
                                    <div class="logo"></div>\
                                </div>\
                                <div class="btn-close-spinner" btn-close-spinner>\
                                    <div class="spinner-close"></div>\
                                </div>\
                            </div>\
                        </div>\
                    </div>';
                var template = '<div class="body-inner" touch-scrolling>\
                        <div class="modal-body ngdialog-message">\
                            <div class="loading-wrapper">\
                                <div class="loading">\
                                    <div class="logo"></div>\
                                </div>\
                            </div>\
                        </div>\
                    </div>';
                var dialogData = ngDialog.open({
                    template: config.closeButton ==true ? btnTemplate : template,
                    plain: true,
                    showClose: false,
                    overlay:false, //是否显示遮罩层
                    preCloseCallback: preCloseCallback,
                    closeByDocument: isModal,
                    className: config.closeButton == true ? "theme-default spinner spinner-btn" : "theme-default spinner spinner-auto",
                    dialogType: 'spinner'
                });
                // timeout disapear
                setTimeout(this.close, timeout);

                return dialogData;
            },
            /**
             * close spinner dialog.
             * @param  {string} id  required,basicallty the dialog id is required, we can get this id from invoke showSpinner().
             * ;if you have multi dialog show, and invoke dialog.close() without dialogid, maybe you will encounter with some dialog can't be close.
             *
             * e.g. first show spinner, and then invoke closeSpinner(), cause of close dialog is $timeout invoke, and then show dialog.alert(), it will result in
             *
             * the alert dialog can't be closed, the best solution is indicates the dialogid each time.
             *
             * @param  {number} timeout optional
             */
            closeSpinner: function(id, timeout) {
                this.close(id, {
                    timeout: timeout || 200
                });
            }
        };
    }
]);

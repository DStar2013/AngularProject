/**
 * Created by dream on 17/1/3.
 */

// 应用层面基础文件的合并，推荐包括目录下（config、filter、 provider）文件，可根据自己项目定制化
/*
 * config
 */
/*app/js/configs/constants.js*/
/**
 * Created by dream on 17/1/3.
 */
// all regex rules const definition
// --------------------------------------------------------------------------
app.constant("regexRuleConst", {
    "postcode": /^[1-9][0-9]{5}$/, //邮政编码
    "idcard": /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, //身份证号码验证表达式
    "chCode": /[^\u4e00-\u9fa5\s+]/ig, //所有字符必须为中文字符
    "enCode": /^[a-zA-Z\s]+$/, // 所有的英文字符
    "mobile": /^1[3-8][0-9]\d{8}$/, //验证手机号码/^1[3|4|5|8][0-9]\d{4,8}$/
    "empty": /^\s+|\s+$/ig, // 移除字符串空字符串
    "url": /^https?:\/\//,
    "captchaInput": /^.{4}$/, //TOP 图片验证码的验证表达式
    "otpInput": /^\d{6}$/
});

;
/*app/js/configs/config.js*/
/**
 * Created by dream on 17/1/3.
 */
(function(app) {
    // While preparing the build please make sure you hanve done below steps.

    // defined app configurations in factory.
    app.factory("appConfig", [
        function() {
            var appConfig = {

            };
            return appConfig;
        }]);

})(app);;
/*app/js/configs/router.js*/
/**
 * Created by dream on 17/1/3.
 */

//app/scripts/configs/router.js
// @require app/js/configs/config.js

(function() {
    //
    // configuring our routes
    // ----------------------------------------------------------------------------------------------------
    app.config(['$httpProvider', "$stateProvider", "$urlRouterProvider", "$logProvider", "$sceDelegateProvider",
        function($httpProvider, $stateProvider, $urlRouterProvider, $logProvider, $sceDelegateProvider) {
            // allow cross cookie, it seems that we need to set withCredentials in global for all $http request.
            // we can't use $http(config) pass parameter "withCredentials", maybe there is bug existed in angularjs 1.3.8
            // 设置跨域请求withCredentials请求头
            // 当请求静态资源设置：withCredentials = false
            // 当请求后台服务接口设置：withCredentials = true 这个逻辑定义在httpRequest.js内
            $httpProvider.defaults.withCredentials = false;

            // sce resource white list.
            $sceDelegateProvider.resourceUrlWhitelist(['self', 'http*://**']);
            // about angular ui router URL Routing wiki.
            // https://github.com/angular-ui/ui-router/wiki/URL-Routing
            $stateProvider
                .state('index', {
                    url: '/index',
                    templateUrl: 'appViews/index.html'
                });
            //list 列表页类目
            $stateProvider
                .state('list', {
                    url: '/list',
                    templateUrl: '../app/views/list.html'
                });

            //默认路由进入欢迎页面
            $urlRouterProvider.otherwise('/index');
        }
    ]);
})();

// 配置页面模板缓存
// 建议：根据项目需要，入口页面模板使用配置该方案，其他非入口页面还是通过ajax异步请求页面模板
app.run(['$templateCache', function($templateCache) {
    $templateCache.put("appViews/index.html",
        "<div class=\"index-page\" ng-controller=\"IndexCtrl\" >\r\n    <div class=\"container\">\r\n        <div class=\"head-pic\">\r\n            <img ng-src=\"{{headPicUrl}}\" alt=\"monkey\" ng-click=\"goNextPage()\">\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!--<script type=\"text/javascript\" src=\"../js/controllers/indexCtrl.js\"></script>-->");
}]);




;

/*
 * filter
 */
//

/*
 * providers
 */

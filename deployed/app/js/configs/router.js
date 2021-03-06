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
            //UI组件页面
            $stateProvider
                .state('uicontrols', {
                    abstract: true,
                    url: '/uicontrols',
                    template: "<div class='inner' ui-view></div>"
                })
                .state('uicontrols.list', {
                    url: '/list',
                    templateUrl: '../app/views/uicontrols/uicontrolsList.html'
                })
                .state('uicontrols.borders', {
                    url: '/borders',
                    templateUrl: '../app/views/uicontrols/borders/borderPage.html'
                })
                .state('uicontrols.dialogs', {
                    url: '/dialogs',
                    templateUrl: '../app/views/uicontrols/dialogs/dialogsPage.html'
                });

            //account账户相关
            $stateProvider
                .state('account', {
                    abstract: true,
                    url: '/account',
                    template: "<div class='inner' ui-view></div>"
                })
                .state('account.index', {
                    url: '/index',
                    templateUrl: '../app/views/account/accountIndex.html'
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
        "<div class=\"index-page\" ng-controller=\"IndexCtrl\" >\n    <div class=\"container\">\n        <div class=\"head-pic\">\n            <img ng-src=\"{{headPicUrl}}\" alt=\"monkey\" ng-click=\"goNextPage()\">\n        </div>\n    </div>\n</div>\n\n<!--<script type=\"text/javascript\" src=\"../js/controllers/indexCtrl.js\"></script>-->");
}]);





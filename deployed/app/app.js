/**
 * Created by admin on 2017/1/12.
 */


//pagejs
/**
 * Created by dream on 17/1/3.
 */
angular.module('angular_app_sxj').controller("IndexCtrl", ["$rootScope",  "$scope", "$log", "$state",
    function($rootScope, $scope, $log, $state) {

        //初始页面头像
        $scope.headPicUrl = "../app/images/monkey.jpg";

        //
        $scope.goNextPage = function() {
            $state.go("list");
        }

    }
]);
; //入口欢迎页面
/**
 * Created by admin on 2017/1/16.
 */
angular.module('angular_app_sxj').controller("ListCtrl", ["$rootScope",  "$scope", "$log", "$state",
    function($rootScope, $scope, $log, $state) {

        //定义
        $scope.assemblyPicUrl = "../app/images/listIcon/star.png";
        $scope.accountUrl = "../app/images/listIcon/account.png";
        $scope.jjsongUrl = "../app/images/listIcon/jjsong.png";

        $scope.goNextPage = function(url) {
            $state.go(url);
        }

        //


    }
]);
; //列表页


//uicontrols js文件
/**
 * Created by admin on 2017/1/17.
 */
angular.module('angular_app_sxj').controller("uicontrolsListCtrl", ["$rootScope",  "$scope", "$log", "$state", "uicontrolsListConst",
    function($rootScope, $scope, $log, $state, uicontrolsListConst) {

        //定义
        $scope.arrowPicUrl = "../app/images/uicontrols/i-arrow.png";

        //
        $scope.cList = uicontrolsListConst;

        //
        $scope.goNextPage = function(url){
            $state.go(url);
        }
    }
]);; //组件列表页
/**
 * Created by admin on 2017/1/19.
 */
angular.module('angular_app_sxj').controller("dialogsPageCtrl", ["$rootScope",  "$scope", "$log", "$state",
    function($rootScope, $scope, $log, $state) {

        //定义


    }
]);; //dialogs组件


//account js文件
/**
 * Created by admin on 2017/1/19.
 */
angular.module('angular_app_sxj').controller("accountIndexCtrl", ["$rootScope",  "$scope", "$log", "$state",
    function($rootScope, $scope, $log, $state) {

        //定义


    }
]);; //账户等级首页


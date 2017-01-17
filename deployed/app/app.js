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



    }
]);
; //列表页
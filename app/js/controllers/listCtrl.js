/**
 * Created by admin on 2017/1/16.
 */
angular.module('angular_app_sxj').controller("ListCtrl", ["$rootScope",  "$scope", "$log", "$state",
    function($rootScope, $scope, $log, $state) {

        //定义
        $scope.assemblyPicUrl = __uri("../../images/listIcon/star.png");
        $scope.accountUrl = __uri("../../images/listIcon/account.png");
        $scope.jjsongUrl = __uri("../../images/listIcon/jjsong.png");

        $scope.goNextPage = function(url) {
            $state.go(url);
        }

        //


    }
]);

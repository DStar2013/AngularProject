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

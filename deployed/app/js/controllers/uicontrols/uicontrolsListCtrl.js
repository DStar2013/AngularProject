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
]);
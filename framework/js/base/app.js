/**
 * Created by dream on 17/1/5.
 */
/**
 * @ngdoc overview
 * Depandancy: AngularJS v1.3.10 has tested in angularjs 1.3.8
 * @name h5_angularjs, we should not change this name.
 * @description
 *
 * Main module of the application.
 */
var app = angular.module('h5_angularjs', [
    "ui.router", // 路由模块
    "oc.lazyLoad",
    "ngTouch",
    "ui.router.requirePolyfill", // 按需加载模块
    "ngDialog"
])

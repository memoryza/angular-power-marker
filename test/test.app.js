/**
 * Created by Sun on 15/8/23.
 */



(function () {


var app = angular.module('test',
    [
        'angular-power-marker'

    ]);


    app.controller('TestCtrl', [
        '$scope',

        function ($scope) {

            $scope.value = ""



        }]);


}).call(this);
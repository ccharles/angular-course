(function() {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchString = '';
    $scope.lunchJudgement = '';

    $scope.judgeLunch = function () {
      var trimmedLunchString = $scope.lunchString.trim();

      if (trimmedLunchString.length == 0) {
        $scope.lunchJudgement = 'Please enter data first';
        return;
      }

      var lunchItems = trimmedLunchString.split(',');

      if (lunchItems.length <= 3) {
        $scope.lunchJudgement = 'Enjoy!';
      } else {
        $scope.lunchJudgement = 'Too much!';
      }
    };
  }
})();

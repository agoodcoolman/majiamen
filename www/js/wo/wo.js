/**
 * Created by jin on 2017/7/22.
 */
angular.module('mjm.tab.wo', [])
.controller('woCtrl', function ($scope, $state, $ionicHistory) {

    $scope.wo = {
      UID:localStorage.getItem('UID'),
      portrait:localStorage.getItem('portrait'),
      level:localStorage.getItem('level'),
      signature:localStorage.getItem('signature')
    }

    console.info('UID', $scope.wo.UID);
    console.info('portrait', $scope.wo.portrait);
    console.info('signature', $scope.wo.signature);
    console.info('level', $scope.wo.level);

    /*
     登陆出去
     */
    $scope.loginout = function () {
      window.cookies.clear(function() {
        console.log('Cookies cleared!');
      });

      $state.go('login')
      $ionicHistory.clearHistory();
      $ionicHistory.clearCache();
    }
})

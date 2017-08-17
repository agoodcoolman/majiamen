/**
 * Created by jin on 2017/7/22.
 */
angular.module('mjm.tab.wo', [])
.controller('woCtrl', function ($scope) {

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

})

/**
 * Created by jin on 2017/7/22.
 */
angular.module('mjm.tab.your', [])
  .controller('yourCtrl', function ($scope, $Storage) {
      $scope.ok = 'hao';

      $scope.first = function () {
        $Storage.save("ri", 'ok');
        alert("ok");
      }

      $scope.second = function () {
        var ri = $Storage.get("ri");
        alert(ri);
      }
  })

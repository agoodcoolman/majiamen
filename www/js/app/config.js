/**
 * Created by jin on 2017/7/22.
 */
angular.module('mjm.config', [])
.config(function ($ionicConfigProvider, $httpProvider ) {
  $ionicConfigProvider.platform.ios.tabs.style('standard');
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('standard');

  $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
  $ionicConfigProvider.platform.android.navBar.alignTitle('center');

  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

  $ionicConfigProvider.platform.ios.views.transition('ios');
  $ionicConfigProvider.platform.android.views.transition('android');


  $httpProvider.defaults.withCredentials = true;

  $httpProvider.interceptors.push(function ($q) {
    return {
      // 可选，拦截成功的请求
      request: function(config) {
        // 进行预处理
        var l = window.sessionStorage.length;

        return config || $q.when(config);
      },

      // 可选，拦截失败的请求
      requestError: function(rejection) {
        // 对失败的请求进行处理
        // ...
        if (canRecover(rejection)) {
          return responseOrNewPromise
        }
        return $q.reject(rejection);
      },



      // 可选，拦截成功的响应
      response: function(response) {
        // 进行预处理
        // ....
        return response || $q.when(reponse);
      },

      // 可选，拦截失败的响应
      responseError: function(rejection) {
        // 对失败的响应进行处理
        // ...
        if (canRecover(rejection)) {
          return responseOrNewPromise
        }
        return $q.reject(rejection);
      }
    };
  })
})
  .constant('ENV', {
    "webUrl":"http://www.majiamen.com/",
    "login":"login.php?"
  })

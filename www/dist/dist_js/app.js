// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
  'ionic',
  'starter.controllers',
  'mjm.login',
  'mjm.router',
  'mjm.config',
  'mjm.loginService',
  'mjm.tab.wo',
  'mjm.tab.your',
  'mjm.tab.it',
  'mjm.storageService',
  'starter.services','templates'])

.run(['$ionicPlatform', function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
}])

;



angular.module('starter.controllers', [])

.controller('DashCtrl', ['$scope', function($scope) {}])

.controller('ChatsCtrl', ['$scope', 'Chats', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
}])

.controller('ChatDetailCtrl', ['$scope', '$stateParams', 'Chats', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
}])

.controller('AccountCtrl', ['$scope', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
}]);

angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('chat-detail.html','<!--\n  This template loads for the \'tab.friend-detail\' state (app.js)\n  \'friend\' is a $scope variable created in the FriendsCtrl controller (controllers.js)\n  The FriendsCtrl pulls data from the Friends service (service.js)\n  The Friends service returns an array of friend data\n-->\n<ion-view view-title="{{chat.name}}">\n  <ion-content class="padding">\n    <img ng-src="{{chat.face}}" style="width: 64px; height: 64px">\n    <p>\n      {{chat.lastText}}\n    </p>\n  </ion-content>\n</ion-view>\n');
$templateCache.put('tab-it.html','<ion-view view-title="\u5B83">\n  <ion-content class="padding">\n    <div class="item-body ">\n        >>AD\u5BA2\u6808\n\n      <div>\n        \u4FE1\u606F\u95E8\n      </div>\n    </div>\n\n  </ion-content>\n</ion-view>\n');
$templateCache.put('tab-wo.html','<ion-view view-title="\u6211">\n  <ion-content class="overflow-scroll">\n    <div class="padding-top-20">\n      <img ng-src="http://www.majiamen.com/{{wo.portrait}}" class="wo-image-circle"></img>\n    </div>\n    <ion-item>\n      <div class="item-bodys">\n        <span>UID:</span>\n        <span ng-bind="wo.UID"></span>\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <div class="text-left">\n        <span>\u7B49\u7EA7:</span>\n        <span ng-bind="wo.level"></span>\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <div class="text-left">\n        <span>\u4E2A\u6027\u7B7E\u540D:</span>\n        <span ng-bind="wo.signature"></span>\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <div class="text-left">\u5E16\u5B50:</div>\n    </ion-item>\n    <ion-item>\n      <div class="text-left">\u77ED\u6D88\u606F:</div>\n    </ion-item>\n    <ion-item  ng-click="loginout()">\n      <div class="text-left button">\u9000\u51FA\u767B\u9646</div>\n    </ion-item>\n  </ion-content>\n</ion-view>\n');
$templateCache.put('tab-your.html','<ion-view view-title="\u4F60">\n  <ion-content>\n    <!--https://codepen.io/thiennhat/pen/jPorYW-->\n    <div style="padding: 20px;margin-top: 20px;margin-bottom: 20px;animation-delay: 1s;animation-name: your_animation; animation-duration: 2s; -webkit-animation-fill-mode: both;-webkit-animation-duration: 2s;">\n      <div style="float: right; margin-right: 160px; margin-top: 10px">\n        <p>\n          <a >\u7B2C\u4E00\u4E2A</a>\n        </p>\n        <p>\n          <a >\u7B2C\u4E8C\u4E2A</a>\n        </p>\n        <p>\n          <a>\n            \u7B2C\u4E09\u4E2A\n          </a>\n        </p>\n      </div>\n      <div>\n        <div style="background: #ecf0f1; border-bottom-left-radius: 50px; border-top-left-radius: 50px; height: 100px; box-shadow: 5px 5px 5px 0 rgba(0,0,0,.3);">\n          <div style="border-radius: 50px;height:80px ;width:80px;box-shadow: 2px 2px 5px 0 rgba(0,0,0,.3); position: relative; top: 10px;left: 10px; background: #2ecc71;">\n            <div style="height:74px ;width:74px;border-style: dotted; border-width: 2px; border-color: white; border-radius: 50px;position: relative; top: 3px;left: 3px;">\n              <span style="position: relative;top: 26px;font-size: 1.2em; margin-left: 6px; color: white">\n                AD\u5BA2\u6808\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n  </ion-content>\n</ion-view>\n');
$templateCache.put('tabs.html','<!--\nCreate tabs with an icon and label, using the tabs-positive style.\nEach tab\'s child <ion-nav-view> directive will have its own\nnavigation history that also transitions its views in and out.\n-->\n<ion-tabs class="tabs-icon-top tabs-color-active-positive">\n\n  <!-- Dashboard Tab -->\n  <ion-tab title="\u4F60" icon-off="ion-ios-pulse" icon-on="ion-ios-pulse-strong" href="#/tab/your">\n    <ion-nav-view name="tab-your"></ion-nav-view>\n  </ion-tab>\n\n  <!-- Chats Tab -->\n  <ion-tab title="\u5B83" icon-off="ion-ios-chatboxes-outline" icon-on="ion-ios-chatboxes" href="#/tab/it">\n    <ion-nav-view name="tab-it"></ion-nav-view>\n  </ion-tab>\n\n  <!-- Account Tab -->\n  <ion-tab title="\u6211" icon-off="ion-ios-gear-outline" icon-on="ion-ios-gear" href="#/tab/wo">\n    <ion-nav-view name="tab-wo"></ion-nav-view>\n  </ion-tab>\n\n\n</ion-tabs>\n');
$templateCache.put('login/login.html','\n<ion-view view-title="\u767B\u9646" >\n    <ion-content class="contentFlow" >\n      <div class="logo" style="text-align: center;margin-top: 20px" >\n        <div>\n          <img src="img/logo.png">\n        </div>\n      </div>\n      <div class="list card">\n        <div class="item item-input">\n          <i class="ion ion-android-phone-portrait positive iconMargin"></i>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          <input type="tel" maxlength="11" placeholder="\u8D26\u53F7" ng-model="username" >\n        </div>\n\n        <div class="item item-input">\n          <i class="ion ion-ios-locked positive iconMargin"></i>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          <input type="password" placeholder="\u5BC6\u7801" ng-model="password">\n        </div>\n\n        <div class="item item-input" ng-click="openPopover($event)" >\n          <i class="ion ion-android-phone-portrait positive"></i>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          <input type="text" placeholder="\u5B89\u5168\u95EE\u9898" ng-model="choice_question" disabled="false">\n        </div>\n\n        <div class="item item-input" ng-if="questionsType == -1" >\n          <i class="ion ion-android-phone-portrait positive"></i>\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          <input type="text" placeholder="\u81EA\u5B9A\u4E49\u5B89\u5168\u95EE\u9898" ng-model="custom_question" >\n        </div>\n        <div class="item item-input" >\n          <i class="icon ion-lock-combination positive "></i>\n          &nbsp;&nbsp;&nbsp;&nbsp;\n          <input type="text" placeholder="\u60A8\u7684\u7B54\u6848" ng-model="choice_question_answer" >\n        </div>\n\n        <div class="item item-input" >\n          <i class="icon ion-lock-combination positive "></i>\n          &nbsp;&nbsp;&nbsp;&nbsp;\n          <input type="text" placeholder="\u9A8C\u8BC1\u7801" ng-model="gdcode.code" />\n        </div>\n        <div class="row" >\n          <img id="code" class="col col-50 col-offset-25" ng-src="http://www.majiamen.com/ck.php?nowtime={{nowtime}}" ng-click="flush()"/>\n\n        </div>\n      </div>\n      <div class="button button-block button-positive" ng-click="login()">\u767B\u5F55</div>\n\n      <a  class="forgetPwd" ng-click="showforgetPassword()">\u5FD8\u8BB0\u5BC6\u7801?</a>\n\n\n      <div class="center">\n        <i>&copy;2017 MaJiaMen</i>\n      </div>\n    </ion-content>\n\n</ion-view>\n');
$templateCache.put('login/SecurityQuestionPopover.html','<!-- \u767B\u9646\u7684\u5730\u65B9\u9009\u62E9 \u5B89\u5168\u7684\u56DE\u7B54-->\n<ion-popover-view>\n    <ion-header-bar>\n        <h1 class="title">\u8BF7\u9009\u62E9\u5B89\u5168\u95EE\u9898\uFF1A</h1>\n    </ion-header-bar>\n    <ion-content>\n       <ion-list>\n           <ion-item class="item-divider" ng-repeat="question in questions" ng-click="choice(question, $index)">\n                {{question.question}}\n           </ion-item>\n\n       </ion-list>\n    </ion-content>\n</ion-popover-view>\n');}]);
var routermodule = angular.module('mjm.router', []);

routermodule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: "tabs.html"
      })

      // Each tab has its own nav history stack:
      .state("login", {
        url: '/login',
        templateUrl: "login/login.html",
        controller: 'loginCtrl'

      })
      .state('tab.it', {
        url: '/it',
        views: {
          'tab-it': {
            templateUrl: "tab-it.html",
            controller: 'itCtrl'
          }
        }
      })
      .state('tab.your', {
        url: '/your',
        views: {
          'tab-your': {
            templateUrl: "tab-your.html",
            controller: 'yourCtrl'
          }
        }
      })
      .state('tab.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'tab-chats': {
            templateUrl: "chat-detail.html",
            controller: 'ChatDetailCtrl'
          }
        }
      })

      .state('tab.wo', {
        url: '/wo',
        views: {
          'tab-wo': {
            templateUrl: "tab-wo.html",
            controller: 'woCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');

  }]);

/**
 * Created by jin on 2017/7/21.
 */
angular.module('mjm.login', [])
  .controller('loginCtrl', ['$scope', '$ionicPopover', 'ENV', '$http', '$loginFactory', '$state', '$ionicPlatform', '$timeout', function ($scope, $ionicPopover, ENV, $http, $loginFactory, $state, $ionicPlatform, $timeout) {

    $scope.username = "小金";
    $scope.password = "1jinmingkai";
    $scope.choice_question = '';
    $scope.custom_question = '我叫什么名字';
    $scope.choice_question_answer = "金明凯";
    $scope.nowtime = getcurrenttime();
    $scope.gdcode = {code:''};


    if (window.cookies.hasCookies(function () {
        console.info('sucess', 'has cookie');
        $state.go('tab.it');
      }, function (error) {
        console.info('error', 'no cookie');
      }));
    // 设置1秒延时执行，避免用户看到登陆界面闪
    $timeout(function () {
      // 隐藏欢迎页面，上面已经决定加载哪个页面了。
      window.navigator.splashscreen.hide();
    }, 1000);

    $scope.login = function () {
      console.info('here', $scope.gdcode.code);
      var question = '';
      // 如果是自定义的安全问题, 就用自定义里面的问题。
      if ($scope.questionsType == -1) {
        question = $scope.custom_question;
      } else {
        question = $scope.choice_question;
      }
      var login = $loginFactory.login(
        $scope.username,
        $scope.password,
        question,
        $scope.choice_question_answer,
        $scope.questionsType = -1,
        $scope.gdcode.code
      );
      console.info('login', login);

    };
    $scope.$on('login.islogined', function (event, args ) {
      console.info('login', event);
      console.info('login2',args);

      if (args) {
         $state.go('tab.it');
        window.plugins.toast.showWithOptions({
          message:"登陆成功，让我们浪起来~",
          duration: "short",
          position: "center",
          addPixelsY: -40
        }, function (sucess) {

        }, function (error) {
        });
      } else {
        window.plugins.toast.showWithOptions({
          message:"哇哦，登陆失败了，不要开小差~",
          duration: "short",
          position: "center",
          addPixelsY: -40
        }, function (sucess) {

        }, function (error) {
        });
      }
    }) ;

    /**
     * 点击 刷新验证码
     */
    $scope.flush = function () {
      var currenttime = getcurrenttime();

      $('#code').attr('src', 'http://www.majiamen.com/ck.php?nowtime=' + currenttime);
      console.info('flush', 'http://www.majiamen.com/ck.php?nowtime=' + currenttime);

    };
    /*
     * 获取当前的时间
     */
    function getcurrenttime () {
      var date = new Date();
      return date.getTime();
    }

    /**
     * 选择安全问题
     * @param question
     * @param $index
     */
    $scope.choice = function (question,$index) {
        $scope.choice_question = question.question;

        console.log('index', $index);
        if ($index == 0) {
          $scope.questionsType = 0;
        } else if ($index == 1) {
          $scope.questionsType = -1;
        } else {
           $scope.questionsType = $index - 1;
        }
        $scope.colsePopover();
    };

    $ionicPopover.fromTemplateUrl("login/SecurityQuestionPopover.html", {
        scope:$scope
    }).then(function (popover) {
        console.info(popover);
        $scope.popoverP = popover;
    });

    /*
      *  清除cookie的功能
     */
    $scope.clear = function () {
      window.cookies.clear(function() {
        console.log('Cookies cleared!');
      });
    };
    /**
     * 忘记密码提示
     */
    $scope.showforgetPassword = function () {

      window.plugins.toast.showWithOptions({
        message:"忘记密码，请在PC浏览器上找回，么么哒~",
        duration: "short",
        position: "center",
        addPixelsY: -40

      }, function (sucess) {
      }, function (error) {
      });
    };
    /**
     * 选择安全问题的界面
     * @param $event
     */
    $scope.openPopover = function ($event) {
        if (angular.isUndefined($scope.popoverP)) {
          console.info('undefined popoverP');
        } else {
          $scope.popoverP.show($event);
        }
    };

    $scope.colsePopover = function () {
        $scope.popoverP.hide();
    };



    $scope.questions = [
        {question: "无安全问题"},
        {question: "自定义问题"},
        {question: "我爸爸的出生地"},
        {question: "我的小学校名"},
        {question: "我的中学校名"},
        {question: "我最喜欢的运动"},
        {question: "我最喜欢的歌曲"},
        {question: "我最喜欢的电影"},
        {question: "我最喜欢的颜色"},
        {question: "我的大学校名"},
        {question: "我的手机号码"},
        {question: "我的爱人姓名"},
        {question: "我家的邮政编码"},
        {question: "我最喜欢的论坛"},
        {question: "我最最不喜欢的论坛"},
        {question: "我最喜欢的动画"}
    ];

  }]);

/**
 * Created by jin on 2017/7/22.
 */
angular.module('mjm.config', [])
.config(['$ionicConfigProvider', '$httpProvider', function ($ionicConfigProvider, $httpProvider) {
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

  $httpProvider.interceptors.push(['$q', function ($q) {
    return {
      // 可选，拦截成功的请求
      request: function(config) {
        // 进行预处理

        return config || $q.when(config);
      },

      // 可选，拦截失败的请求
      requestError: function(rejection) {
        // 对失败的请求进行处理
        // ...
        if (canRecover(rejection)) {
          return responseOrNewPromise;
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
          return responseOrNewPromise;
        }
        return $q.reject(rejection);
      }
    };
  }]);
}])
  .constant('ENV', {
    "webUrl":"http://www.majiamen.com/",
    "login":"login.php?"
  });

/**
 * Created by jin on 2017/7/22.
 */

angular.module('mjm.loginService', ['Encrypt'])
.factory('$loginFactory', ['ENV', '$http', 'Md5', '$rootScope', function ( ENV, $http, Md5, $rootScope) {
    var loginFactory = {};

  /**
   * 判断是否登陆，保存信息
   * @param data
   */
  function isLogined(data) {
       var b = /您已经为会员身份/.test(data);
       var result = /UID：(.+?)\s\|/.exec(data);
       var level = /\| 等级：(.+?)\s\|/.exec(data);
       var signature =  /个性签名：\s<span\sid=\"honor\">([\s\S]+?)</.exec(data);
       var imagePath = /a\shref=\"profile.php\?action=modify#face\"><img src=\"(.+?)\"/.exec(data);
       console.info('result', result);
       console.info('result.length', result.length);
       console.info('result.length.is', angular.isNumber(result[1]));
       console.info('b', b);

      console.info('imagepath', imagePath);
      console.info('level', level);
      console.info('signature', signature);

       localStorage.setItem('UID', result[1]);
       localStorage.setItem('portrait', imagePath[1]);
       localStorage.setItem('level', level[1]);
       localStorage.setItem('signature', signature[1]);

       // 首先判断是否找到
      // 长度大于2
      // 获取后面UID 是否为数字
       if (!angular.isUndefined(result) && result.length > 1) {
         if (angular.isNumber(parseInt(result[1]))) {
           return true;
         }
       }
       if(b) {
         return true;
       }

       return false;
    }
  /**
   *
   * @param username 用户
   * @param password 密码
   * @param securityQuestion 安全问题
   * @param answer 安全问题的回答
   * @param questionType 问题类型，0 没有安全问题  -1 自定义安全问题  数字其它的就是当在数组中的顺序 减去1
   */
    loginFactory.login = function (username, password, securityQuestion, answer, questionType, gdcode) {

      if (angular.isUndefined(securityQuestion)) {
        securityQuestion = "";
      } else {
        securityQuestion = $URL.encode(securityQuestion);
      }
      if (angular.isUndefined(answer)) {
        answer = "";
      }else {
        answer = $URL.encode(answer);
      }
      url = encodeURIComponent('http://www.majiamen.com/index.php');
      username = $URL.encode(username);
      console.info('code',gdcode);
      var data = 'forward=&jumpurl='+ url+'&step=2'+'&gdcode='+ gdcode+'&lgt=0&pwuser='+ username+'&pwpwd='+password+'&question='+ questionType +
        '&customquest='+securityQuestion+'&answer='+ answer+'&hideid=0&cktime=31536000';
      console.log('request1', data);

      $http({
        withCredentials: true,
        method:'POST',
        url:'http://www.majiamen.com/login.php',
        data:data,
        headers:{'Content-Type': 'application/x-www-form-urlencoded'}
      }).success(function(data, status, headers, config) {
        console.log('Set-Cookie: ' + headers('Set-Cookie'));
        console.info("headers", headers);
        console.info("data", data);
        var logined = isLogined(data);
        console.info("logined", logined);
        $rootScope.$broadcast('login.islogined', logined);
      }).error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.info('error', data);
        $rootScope.$broadcast('login.islogined', false);
        return data;
      });
    };

    return loginFactory;
}]);

/**
 * Created by jin on 2017/7/22.
 */
angular.module('mjm.tab.wo', [])
.controller('woCtrl', ['$scope', '$state', '$ionicHistory', function ($scope, $state, $ionicHistory) {

    $scope.wo = {
      UID:localStorage.getItem('UID'),
      portrait:localStorage.getItem('portrait'),
      level:localStorage.getItem('level'),
      signature:localStorage.getItem('signature')
    };

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

      $state.go('login');
      $ionicHistory.clearHistory();
      $ionicHistory.clearCache();
    };
  /**
   * 跳转到用户信息
   */
  $scope.goMessage = function () {
    /*cordova.InAppBrowser.open('http://www.majiamen.com/message.php','_self')*/

  };
}]);

/**
 * Created by jin on 2017/7/22.
 */
angular.module('mjm.tab.your', [])
  .controller('yourCtrl', ['$scope', '$Storage', function ($scope, $Storage) {
      $scope.ok = 'hao';


  }]);

/**
 * Created by jin on 2017/7/22.
 */
angular.module('mjm.tab.it', [])
  .controller('itCtrl', function () {

  });

/**
 * Created by jin on 2017/7/24.
 */
angular.module("mjm.storageService", [])
.factory('$Storage', function () {
   var Storage = {};

   Storage.save = function (key, value) {
      localStorage.setItem(key, value);
   };
   Storage.delete = function (key) {
     return localStorage.removeItem(key);
   };

   Storage.get = function (key) {
     return localStorage.getItem(key);

   };
   return Storage;
});

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

var routermodule = angular.module('mjm.router', []);

routermodule.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      // Each tab has its own nav history stack:
      .state("login", {
        url: '/login',
        templateUrl: 'templates/login/login.html',
        controller: 'loginCtrl'

      })
      .state('tab.it', {
        url: '/it',
        views: {
          'tab-it': {
            templateUrl: 'templates/tab-it.html',
            controller: 'itCtrl'
          }
        }
      })
      .state('tab.your', {
        url: '/your',
        views: {
          'tab-your': {
            templateUrl: 'templates/tab-your.html',
            controller: 'yourCtrl'
          }
        }
      })
      .state('tab.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'tab-chats': {
            templateUrl: 'templates/chat-detail.html',
            controller: 'ChatDetailCtrl'
          }
        }
      })

      .state('tab.wo', {
        url: '/wo',
        views: {
          'tab-wo': {
            templateUrl: 'templates/tab-wo.html',
            controller: 'woCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');

  });

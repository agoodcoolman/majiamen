/**
 * Created by jin on 2017/7/21.
 */
angular.module('mjm.login', [])
  .controller('loginCtrl', function ($scope, $ionicPopover) {
    $scope.login = function () {
        // 登陆
    };

      $scope.choice = function (question) {
          $scope.choice_question = question.question;
          // alert("choice_question" + question.question);
          $scope.colsePopover();
      };

    $scope.showTheChoice = $ionicPopover.fromTemplateUrl("js/login/SecurityQuestionPopover.html", {
        scope:$scope
    }).then(function (popover) {
        $scope.popover = popover;
    });

    $scope.showba = function () {

    };


    $scope.openPopover = function ($event) {
        $scope.popover.show($event);
    };

    $scope.colsePopover = function () {
        $scope.popover.hide();
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




  });

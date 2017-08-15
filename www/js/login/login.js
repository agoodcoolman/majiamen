/**
 * Created by jin on 2017/7/21.
 */
angular.module('mjm.login', ['ngCookies'])
  .controller('loginCtrl', function ($scope, $ionicPopover, ENV, $http, $loginFactory, $state, $cookies) {
    $scope.username = "";
    $scope.password = ""
    $scope.choice_question = "";
    $scope.choice_question_answer = "";
    $scope.qcode = getqcode();

    $scope.login = function () {
      var login = $loginFactory.login(
        $scope.username,
        $scope.password,
        $scope.choice_question,
        $scope.choice_question_answer,
        $scope.questionsType = -1
      );

      // $state.go('tab.it')


    };
    function getqcode () {
      var date = new Date();
      var qclde = 'www.majiamen.com/ck.php?nowtime=' + date.getTime();
      return qclde;
    }

    $scope.choice = function (question,$index) {
        $scope.choice_question = question.question;
        // alert("choice_question" + question.question);
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

    $ionicPopover.fromTemplateUrl("templates/login/SecurityQuestionPopover.html", {
        scope:$scope
    }).then(function (popover) {
        console.info(popover);
        $scope.popoverP = popover;
    });

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




  });

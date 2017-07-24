/**
 * Created by jin on 2017/7/22.
 */

angular.module('mjm.loginService', ['Encrypt'])
.factory('$loginFactory', function (ENV, $http, Md5) {
    var loginFactory = {};
  /**
   *
   * @param username 用户
   * @param password 密码
   * @param securityQuestion 安全问题
   * @param answer 安全问题的回答
   * @param questionType 问题类型，0 没有安全问题  -1 自定义安全问题  数字其它的就是当在数组中的顺序 减去1
   */
    loginFactory.login = function (username, password, securityQuestion, answer, questionType) {

      if (angular.isUndefined(securityQuestion)) {
        securityQuestion = ""
      };
      if (angular.isUndefined(answer)) {
        answer = ""
      };
      var data = 'forward=&jumpurl=http://www.majiamen.com/index.php&step=2&lgt=0&pwuser='+ username+'&pwpwd='+password+'&question='+ questionType+
        '&customquest='+securityQuestion+'&answer='+ answer+'&hideid=0&cktime=31536000';
      console.log('request1', data)
      data = encodeURIComponent('http://www.majiamen.com/index.php');
      data1 = encodeURIComponent(username);
      data2 = encodeURIComponent(password);
      date3 = encodeURI(username);
      console.info('request2', data);
      $http({
        method:'POST',
        url:'http://www.majiamen.com/login.php',
        data:data,
        headers:{'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function (response) {
        // alert("login1");
        console.info(response.data);
        return response.data;
      }, function (error) {
        // alert("login2");
        return error;
      })
    };
    return loginFactory;
})

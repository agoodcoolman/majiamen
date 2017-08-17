/**
 * Created by jin on 2017/7/22.
 */

angular.module('mjm.loginService', ['Encrypt'])
.factory('$loginFactory', function ( ENV, $http, Md5, $rootScope) {
    var loginFactory = {};

  /**
   * 判断是否登陆
   * @param data
   */
  function isLogined(data) {
       var b = /您已经为会员身份/.test(data);
       var result = /UID：(.*)|/.exec(data);
       console.info('result', result)
       console.info('b', b)
       // 首先判断是否找到
      // 长度大于2
      // 获取后面UID 是否为数字
       if (!angular.isUndefined(result) && result.length > 1 && angular.isNumber(result[1])) {
         return true;
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
        securityQuestion = ""
      } else {
        securityQuestion = $URL.encode(securityQuestion);
      }
      if (angular.isUndefined(answer)) {
        answer = ""
      }else {
        answer = $URL.encode(answer);
      }
      url = encodeURIComponent('http://www.majiamen.com/index.php');
      username = $URL.encode(username);
      console.info('code',gdcode);
      var data = 'forward=&jumpurl='+ url+'&step=2'+'&gdcode='+ gdcode+'&lgt=0&pwuser='+ username+'&pwpwd='+password+'&question='+ questionType +
        '&customquest='+securityQuestion+'&answer='+ answer+'&hideid=0&cktime=31536000';
      console.log('request1', data)

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
      })
    };
    return loginFactory;
})

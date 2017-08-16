/**
 * Created by jin on 2017/7/22.
 */

angular.module('mjm.loginService', ['Encrypt', 'ngCookies'])
.factory('$loginFactory', ['ENV', '$http', 'Md5', '$cookies',  function ( ENV, $http, Md5, $cookies) {
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

      var data = 'forward=&jumpurl='+ url+'&step=2&lgt=0&pwuser='+ username+'&pwpwd='+password+'&question='+ questionType+
        '&customquest='+securityQuestion+'&answer='+ answer+'&hideid=0&cktime=31536000';
      console.log('request1', data)
      /*data1 = encodeURIComponent(username);
      data2 = encodeURIComponent(password);
      date3 = encodeURI(username);
      console.info('request2', data);
      var options = {domain:'majiamen.com'}
      var ipCookie2 = ipCookie('91a70_ipfrom', undefined, options);*/
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
        console.log('all ' + $cookies.getAll());
        var length = window.sessionStorage.length;
        var length2 = document.cookie.length;
        console.info('length', length);
        console.info('length2', length2);
        // var cookies = $cookies.getAll();
        // http://www.majiamen.com/thread.php?fid=16
        // console.info(data);

        var elementById = document.getElementById("responseOutput");
        console.info('elementbyid', elementById);
        return  data;
      }).error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        return data;
      })
    };
    return loginFactory;
}])

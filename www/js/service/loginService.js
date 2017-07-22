/**
 * Created by jin on 2017/7/22.
 */

angular.module('mjm.loginService', ['Encrypt'])
.factory('$loginFactory', function (ENV, $http, Md5) {
    var loginFactory = {};
    loginFactory.login = function (username, password, securityQuestion, answer) {
      $http({
        method:'POST',
        url:'http://www.majiamen.com/login.php',
        data:{
          lgt:"0",
          pwuser:"小金",
          pwpwd:Md5.hex_md5("1jinmingkai"),
          question:"-1",
          customquest:"我叫什么名字",
          cktime:3600,
          answer:"金明凯"
        }
      }).then(function (response) {
        // alert("login1");
        return response;
      }, function (error) {
        // alert("login2");
        return error;
      })
    };
    return loginFactory;
})

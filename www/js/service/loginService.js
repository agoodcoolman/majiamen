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
        data:'forward=&jumpurl=http%3A%2F%2Fwww.majiamen.com%2F&step=2&lgt=0&pwuser=%D0%A1%BD%F0&pwpwd=1jinmingkai&question=-1&customquest=%CE%D2%BD%D0%CA%B2%C3%B4%C3%FB%D7%D6&answer=%BD%F0%C3%F7%BF%AD&hideid=0&cktime=31536000'
          ,
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

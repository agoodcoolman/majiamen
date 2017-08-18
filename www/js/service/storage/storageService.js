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

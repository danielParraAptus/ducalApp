angular.module('starter.services', [])
  //DEV
  .constant('BaseUrl', 'https://ducalapp.com/ducalApp/ws/ducalAppWS?wsdl')

 .factory('Peticiones', function ($http, $q, $cacheFactory, BaseUrl, LoaderService) {
    return {
      isEmpty: function (obj) {
          var hasOwnProperty = Object.prototype.hasOwnProperty;
          if (obj === null) return true;
          if (obj.length > 0)    return false;
          if (obj.length === 0)  return true;
          for (var key in obj) {
              if (hasOwnProperty.call(obj, key)) return false;
          }

          return true;

      },
      Login: function (username, password) {
          LoaderService.show();
          var url = BaseUrl;
          var deferred = $q.defer();
          console.log('La url es: ' + url);

          var datos = {
              "username": username,
              "password": password,
              "closeSessions": "true"
          };

          cordovaHTTP.postJson(url, datos, {
          }, function(response) {
              response.data = JSON.parse(response.data);
              deferred.resolve(response.data);
              LoaderService.hide();
          }, function(response) {
              deferred.reject(response.status);
              LoaderService.hide();
          });

          return deferred.promise;

      }
    };
});

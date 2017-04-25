angular.module('starter.services', [])
  //DEV
  .constant('BaseUrl', 'https://ducalapp.com/ducalApp/ws/ducalAppWS?wsdl')
  .constant('rememberMe', 'aEpXdTlZQkpCNVFRdVNGUVRIeDAwQT09OmpuNHpZdG5NMTQvdUtnVVpNTDJITVE9PQ')

 .factory('Peticiones', function ($http, $q, $cacheFactory, BaseUrl) {
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
      Login: function(username, password){
          var url = BaseUrl;
          var soapRequest =
            '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:ws="http://ws/">' + 
             '<soap:Header/>' +
              '<soap:Body>' +
                '<ws:getRememberMeToken>' +
                  '<arg0>' + username + '</arg0>' +
                  '<arg1>' + password + '</arg1>' +
               '</ws:getRememberMeToken>' +
              '</soap:Body>' +
            '</soap:Envelope>';

            return $.ajax({
              type: "POST",
              url: url,
              contentType: "text/xml",
              dataType: "xml",
              data: soapRequest,
              success: function(data, status, req) {
                  
              },
              error: function processError(data, status, req) {
                
              }  
          })

      },
      Logout: function (rememberme) {
          var url = BaseUrl;
          var soapRequest =
            '<?xml version="1.0" encoding="utf-8"?> \
            <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:ws="http://ws/">\
              <soap:Header/> \
              <soap:Body> \
                <ws:logout>\
                  <arg0>' + rememberme + '</arg0> \
               </ws:logout> \
              </soap:Body> \
            </soap:Envelope>';

            return $.ajax({
              type: "GET",
              url: url,
              contentType: "text/xml",
              dataType: "xml",
              data: soapRequest,
              success: function(data, status, req) {
                  console.log('Entro en success: ' );
              },
              error: function processError(data, status, req) {
                  console.log('Entro en error: ' );
                  console.log('EL data es: ' + JSON.stringify(data));
                  console.log('EL status es: ' + status);
                  console.log('EL req es: ' + req);
              }  
          })
      },
      GetFiestasProximoAnio: function (rememberme) {
          var url = BaseUrl;
          var soapRequest =
            '<?xml version="1.0" encoding="utf-8"?> \
            <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:ws="http://ws/">\
              <soap:Header/> \
              <soap:Body> \
                <ws:getFiestasProximoAnio>\
                  <arg0>' + rememberme + '</arg0> \
               </ws:getFiestasProximoAnio> \
              </soap:Body> \
            </soap:Envelope>';

            return $.ajax({
              type: "POST",
              url: url,
              contentType: "text/xml",
              dataType: "xml",
              data: soapRequest,
              success: function(data, status, req) {
                  console.log('Entro en success: ' );
              },
              error: function processError(data, status, req) {
                  console.log('Entro en error: ' );
                  console.log('EL data es: ' + JSON.stringify(data));
                  console.log('EL status es: ' + status);
                  console.log('EL req es: ' + req);
              }  
          })
      },
      GetFiestasProximosDias: function (rememberme) {
          var url = BaseUrl;
          var soapRequest =
            '<?xml version="1.0" encoding="utf-8"?> \
            <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:ws="http://ws/">\
              <soap:Header/> \
              <soap:Body> \
                <ws:getFiestasProximos3Dias>\
                  <arg0>' + rememberme + '</arg0> \
               </ws:getFiestasProximos3Dias> \
              </soap:Body> \
            </soap:Envelope>';

            return $.ajax({
              type: "POST",
              url: url,
              contentType: "text/xml",
              dataType: "xml",
              data: soapRequest,
              success: function(data, status, req) {
                  console.log('Entro en success: ' );
                  console.log('EL data es: ' + JSON.stringify(data));
                  console.log('EL status es: ' + status);
                  console.log('EL req es: ' + JSON.stringify(req));
              },
              error: function processError(data, status, req) {
                  console.log('Entro en error: ' );
                  console.log('EL data es: ' + JSON.stringify(data));
                  console.log('EL status es: ' + status);
                  console.log('EL req es: ' + req);
              }  
          })
      },
      GetServiciosHorariosTrenLnMad: function (rememberme, fecha) {
          var url = BaseUrl;
          var soapRequest =
            '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:ws="http://ws/">\
              <soap:Header/> \
              <soap:Body> \
                <ws:getServiciosHorariosTrenLnMad>\
                  <arg0>' + rememberme + '</arg0> \
                  <arg1>' + fecha + '</arg1> \
               </ws:getServiciosHorariosTrenLnMad> \
              </soap:Body> \
            </soap:Envelope>';

            return $.ajax({
              type: "POST",
              url: url,
              contentType: "text/xml",
              dataType: "xml",
              data: soapRequest,
              success: function(data, status, req) {
                  console.log('Entro en success: ' );
              },
              error: function processError(data, status, req) {
                  console.log('Entro en error: ' );
                  console.log('EL data es: ' + JSON.stringify(data));
                  console.log('EL status es: ' + status);
                  console.log('EL req es: ' + req);
              }  
          })
      },
      GetServiciosHorariosTrenMadLn: function (rememberme, fecha) {
          var url = BaseUrl;
          var soapRequest =
            '<?xml version="1.0" encoding="utf-8"?> \
            <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:ws="http://ws/">\
              <soap:Header/> \
              <soap:Body> \
                <ws:getServiciosHorariosTrenMadLn>\
                  <arg0>' + rememberme + '</arg0> \
                  <arg1>' + fecha + '</arg1> \
               </ws:getServiciosHorariosTrenMadLn> \
              </soap:Body> \
            </soap:Envelope>';

            return $.ajax({
              type: "POST",
              url: url,
              contentType: "text/xml",
              dataType: "xml",
              data: soapRequest,
              success: function(data, status, req) {
                  console.log('Entro en success: ' );
              },
              error: function processError(data, status, req) {
                  console.log('Entro en error: ' );
                  console.log('EL data es: ' + JSON.stringify(data));
                  console.log('EL status es: ' + status);
                  console.log('EL req es: ' + req);
              }  
          })
      },
      GetStatusUser: function (rememberme) {
          var url = BaseUrl;
          var soapRequest =
            '<?xml version="1.0" encoding="utf-8"?> \
            <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:ws="http://ws/">\
              <soap:Header/> \
              <soap:Body> \
                <ws:getStatusUser>\
                  <arg0>' + rememberme + '</arg0> \
               </ws:getStatusUser> \
              </soap:Body> \
            </soap:Envelope>';

            $.ajax({
              type: "GET",
              url: url,
              contentType: "text/xml",
              dataType: "xml",
              data: soapRequest,
              success: function(data, status, req) {
                  console.log('Entro en success: ' );
                  console.log('EL data es: ' + JSON.stringify(data));
                  console.log('EL status es: ' + status);
                  console.log('EL req es: ' + req);
              },
              error: function processError(data, status, req) {
                  console.log('Entro en error: ' );
                  console.log('EL data es: ' + JSON.stringify(data));
                  console.log('EL status es: ' + status);
                  console.log('EL req es: ' + req);
              }  
          })
      },
      GetTablonAnuncios: function (rememberme) {
          var url = BaseUrl;
          var soapRequest =
            '<?xml version="1.0" encoding="utf-8"?> \
            <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:ws="http://ws/">\
              <soap:Header/> \
              <soap:Body> \
                <ws:getTablonAnuncios>\
                  <arg0>' + rememberme + '</arg0> \
               </ws:getTablonAnuncios> \
              </soap:Body> \
            </soap:Envelope>';

            return $.ajax({
              type: "POST",
              url: url,
              contentType: "text/xml",
              dataType: "xml",
              data: soapRequest,
              success: function(data, status, req) {
                  console.log('Entro en success: ' );
                  console.log('EL data es: ' + JSON.stringify(data));
                  console.log('EL status es: ' + status);
                  console.log('EL req es: ' + JSON.stringify(req));
              },
              error: function processError(data, status, req) {
                  console.log('Entro en error: ' );
                  console.log('EL data es: ' + JSON.stringify(data));
                  console.log('EL status es: ' + status);
                  console.log('EL req es: ' + req);
              }  
          })
      },
      GetAnuncioPorId: function (rememberme, id) {
          var url = BaseUrl;
          var soapRequest =
            '<?xml version="1.0" encoding="utf-8"?> \
            <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:ws="http://ws/">\
              <soap:Header/> \
              <soap:Body> \
                <ws:getAnuncioPorId> \
                  <arg0>' + rememberme + '</arg0> \
                  <arg1>' + id + '</arg1> \
               </ws:getAnuncioPorId> \
              </soap:Body> \
            </soap:Envelope>';

            return $.ajax({
              type: "POST",
              url: url,
              contentType: "text/xml",
              dataType: "xml",
              data: soapRequest,
              success: function(data, status, req) {
                  console.log('Entro en success: ' );
              },
              error: function processError(data, status, req) {
                  console.log('Entro en error: ' );
                  console.log('EL data es: ' + JSON.stringify(data));
                  console.log('EL status es: ' + status);
                  console.log('EL req es: ' + req);
              }  
          })
      },
      GetTablonBoletines: function (rememberme) {
          var url = BaseUrl;
          var soapRequest =
            '<?xml version="1.0" encoding="utf-8"?> \
            <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:ws="http://ws/">\
              <soap:Header/> \
              <soap:Body> \
                <ws:getTablonBoletines>\
                  <arg0>' + rememberme + '</arg0> \
               </ws:getTablonBoletines> \
              </soap:Body> \
            </soap:Envelope>';

            return $.ajax({
              type: "POST",
              url: url,
              contentType: "text/xml",
              dataType: "xml",
              data: soapRequest,
              success: function(data, status, req) {
                  console.log('Entro en success: ' );
                  console.log('EL data es: ' + JSON.stringify(data));
                  console.log('EL status es: ' + status);
                  console.log('EL req es: ' + JSON.stringify(req));
              },
              error: function processError(data, status, req) {
                  console.log('Entro en error: ' );
                  console.log('EL data es: ' + JSON.stringify(data));
                  console.log('EL status es: ' + status);
                  console.log('EL req es: ' + req);
              }  
          })
      },
      GetBoletinPorId: function (rememberme, id) {
          var url = BaseUrl;
          var soapRequest =
            '<?xml version="1.0" encoding="utf-8"?> \
            <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:ws="http://ws/">\
              <soap:Header/> \
              <soap:Body> \
                <ws:getBoletinPorId> \
                  <arg0>' + rememberme + '</arg0> \
                  <arg1>' + id + '</arg1> \
               </ws:getBoletinPorId> \
              </soap:Body> \
            </soap:Envelope>';

            return $.ajax({
              type: "POST",
              url: url,
              contentType: "text/xml",
              dataType: "xml",
              data: soapRequest,
              success: function(data, status, req) {
                  console.log('Entro en success: ' );
              },
              error: function processError(data, status, req) {
                  console.log('Entro en error: ' );
                  console.log('EL data es: ' + JSON.stringify(data));
                  console.log('EL status es: ' + status);
                  console.log('EL req es: ' + req);
              }  
          })
      }


    };
});

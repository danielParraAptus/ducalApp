angular.module('starter.services', [])
  //DEV
  .constant('BaseUrl', 'https://ducalapp.com/ducalApp/ws/ducalAppWS?wsdl')

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
                console.log('Entro en success en Login ' );
              },
              error: function processError(data, status, req) {
                console.log('Entro en error en Login ' );
                console.log('EL data es: ' + JSON.stringify(data));
                console.log('EL status es: ' + status);
                console.log('EL req es: ' + req);
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
                  console.log('Entro en success en Logout ' );
                  console.log('EL data es: ' + JSON.stringify(data));
                  console.log('EL status es: ' + status);
                  console.log('EL req es: ' + req);
              },
              error: function processError(data, status, req) {
                  console.log('Entro en error en Logout ' );
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
                  console.log('Entro en success en GetFiestasProximoAnio ' );
              },
              error: function processError(data, status, req) {
                  console.log('Entro en error en GetFiestasProximoAnio ' );
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
                  console.log('Entro en success en GetFiestasProximosDias ' );
              },
              error: function processError(data, status, req) {
                  console.log('Entro en error en GetFiestasProximosDias ' );
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
                  console.log('Entro en success en GetServiciosHorariosTrenLnMad ' );
              },
              error: function processError(data, status, req) {
                  console.log('Entro en error en GetServiciosHorariosTrenLnMad ' );
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
                  console.log('Entro en success en GetServiciosHorariosTrenMadLn ' );
              },
              error: function processError(data, status, req) {
                  console.log('Entro en error en GetServiciosHorariosTrenMadLn ' );
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

            return $.ajax({
              type: "POST",
              url: url,
              contentType: "text/xml",
              dataType: "xml",
              data: soapRequest,
              success: function(data, status, req) {
                  console.log('Entro en success en GetStatusUser ' );
              },
              error: function processError(data, status, req) {
                  console.log('Entro en error en GetStatusUser ' );
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
                  console.log('Entro en success en GetTablonAnuncios ' );
              },
              error: function processError(data, status, req) {
                  console.log('Entro en error en GetTablonAnuncios ' );
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
                  console.log('Entro en success en GetAnuncioPorId ' );
              },
              error: function processError(data, status, req) {
                  console.log('Entro en error en GetAnuncioPorId ' );
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
                  console.log('Entro en success en GetTablonBoletines ' );
              },
              error: function processError(data, status, req) {
                  console.log('Entro en error en GetTablonBoletines ' );
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
                  console.log('Entro en success en GetBoletinPorId ' );
              },
              error: function processError(data, status, req) {
                  console.log('Entro en error en GetBoletinPorId ' );
                  console.log('EL data es: ' + JSON.stringify(data));
                  console.log('EL status es: ' + status);
                  console.log('EL req es: ' + req);
              }  
          })
      },
      GetEncuestasActivas: function (rememberme) {
          var url = BaseUrl;
          var soapRequest =
            '<?xml version="1.0" encoding="utf-8"?> \
            <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:ws="http://ws/">\
              <soap:Header/> \
              <soap:Body> \
                <ws:getServiciosEncuestasActivas>\
                  <arg0>' + rememberme + '</arg0> \
               </ws:getServiciosEncuestasActivas> \
              </soap:Body> \
            </soap:Envelope>';

            return $.ajax({
              type: "POST",
              url: url,
              contentType: "text/xml",
              dataType: "xml",
              data: soapRequest,
              success: function(data, status, req) {
                  console.log('Entro en success en GetEncuestasActivas ' );
              },
              error: function processError(data, status, req) {
                  console.log('Entro en error en GetEncuestasActivas ' );
                  console.log('EL data es: ' + JSON.stringify(data));
                  console.log('EL status es: ' + status);
                  console.log('EL req es: ' + req);
              }  
          })
      },
      GetEncuestasExpiradas: function (rememberme) {
          var url = BaseUrl;
          var soapRequest =
            '<?xml version="1.0" encoding="utf-8"?> \
            <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:ws="http://ws/">\
              <soap:Header/> \
              <soap:Body> \
                <ws:getServiciosEncuestasExpiradas>\
                  <arg0>' + rememberme + '</arg0> \
               </ws:getServiciosEncuestasExpiradas> \
              </soap:Body> \
            </soap:Envelope>';

            return $.ajax({
              type: "POST",
              url: url,
              contentType: "text/xml",
              dataType: "xml",
              data: soapRequest,
              success: function(data, status, req) {
                  console.log('Entro en success en GetEncuestasExpiradas ' );
              },
              error: function processError(data, status, req) {
                  console.log('Entro en error en GetEncuestasExpiradas ' );
                  console.log('EL data es: ' + JSON.stringify(data));
                  console.log('EL status es: ' + status);
                  console.log('EL req es: ' + req);
              }  
          })
      },
      GetEncuestasPorId: function (rememberme, id) {
          var url = BaseUrl;
          var soapRequest =
            '<?xml version="1.0" encoding="utf-8"?> \
            <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:ws="http://ws/">\
              <soap:Header/> \
              <soap:Body> \
                <ws:getServiciosVisualizacionEncuestaPorId>\
                  <arg0>' + rememberme + '</arg0> \
                  <arg1>' + id + '</arg1> \
               </ws:getServiciosVisualizacionEncuestaPorId> \
              </soap:Body> \
            </soap:Envelope>';

            return $.ajax({
              type: "POST",
              url: url,
              contentType: "text/xml",
              dataType: "xml",
              data: soapRequest,
              success: function(data, status, req) {
                  console.log('Entro en success en GetEncuestasPorId ' );
              },
              error: function processError(data, status, req) {
                  console.log('Entro en error en GetEncuestasPorId ' );
                  console.log('EL data es: ' + JSON.stringify(data));
                  console.log('EL status es: ' + status);
                  console.log('EL req es: ' + req);
              }  
          })
      },
      GetVotarEncuesta: function (rememberme, id, voto) {
          var url = BaseUrl;
          var soapRequest =
            '<?xml version="1.0" encoding="utf-8"?> \
            <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:ws="http://ws/">\
              <soap:Header/> \
              <soap:Body> \
                <ws:getServiciosVotarEncuesta>\
                  <arg0>' + rememberme + '</arg0> \
                  <arg1>' + id + '</arg1> \
                  <arg2>' + voto + '</arg2> \
               </ws:getServiciosVotarEncuesta> \
              </soap:Body> \
            </soap:Envelope>';

            return $.ajax({
              type: "POST",
              url: url,
              contentType: "text/xml",
              dataType: "xml",
              data: soapRequest,
              success: function(data, status, req) {
                  console.log('Entro en success en GetVotarEncuesta ' );
              },
              error: function processError(data, status, req) {
                  console.log('Entro en error en GetVotarEncuesta ' );
                  console.log('EL data es: ' + JSON.stringify(data));
                  console.log('EL status es: ' + status);
                  console.log('EL req es: ' + req);
              }  
          })
      },
      GetCondicionesLegales: function (rememberme) {
          var url = BaseUrl;
          var soapRequest =
            '<?xml version="1.0" encoding="utf-8"?> \
            <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:ws="http://ws/">\
              <soap:Header/> \
              <soap:Body> \
                <ws:getTerminosYCondiciones>\
                  <arg0>' + rememberme + '</arg0> \
               </ws:getTerminosYCondiciones> \
              </soap:Body> \
            </soap:Envelope>';

            return $.ajax({
              type: "POST",
              url: url,
              contentType: "text/xml",
              dataType: "xml",
              data: soapRequest,
              success: function(data, status, req) {
                  console.log('Entro en success en GetCondicionesLegales ' );
              },
              error: function processError(data, status, req) {
                  console.log('Entro en error en GetCondicionesLegales ' );
                  console.log('EL data es: ' + JSON.stringify(data));
                  console.log('EL status es: ' + status);
                  console.log('EL req es: ' + req);
              }  
          })
      },
      AcceptCondicionesLegales: function (rememberme) {
          var url = BaseUrl;
          var soapRequest =
            '<?xml version="1.0" encoding="utf-8"?> \
            <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:ws="http://ws/">\
              <soap:Header/> \
              <soap:Body> \
                <ws:aceptarTerminosYCondiciones>\
                  <arg0>' + rememberme + '</arg0> \
               </ws:aceptarTerminosYCondiciones> \
              </soap:Body> \
            </soap:Envelope>';

            return $.ajax({
              type: "POST",
              url: url,
              contentType: "text/xml",
              dataType: "xml",
              data: soapRequest,
              success: function(data, status, req) {
                  console.log('Entro en success en GetCondicionesLegales ' );
              },
              error: function processError(data, status, req) {
                  console.log('Entro en error en GetCondicionesLegales ' );
                  console.log('EL data es: ' + JSON.stringify(data));
                  console.log('EL status es: ' + status);
                  console.log('EL req es: ' + req);
              }  
          })
      },
      RegistrarSolicitudAlta: function (nombre, apellido1, apellido2, correo1, correo2) {
          var url = BaseUrl;
          var soapRequest =
            '<?xml version="1.0" encoding="utf-8"?> \
            <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:ws="http://ws/">\
              <soap:Header/> \
              <soap:Body> \
                <ws:registerSolicitudAlta>\
                  <arg0>' + nombre + '</arg0> \
                  <arg1>' + apellido1 + '</arg1> \
                  <arg2>' + apellido2 + '</arg2> \
                  <arg3>' + correo1 + '</arg3> \
                  <arg4>' + correo2 + '</arg4> \
               </ws:registerSolicitudAlta> \
              </soap:Body> \
            </soap:Envelope>';

            return $.ajax({
              type: "POST",
              url: url,
              contentType: "text/xml",
              dataType: "xml",
              data: soapRequest,
              success: function(data, status, req) {
                  console.log('Entro en success en GetCondicionesLegales ' );
                  console.log('EL data es: ' + JSON.stringify(data));
                  console.log('EL status es: ' + status);
                  console.log('EL req es: ' + req);
              },
              error: function processError(data, status, req) {
                  console.log('Entro en error en GetCondicionesLegales ' );
                  console.log('EL data es: ' + JSON.stringify(data));
                  console.log('EL status es: ' + status);
                  console.log('EL req es: ' + req);
              }  
          })
      }

    };
});

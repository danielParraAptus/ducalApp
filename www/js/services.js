angular.module('starter.services', [])
  //DEV
    .constant('BaseUrl', 'http://desarrollo.ausape.com/ServiciosMovil/servidor.php?wsdl')
    //.constant('BaseUrl', 'http://176.16.1.3:8061/servidor.php?wsdl')
    //.constant('BaseUrl', 'http://localhost/ServiciosAusape/servidor.php?wsdl')

 .factory('Peticiones', function ($http, BaseUrl) {
    return {
      GetEventos: function(){
          var url = BaseUrl;
          var soapRequest =
            '<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="ServiciosAusape_wsdl">' +
                '<soapenv:Header/>' +
                '<soapenv:Body>' +
                    ' <ser:getEvents soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"/>' +
                '</soapenv:Body>' +
            '</soapenv:Envelope>';

            return $.ajax({
              type: "POST",
              url: url,
              contentType: 'text/xml',
              dataType: 'xml',
              data: soapRequest,
              success: function(data, status, req) {
                console.log('Entro en success en GetEventos ' );
                //console.log('EL data es: ' + JSON.stringify(data));
                //console.log('EL status es: ' + status);
                //console.log('EL req es: ' + JSON.stringify(req));
              },
              error: function processError(data, status, req) {
                console.log('Entro en error en GetEventos ' );
                console.log('EL data es: ' + JSON.stringify(data));
                console.log('EL status es: ' + status);
                console.log('EL req es: ' + req);
              }  
          })
      },
      GetEventosByMonth: function(month, year){
          var url = BaseUrl;
          var soapRequest =
            '<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="ServiciosAusape_wsdl">' +
                '<soapenv:Header/>' +
                '<soapenv:Body>' +
                    '<ser:getEventsByMonth soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">' +
                        '<month xsi:type="xsd:string">' + month + '</month>' +
                        '<anio xsi:type="xsd:string">' + year + '</anio>' +
                    '</ser:getEventsByMonth>' +
                '</soapenv:Body>' +
            '</soapenv:Envelope>';     

            return $.ajax({
              type: "POST",
              url: url,
              contentType: 'text/xml',
              dataType: 'xml',
              data: soapRequest,
              success: function(data, status, req) {
                console.log('Entro en success en GetEventosByMonth ' );
                //console.log('EL data es: ' + JSON.stringify(data));
                //console.log('EL status es: ' + status);
                //console.log('EL req es: ' + JSON.stringify(req));
              },
              error: function processError(data, status, req) {
                console.log('Entro en error en GetEventosByMonth ' );
                console.log('EL data es: ' + JSON.stringify(data));
                console.log('EL status es: ' + status);
                console.log('EL req es: ' + req);
              }  
          })
      },
      GetEventosImportantes: function(month){
          var url = BaseUrl;
          var soapRequest =
            '<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="ServiciosAusape_wsdl">' +
                '<soapenv:Header/>' +
                '<soapenv:Body>' +
                    '<ser:getImportantEvents soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"/>' +
                '</soapenv:Body>' +
            '</soapenv:Envelope>';     

            return $.ajax({
              type: "POST",
              url: url,
              contentType: 'text/xml',
              dataType: 'xml',
              data: soapRequest,
              success: function(data, status, req) {
                console.log('Entro en success en GetEventos ' );
                //console.log('EL data es: ' + JSON.stringify(data));
                //console.log('EL status es: ' + status);
                //console.log('EL req es: ' + JSON.stringify(req));
              },
              error: function processError(data, status, req) {
                console.log('Entro en error en GetEventos ' );
                console.log('EL data es: ' + JSON.stringify(data));
                console.log('EL status es: ' + status);
                console.log('EL req es: ' + req);
              }  
          })
      },
      GetEventosById: function(idEvento){
          var url = BaseUrl;
          var soapRequest =
            '<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
                '<soapenv:Header/>' +
                '<soapenv:Body>' +
                    '<ser:getEventById soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">' +
                        '<id xsi:type="xsd:string">' + idEvento + '</id>' +
                    '</ser:getEventById>' +
                '</soapenv:Body>' +
            '</soapenv:Envelope>';

            return $.ajax({
              type: "POST",
              url: url,
              contentType: "text/xml",
              dataType: "xml",
              data: soapRequest,
              success: function(data, status, req) {
                console.log('Entro en success en GetEventosById ' );
                //console.log('EL data es: ' + JSON.stringify(data));
                //console.log('EL status es: ' + status);
                //console.log('EL req es: ' + JSON.stringify(req));
              },
              error: function processError(data, status, req) {
                console.log('Entro en error en GetEventosById ' );
                console.log('EL data es: ' + JSON.stringify(data));
                console.log('EL status es: ' + status);
                console.log('EL req es: ' + req);
              }  
          })
      },
      GetSessionsByType: function(typeSession){
          var url = BaseUrl;
          var soapRequest =
            '<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="ServiciosAusape_wsdl">' +
                '<soapenv:Header/>' +
                '<soapenv:Body>' +
                    '<ser:getSessionsByType soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">' +
                        '<id xsi:type="xsd:string">' + typeSession +'</id>' +
                    '</ser:getSessionsByType>' +
                '</soapenv:Body>' +
            '</soapenv:Envelope>';

            return $.ajax({
              type: "POST",
              url: url,
              contentType: "text/xml",
              dataType: "xml",
              data: soapRequest,
              success: function(data, status, req) {
                console.log('Entro en success en GetSessionsByType ' );
                //console.log('EL data es: ' + JSON.stringify(data));
                //console.log('EL status es: ' + status);
                //console.log('EL req es: ' + JSON.stringify(req));
              },
              error: function processError(data, status, req) {
                console.log('Entro en error en GetSessionsByType ' );
                console.log('EL data es: ' + JSON.stringify(data));
                console.log('EL status es: ' + status);
                console.log('EL req es: ' + req);
              }  
          })
      },
      GetSessionsMagistrales: function(){
          var url = BaseUrl;
          var soapRequest =
            '<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="ServiciosAusape_wsdl">' +
                '<soapenv:Header/>' +
                '<soapenv:Body>' +
                    '<ser:getSessionsMagistral soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"/>' +
                '</soapenv:Body>' +
            '</soapenv:Envelope>';

            return $.ajax({
              type: "POST",
              url: url,
              contentType: "text/xml",
              dataType: "xml",
              data: soapRequest,
              success: function(data, status, req) {
                console.log('Entro en success en GetSessionsMagistrales ' );
                //console.log('EL data es: ' + JSON.stringify(data));
                //console.log('EL status es: ' + status);
                //console.log('EL req es: ' + JSON.stringify(req));
              },
              error: function processError(data, status, req) {
                console.log('Entro en error en GetSessionsMagistrales ' );
                console.log('EL data es: ' + JSON.stringify(data));
                console.log('EL status es: ' + status);
                console.log('EL req es: ' + req);
              }  
          })
      },
      GetAgenda: function(){
          var url = BaseUrl;
          var soapRequest =
            '<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="ServiciosAusape_wsdl">' +
                '<soapenv:Header/>' +
                '<soapenv:Body>' +
                    '<ser:getAgenda soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"/>' +
                '</soapenv:Body>' +
            '</soapenv:Envelope>';

            return $.ajax({
              type: "POST",
              url: url,
              contentType: "text/xml",
              dataType: "xml",
              data: soapRequest,
              success: function(data, status, req) {
                console.log('Entro en success en GetAgenda ' );
                //console.log('EL data es: ' + JSON.stringify(data));
                //console.log('EL status es: ' + status);
                //console.log('EL req es: ' + JSON.stringify(req));
              },
              error: function processError(data, status, req) {
                console.log('Entro en error en GetAgenda ' );
                console.log('EL data es: ' + JSON.stringify(data));
                console.log('EL status es: ' + status);
                console.log('EL req es: ' + req);
              }  
          })
      },
      GetComoLlegar: function(){
          var url = BaseUrl;
          var soapRequest =
            '<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="ServiciosAusape_wsdl">' +
                '<soapenv:Header/>' +
                '<soapenv:Body>' +
                    '<ser:getComoLlegar soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"/>' +
                '</soapenv:Body>' +
            '</soapenv:Envelope>';

            return $.ajax({
              type: "POST",
              url: url,
              contentType: "text/xml",
              dataType: "xml",
              data: soapRequest,
              success: function(data, status, req) {
                console.log('Entro en success en GetComoLlegar ' );
                //console.log('EL data es: ' + JSON.stringify(data));
                //console.log('EL status es: ' + status);
                //console.log('EL req es: ' + JSON.stringify(req));
              },
              error: function processError(data, status, req) {
                console.log('Entro en error en GetComoLlegar ' );
                console.log('EL data es: ' + JSON.stringify(data));
                console.log('EL status es: ' + status);
                console.log('EL req es: ' + req);
              }  
          })
      },
      GetFotos: function(){
          var url = BaseUrl;
          var soapRequest =
            '<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="ServiciosAusape_wsdl">' +
                '<soapenv:Header/>' +
                '<soapenv:Body>' +
                    '<ser:getFotos soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"/>' +
                '</soapenv:Body>' +
            '</soapenv:Envelope>';

            return $.ajax({
              type: "POST",
              url: url,
              contentType: "text/xml",
              dataType: "xml",
              data: soapRequest,
              success: function(data, status, req) {
                console.log('Entro en success en GetFotos ' );
                //console.log('EL data es: ' + JSON.stringify(data));
                //console.log('EL status es: ' + status);
                //console.log('EL req es: ' + JSON.stringify(req));
              },
              error: function processError(data, status, req) {
                console.log('Entro en error en GetFotos ' );
                console.log('EL data es: ' + JSON.stringify(data));
                console.log('EL status es: ' + status);
                console.log('EL req es: ' + req);
              }  
          })
      },
      GetHref: function(idSesion, idTipo){
          var url = BaseUrl;
          var soapRequest =
            '<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="ServiciosAusape_wsdl">' +
                '<soapenv:Header/>' +
                '<soapenv:Body>' +
                    '<ser:getHref soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">' +
                        '<idSession xsi:type="xsd:string">' + idSesion + '</idSession>' +
                        '<idTipo xsi:type="xsd:string">' + idTipo + '</idTipo>' +
                    '</ser:getHref>'+
                '</soapenv:Body>' +
            '</soapenv:Envelope>';

            return $.ajax({
              type: "POST",
              url: url,
              contentType: "text/xml",
              dataType: "xml",
              data: soapRequest,
              success: function(data, status, req) {
                console.log('Entro en success en GetFotos ' );
                //console.log('EL data es: ' + JSON.stringify(data));
                //console.log('EL status es: ' + status);
                //console.log('EL req es: ' + JSON.stringify(req));
              },
              error: function processError(data, status, req) {
                console.log('Entro en error en GetFotos ' );
                console.log('EL data es: ' + JSON.stringify(data));
                console.log('EL status es: ' + status);
                console.log('EL req es: ' + req);
              }  
          })
      },
      GetValoraciones: function(){
          var url = BaseUrl;
          var soapRequest =
            '<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="ServiciosAusape_wsdl">' +
                '<soapenv:Header/>' +
                '<soapenv:Body>' +
                    '<ser:getValoraciones soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"/>' +
                '</soapenv:Body>' +
            '</soapenv:Envelope>';

            return $.ajax({
              type: "POST",
              url: url,
              contentType: "text/xml",
              dataType: "xml",
              data: soapRequest,
              success: function(data, status, req) {
                console.log('Entro en success en GetValoraciones ' );
                console.log('EL data es: ' + JSON.stringify(data));
                console.log('EL status es: ' + status);
                console.log('EL req es: ' + JSON.stringify(req));
              },
              error: function processError(data, status, req) {
                console.log('Entro en error en GetValoraciones ' );
                console.log('EL data es: ' + JSON.stringify(data));
                console.log('EL status es: ' + status);
                console.log('EL req es: ' + req);
              }  
          })
      }

    };
});

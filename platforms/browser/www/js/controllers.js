angular.module('starter.controllers', [])
  .controller('LoginCtrl', function($scope, $state, $ionicPopup, Peticiones) {
    $scope.$on('$ionicView.enter', function(){
        console.log('Estoy en LoginCtrl');

        localStorage.setItem('pantallaAnterior','');
        var remember = localStorage.getItem('rememberMe');

        if(remember){
          $state.go('novedades');
        }
    });
    

    $scope.hacerLogin = function(){
      console.log('Pulso el boton de hacer login');
      var usu = document.getElementById('textoUsuario').value;
      var pass  = document.getElementById('textoPasswd').value;

      $.when(Peticiones.Login(usu, pass)).done(function(devuelto, data , data2){
        console.log('Entro en data2: ' + data2);
        var respuesta = JSON.stringify(data2);

        if(respuesta.split('<return>')[1] != undefined){
          console.log('Entro en success: ');
          var respuesta2 = respuesta.split('<return>')[1];
          var token = respuesta2.split('</return>')[0];
          localStorage.setItem('rememberMe', token);
          $state.go('novedades');

        }else{
          console.log('Entro en ELSE: ');
          $ionicPopup.alert({
              title: '¡ERROR!',
              template: 'USUARIO O CONTRASEÑA INCORRECTOS'
          });
          $state.go('login');
        }
      })
    }
  })
   /////////////////////////////////////////////
  .controller('MenuCtrl', function($scope) {
    console.log('Estoy en MenuCtrl');
  })
   /////////////////////////////////////////////
  .controller('NovedadesCtrl', function($scope, $state) {
    var anterior;
    var div;

    $scope.$on('$ionicView.enter', function(){
        loadNovedades();
    });

    function loadNovedades(){
      anterior = localStorage.getItem('pantallaAnterior');
      div = document.getElementById('atrasNovedades');
      console.log('anterior es:' + anterior);

      if(anterior != ''){
        console.log('hola');
        $scope.algo = anterior;
        document.getElementById('atrasNovedades').style.visibility = 'visible';
      }else{
        console.log('adios: ' + JSON.stringify(div));
        document.getElementById('atrasNovedades').style.visibility = 'visible';
      }

      localStorage.setItem('pantallaAnterior','#/novedades');

    }
    
  })
  /////////////////////////////////////////////
  .controller('ServiciosCtrl', function($scope, $state){
    var anterior ;

    $scope.$on('$ionicView.enter', function(){
        loadServicios();
    });

    function loadServicios(){
        console.log('Entro en load');
        anterior = localStorage.getItem('pantallaAnterior');
        console.log('El anterior es: ' + anterior);
        $scope.algo = anterior;

        localStorage.setItem('pantallaAnterior','#/servicios');  
    }

  })
   /////////////////////////////////////////////
  .controller('ServicioCartaCtrl', function($scope) {
    $scope.$on('$ionicView.enter', function(){
        
    });

    $scope.mostrarMenu = function(numero){
        console.log('El numero es: ' + numero);
        var boton;
        var icono;

        switch(numero){
          case 0:
            boton = document.getElementById('contenidoRaciones');
            icono = document.getElementById('iconoRaciones');
            break;
          case 1:
            boton = document.getElementById('contenidoEnsaladas');
            icono = document.getElementById('iconoEnsaladas');
            break;
          case 2:
            boton = document.getElementById('contenidoHuevos');
            icono = document.getElementById('iconoHuevos');
            break;
          case 3:
            boton = document.getElementById('contenidoVerduras');
            icono = document.getElementById('iconoVerduras');
            break;
          case 4:
            boton = document.getElementById('contenidoPescados');
            icono = document.getElementById('iconoPescados');
            break;
          case 5:
            boton = document.getElementById('contenidoPizza');
            icono = document.getElementById('iconoPizza');
            break;
          case 6:
            boton = document.getElementById('contenidoHamburguesas');
            icono = document.getElementById('iconoHamburguesas');
            break;
          case 7:
            boton = document.getElementById('contenidoSandwiches');
            icono = document.getElementById('iconoSandwiches');
            break;
          case 8:
            boton = document.getElementById('contenidoCarnes');
            icono = document.getElementById('iconoCarnes');
            break;
        }

        if(boton.style.display == 'inline-block'){
          boton.style.display = 'none';
          icono.className = 'fa fa-chevron-circle-down';
        }else{
          boton.style.display = 'inline-block';
          icono.className = 'fa fa-chevron-circle-up';
        }

        
    }
    console.log('Estoy en ServicioCartaCtrl');
  })
   /////////////////////////////////////////////
  .controller('ServicioCarreteraCtrl', function($scope) {
    console.log('Estoy en ServicioCarreteraCtrl');
  })
   /////////////////////////////////////////////
  .controller('ServicioEncuestasCtrl', function($scope) {
    console.log('Estoy en ServicioEncuestasCtrl');
  })
   /////////////////////////////////////////////
  .controller('ServicioTelefonosCtrl', function($scope) {
    console.log('Estoy en ServicioTelefonosCtrl');
  })
   /////////////////////////////////////////////
  .controller('ServicioIglesiaCtrl', function($scope) {
    console.log('Estoy en ServicioIglesiaCtrl');
  })
   /////////////////////////////////////////////
  .controller('ServicioMeteoCtrl', function($scope) {
    console.log('Estoy en ServicioMeteoCtrl');
  })
   /////////////////////////////////////////////
  .controller('ServicioPadelCtrl', function($scope) {
    console.log('Estoy en ServicioPadelCtrl');
  })
   /////////////////////////////////////////////
  .controller('ServicioTrenCtrl', function($scope, $state) {
    var currentDate = new Date();
    $scope.date = currentDate;

    $scope.onezoneDatepicker = {
        date: currentDate,
        mondayFirst: false,
        months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        daysOfTheWeek: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
        startDate: new Date(1989, 1, 26),
        endDate: new Date(2024, 1, 26),
        disablePastDays: false,
        disableSwipe: false,
        disableWeekend: false,
        disableDates: false,
        showDatepicker: false,
        showTodayButton: true,
        calendarMode: false,
        hideCancelButton: false,
        hideSetButton: false,
        callback: function (value) {

        }
    };

    $scope.showDatepicker = function () {
        $scope.onezoneDatepicker.showDatepicker = true;
    };

    $scope.buscarTrenes = function(){
      var fecha = document.getElementById('labelFecha').value;
      var date = new Date(fecha);
      if(date.getMonth() < 10){
        var dd = date.getDate() + '/0' + (date.getMonth()+1) + '/' + date.getFullYear();
      }else{
        var dd = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
      }

      console.log('La fechita es: ' + dd);
      localStorage.setItem('fechaTren', dd);
      $state.go('servicio-tren-mostrar');

    }

    console.log('Estoy en ServicioTrenCtrl');
  })
  .controller('ServicioTrenMostrarCtrl', function($scope, $state, $ionicPopup, Peticiones) {
    $scope.$on('$ionicView.enter', function(){
        console.log('Estoy en ServicioTrenMostrarCtrl');
        var fecha = localStorage.getItem('fechaTren');
        var remember = localStorage.getItem('rememberMe');
        $scope.newDate = fecha;
        sacarTrenesLnMad(remember, fecha);
        sacarTrenesMadLn(remember, fecha);
        $scope.mostrarLn();
    });

    $scope.mostrarMad = function(){
      document.getElementById('MadLn').style.display = 'block';
      document.getElementById('LnMad').style.display = 'none';
      document.getElementById('btnMad').className = 'solapa_activa';
      document.getElementById('btnLn').className = 'solapa';
    }

    $scope.mostrarLn = function(){
      document.getElementById('MadLn').style.display = 'none';
      document.getElementById('LnMad').style.display = 'block';
      document.getElementById('btnLn').className = 'solapa_activa';
      document.getElementById('btnMad').className = 'solapa';
    }

    function sacarTrenesMadLn(dato1, dato2){
        console.log('Entro en sacarTrenesMadLn:');
      $.when(Peticiones.GetServiciosHorariosTrenMadLn(dato1, dato2)).done(function(devuelto, data , data2){
        var respuesta = data2.responseText;

        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(respuesta,"text/xml");
        var array = xmlDoc.getElementsByTagName("return");

        for(i = 0; i < array.length ; i++){
          var duracion = array[i].getElementsByTagName('duracion')[0].childNodes[0].nodeValue;
          var id = array[i].getElementsByTagName('id')[0].childNodes[0].nodeValue;
          var llegada = array[i].getElementsByTagName('llegada')[0].childNodes[0].nodeValue;
          var salida = array[i].getElementsByTagName('salida')[0].childNodes[0].nodeValue;

          if(i == 0){
            document.getElementById('tablaMadLn').innerHTML = '<tr>' +
              '<th>ID</th>' + 
              '<th>Salida</th>' +
              '<th>Llegada</th>' + 
              '<th>Duración</th>' + 
              '</tr>	';
            document.getElementById('tablaMadLn').innerHTML += '<tr class=\"alterno\">' +
              '<td>' + id +'</td>' + 
              '<td>' + salida +'</td>' +
              '<td>' + llegada +'</td>' + 
              '<td>' + duracion +'</td>' + 
              '</tr>	';
          }else{
            if(i%2 == 0){
              document.getElementById('tablaMadLn').innerHTML += '<tr class=\"alterno\">' +
                '<td>' + id +'</td>' + 
                '<td>' + salida +'</td>' +
                '<td>' + llegada +'</td>' + 
                '<td>' + duracion +'</td>' + 
                '</tr>	';
            }else{
              document.getElementById('tablaMadLn').innerHTML += '<tr>' +
                '<td>' + id +'</td>' + 
                '<td>' + salida +'</td>' +
                '<td>' + llegada +'</td>' + 
                '<td>' + duracion +'</td>' + 
                '</tr>	';
            }
          }
        }
      })
    }

    function sacarTrenesLnMad(dato1, dato2){
        console.log('Entro en sacarTrenesLnMad:');
      $.when(Peticiones.GetServiciosHorariosTrenLnMad(dato1, dato2)).done(function(devuelto, data , data2){
        var respuesta = data2.responseText;

        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(respuesta,"text/xml");
        var array = xmlDoc.getElementsByTagName("return");

        for(i = 0; i < array.length ; i++){
          var duracion = array[i].getElementsByTagName('duracion')[0].childNodes[0].nodeValue;
          var id = array[i].getElementsByTagName('id')[0].childNodes[0].nodeValue;
          var llegada = array[i].getElementsByTagName('llegada')[0].childNodes[0].nodeValue;
          var salida = array[i].getElementsByTagName('salida')[0].childNodes[0].nodeValue;

          if(i == 0){
            document.getElementById('tablaLnMad').innerHTML = '<tr>' +
              '<th>ID</th>' + 
              '<th>Salida</th>' +
              '<th>Llegada</th>' + 
              '<th>Duración</th>' + 
              '</tr>	';
            document.getElementById('tablaLnMad').innerHTML += '<tr class=\"alterno\">' +
              '<td>' + id +'</td>' + 
              '<td>' + salida +'</td>' +
              '<td>' + llegada +'</td>' + 
              '<td>' + duracion +'</td>' + 
              '</tr>	';
          }else{
            if(i%2 == 0){
              document.getElementById('tablaLnMad').innerHTML += '<tr class=\"alterno\">' +
                '<td>' + id +'</td>' + 
                '<td>' + salida +'</td>' +
                '<td>' + llegada +'</td>' + 
                '<td>' + duracion +'</td>' + 
                '</tr>	';
            }else{
              document.getElementById('tablaLnMad').innerHTML += '<tr>' +
                '<td>' + id +'</td>' + 
                '<td>' + salida +'</td>' +
                '<td>' + llegada +'</td>' + 
                '<td>' + duracion +'</td>' + 
                '</tr>	';
            }
          }
        }
      })
    }
    
  })
  //////////////////////////////////////////////////////////
  .controller('FiestasCtrl', function($scope, Peticiones) {
    $scope.$on('$ionicView.enter', function(){
        console.log('Estoy en FiestasCtrl');
        var remember = localStorage.getItem('rememberMe');
        console.log('El remember es: ' + remember);
        mostrarFiestas(remember);
    });

    function mostrarFiestas(token){
        $.when(Peticiones.GetFiestasProximoAnio(token)).done(function(devuelto, data , data2){
            var respuesta = data2.responseText;

            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(respuesta,"text/xml");
            var array = xmlDoc.getElementsByTagName("return");

            for(i = 0; i < array.length ; i++){
              localStorage.getItem('fechaFiestas');
              var fecha = array[i].getElementsByTagName('fecha')[0].childNodes[0].nodeValue;
              var date = new Date(fecha);
              var dia = date.getDate();
              var mes = date.getMonth() + 1;
              var year = date.getFullYear();
              var hora = date.getHours();
              var minutos = date.getMinutes();
              var str_fecha = dia + '/' + mes + '/' + year;
              var otro = minutos;
              var str_minutos = String(minutos);  
              if(str_minutos == 0){
                otro = '0' + minutos;
              }

              var weekday = new Array(7);
                weekday[0] =  "Domingo";
                weekday[1] = "Lunes";
                weekday[2] = "Martes";
                weekday[3] = "Miércoles";
                weekday[4] = "Jueves";
                weekday[5] = "Viernes";
                weekday[6] = "Sábado";

              var diaSemana = weekday[date.getDay()];
              
              var idFiesta = array[i].getElementsByTagName('idFiesta')[0].childNodes[0].nodeValue;
              var lugar = array[i].getElementsByTagName('lugar')[0].childNodes[0].nodeValue;
              var titulo = array[i].getElementsByTagName('titulo')[0].childNodes[0].nodeValue;

              if(localStorage.getItem('fechaFiestas') == str_fecha){
                document.getElementById('tablaFiestas').innerHTML += '<tr>' +
                  '<td>' + hora + ':' + otro + '</td>' + 
                  '<td>' + titulo + '</td>' +
                  '<td>' + lugar + '</td>' + 
                  '</tr>	';
              }else{
                localStorage.setItem('fechaFiestas', str_fecha);
                if(diaSemana == 'Sábado' || diaSemana == 'Domingo'){
                    document.getElementById('tablaFiestas').innerHTML += '<tr>' +
                      '<th class="negrita">' + diaSemana + '</th>' + 
                      '<th>' +  str_fecha + '</th>' + 
                      '<th></th>' + 
                      '</tr>	';
                }else{
                    document.getElementById('tablaFiestas').innerHTML += '<tr>' +
                      '<th>' + diaSemana + '</th>' + 
                      '<th>' +  str_fecha + '</th>' + 
                      '<th></th>' + 
                      '</tr>	';
                }
                
                document.getElementById('tablaFiestas').innerHTML += '<tr>' +
                  '<td>' + hora + ':' + otro + '</td>' + 
                  '<td>' + titulo + '</td>' +
                  '<td>' + lugar + '</td>' + 
                  '</tr>	';
              }
              
            }
        })
    }
  })
  .controller('AnunciosCtrl', function($scope, $state, Peticiones) {
    $scope.$on('$ionicView.enter', function(){
        console.log('Estoy en AnunciosCtrl');
        var remember = localStorage.getItem('rememberMe');
        console.log('El remember es: ' + remember);
        mostrarAnuncios(remember);
    });

    $scope.mandarAnuncios = function(id){
        console.log('El remember es: ' + id);
        localStorage.setItem('idAnuncio',id);
        $state.go('mostrar-anuncios');
    }

    function mostrarAnuncios(token){
      $.when(Peticiones.GetTablonAnuncios(token)).done(function(devuelto, data , data2){
          var respuesta = data2.responseText;
          var parser = new DOMParser();
          var xmlDoc = parser.parseFromString(respuesta,"text/xml");
          var array = xmlDoc.getElementsByTagName("return");
          var arrayObj = [];

          for(i = 0; i < array.length ; i++){
                var algo = [];
                var apellido1 = array[i].getElementsByTagName('apellido1')[0].childNodes[0].nodeValue;
                var apellido2 = array[i].getElementsByTagName('apellido2')[0].childNodes[0].nodeValue;
                var fechaCreacion = array[i].getElementsByTagName('fechaCreacion')[0].childNodes[0].nodeValue;
                var idAnuncio = array[i].getElementsByTagName('idAnuncio')[0].childNodes[0].nodeValue;
                var idAutor = array[i].getElementsByTagName('idAutor')[0].childNodes[0].nodeValue;
                var nombre = array[i].getElementsByTagName('nombre')[0].childNodes[0].nodeValue;
                var titulo = array[i].getElementsByTagName('titulo')[0].childNodes[0].nodeValue;
               
                var date = new Date(fechaCreacion);
                var dia = date.getDate();
                var mes = date.getMonth() + 1;
                var year = date.getFullYear();
                var hora = date.getHours();
                var minutos = date.getMinutes();
                var str_fecha = dia + '/' + mes + '/' + year;
                var otro = minutos;
                var str_minutos = String(minutos);  
                if(str_minutos == 0){
                  otro = '0' + minutos;
                }
                
                algo.fecha = str_fecha;
                algo.titulo = titulo;
                algo.nombre = nombre + ' ' + apellido1;
                algo.id = idAnuncio;
                arrayObj.push(algo);
          }

          $scope.datos = arrayObj;
      })
    }
  })
  .controller('MostrarAnunciosCtrl', function($scope, $state, Peticiones) {
      $scope.$on('$ionicView.enter', function(){
          console.log('Estoy en MostrarAnunciosCtrl');
          var remember = localStorage.getItem('rememberMe');
          var idAnuncio = localStorage.getItem('idAnuncio');
          console.log('El remember es: ' + remember);
          mostrarDatos(remember, idAnuncio);
      });

      function mostrarDatos(token, id){
          $.when(Peticiones.GetAnuncioPorId(token,id)).done(function(devuelto, data , data2){
              var respuesta = data2.responseText;
              var parser = new DOMParser();
              var xmlDoc = parser.parseFromString(respuesta,"text/xml");
              var array = xmlDoc.getElementsByTagName("return");
              var objeto = [];

              for(i = 0; i < array.length ; i++){
                    var apellido1 = array[i].getElementsByTagName('apellido1')[0].childNodes[0].nodeValue;
                    var apellido2 = array[i].getElementsByTagName('apellido2')[0].childNodes[0].nodeValue;
                    var contenido = array[i].getElementsByTagName('contenido')[0].childNodes[0].nodeValue;
                    var fechaCreacion = array[i].getElementsByTagName('fechaCreacion')[0].childNodes[0].nodeValue;
                    var idAnuncio = array[i].getElementsByTagName('idAnuncio')[0].childNodes[0].nodeValue;
                    var idAutor = array[i].getElementsByTagName('idAutor')[0].childNodes[0].nodeValue;
                    var nombre = array[i].getElementsByTagName('nombre')[0].childNodes[0].nodeValue;
                    var titulo = array[i].getElementsByTagName('titulo')[0].childNodes[0].nodeValue;
                  
                    var date = new Date(fechaCreacion);
                    var dia = date.getDate();
                    var mes = date.getMonth() + 1;
                    var year = date.getFullYear();
                    var hora = date.getHours();
                    var minutos = date.getMinutes();
                    var str_fecha = dia + '/' + mes + '/' + year;
                    var otro = minutos;
                    var str_minutos = String(minutos);  
                    if(str_minutos == 0){
                      otro = '0' + minutos;
                    }
                    
                    objeto.nombre = nombre + ' ' + apellido1;
                    objeto.titulo = titulo;
                    objeto.contenido = contenido;
                    objeto.fecha = str_fecha;
                    objeto.hora = hora + ':' + str_minutos;
                    objeto.idAutor = idAutor;
                    objeto.apellido2 = apellido2;

              }
              $scope.datos = objeto;
          })
      }
  })
  .controller('BoletinesCtrl', function($scope, $state, Peticiones) {
    $scope.$on('$ionicView.enter', function(){
        console.log('Estoy en BoletinesCtrl');
        var remember = localStorage.getItem('rememberMe');
        console.log('El remember es: ' + remember);
        mostrarBoletines(remember);
    });

    $scope.mandarBoletines = function(id){
        console.log('El remember es: ' + id);
        localStorage.setItem('idBoletin',id);
        $state.go('mostrar-boletines');
    }

    function mostrarBoletines(token){
      $.when(Peticiones.GetTablonBoletines(token)).done(function(devuelto, data , data2){
          var respuesta = data2.responseText;
          var parser = new DOMParser();
          var xmlDoc = parser.parseFromString(respuesta,"text/xml");
          var array = xmlDoc.getElementsByTagName("return");
          var arrayObj = [];

          for(i = 0; i < array.length ; i++){
                var algo = [];
                var apellido1 = array[i].getElementsByTagName('apellido1')[0].childNodes[0].nodeValue;
                var apellido2 = array[i].getElementsByTagName('apellido2')[0].childNodes[0].nodeValue;
                var fechaCreacion = array[i].getElementsByTagName('fechaCreacion')[0].childNodes[0].nodeValue;
                var idAnuncio = array[i].getElementsByTagName('idAnuncio')[0].childNodes[0].nodeValue;
                var idAutor = array[i].getElementsByTagName('idAutor')[0].childNodes[0].nodeValue;
                var nombre = array[i].getElementsByTagName('nombre')[0].childNodes[0].nodeValue;
                var titulo = array[i].getElementsByTagName('titulo')[0].childNodes[0].nodeValue;
                var nick = array[i].getElementsByTagName('nick')[0].childNodes[0].nodeValue;
               
                var date = new Date(fechaCreacion);
                var dia = date.getDate();
                var mes = date.getMonth() + 1;
                var year = date.getFullYear();
                var hora = date.getHours();
                var minutos = date.getMinutes();
                var str_fecha = dia + '/' + mes + '/' + year;
                var otro = minutos;
                var str_minutos = String(minutos);  
                if(str_minutos == 0){
                  otro = '0' + minutos;
                }
                
                algo.fecha = str_fecha;
                algo.titulo = titulo;
                algo.nombre = nombre + ' ' + apellido1;
                algo.id = idAnuncio;
                arrayObj.push(algo);
          }

          $scope.datos = arrayObj;
      })
    }
  })
  .controller('MostrarBoletinesCtrl', function($scope, $state, Peticiones) {
      $scope.$on('$ionicView.enter', function(){
          console.log('Estoy en MostrarBoletinesCtrl');
          var remember = localStorage.getItem('rememberMe');
          var idAnuncio = localStorage.getItem('idAnuncio');
          console.log('El remember es: ' + remember);
          mostrarDatos(remember, idAnuncio);
      });

      function mostrarDatos(token, id){
          $.when(Peticiones.GetBoletinPorId(token,id)).done(function(devuelto, data , data2){
              var respuesta = data2.responseText;
              var parser = new DOMParser();
              var xmlDoc = parser.parseFromString(respuesta,"text/xml");
              var array = xmlDoc.getElementsByTagName("return");
              var objeto = [];

              for(i = 0; i < array.length ; i++){
                    var apellido1 = array[i].getElementsByTagName('apellido1')[0].childNodes[0].nodeValue;
                    var apellido2 = array[i].getElementsByTagName('apellido2')[0].childNodes[0].nodeValue;
                    var contenido = array[i].getElementsByTagName('contenido')[0].childNodes[0].nodeValue;
                    var fechaCreacion = array[i].getElementsByTagName('fechaCreacion')[0].childNodes[0].nodeValue;
                    var idAnuncio = array[i].getElementsByTagName('idAnuncio')[0].childNodes[0].nodeValue;
                    var idAutor = array[i].getElementsByTagName('idAutor')[0].childNodes[0].nodeValue;
                    var nombre = array[i].getElementsByTagName('nombre')[0].childNodes[0].nodeValue;
                    var titulo = array[i].getElementsByTagName('titulo')[0].childNodes[0].nodeValue;
                  
                    var date = new Date(fechaCreacion);
                    var dia = date.getDate();
                    var mes = date.getMonth() + 1;
                    var year = date.getFullYear();
                    var hora = date.getHours();
                    var minutos = date.getMinutes();
                    var str_fecha = dia + '/' + mes + '/' + year;
                    var otro = minutos;
                    var str_minutos = String(minutos);  
                    if(str_minutos == 0){
                      otro = '0' + minutos;
                    }
                    
                    objeto.nombre = nombre + ' ' + apellido1;
                    objeto.titulo = titulo;
                    objeto.contenido = contenido;
                    objeto.fecha = str_fecha;
                    objeto.hora = hora + ':' + str_minutos;
                    objeto.idAutor = idAutor;
                    objeto.apellido2 = apellido2;

              }
              $scope.datos = objeto;
          })
      }
  })





  ////fin/////
;
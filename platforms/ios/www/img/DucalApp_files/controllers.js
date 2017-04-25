angular.module('starter.controllers', [])
  .controller('LoginCtrl', function($scope, $state, $ionicPopup) {
    localStorage.setItem('pantallaAnterior','');
    console.log('Estoy en LoginCtrl');

    $scope.hacerLogin = function(){
      var usu = document.getElementById('textoUsuario').value;
      var pass  = document.getElementById('textoPasswd').value;
      console.log('El usuario es: ' + usu);
      console.log('El passwd es: ' + pass);

      Peticiones.Login(usu, pass).then(function (data) {
        console.log('El data es: ' + data);
        /*
        if((usu == 'a' && pass == 'a') || (usu == 'admin' && pass == 'admin')){
          localStorage.setItem('rememberMe','si');
          $state.go('novedades');
        }else{
          $ionicPopup.alert({
              title: '¡ERROR!',
              template: 'USUARIO O CONTRASEÑA INCORRECTOS'
          });
        }*/
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
          localStorage.setItem('fechaTren', value);
          console.log('El value es: ' + value);
        }
    };

    $scope.showDatepicker = function () {
        $scope.onezoneDatepicker.showDatepicker = true;
    };

    $scope.buscarTrenes = function(){
      $state.go('servicio-tren-mostrar');
      
    }

    console.log('Estoy en ServicioTrenCtrl');
  })
  .controller('ServicioTrenMostrarCtrl', function($scope) {
    var fecha = localStorage.getItem('fechaTren');
    var fechaBuena = new Date(fecha);
    console.log('La fecha es: ' + fechaBuena);
    $scope.newDate = fechaBuena;
    console.log('Estoy en ServicioTrenMostrarCtrl');
  })
;
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'onezone-datepicker',
    'starter.controllers', 
    'starter.services'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  // Each tab has its own nav history stack:
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })
  .state('novedades', {
    url: '/novedades',
    templateUrl: 'templates/novedades.html',
    controller: 'NovedadesCtrl'
  })
  .state('menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html',
    controller: 'MenuCtrl'
  })
  .state('servicios', {
    url: '/servicios',
    templateUrl: 'templates/servicios.html',
    controller: 'ServiciosCtrl'
  })
  .state('servicio-tren', {
    url: '/servicio-tren',
    templateUrl: 'templates/servicio-tren.html',
    controller: 'ServicioTrenCtrl'
  })
  .state('servicio-tren-mostrar', {
    url: '/servicio-tren-mostrar',
    templateUrl: 'templates/servicio-tren-mostrar.html',
    controller: 'ServicioTrenMostrarCtrl'
  })
  .state('servicio-meteo', {
    url: '/servicio-meteo',
    templateUrl: 'templates/servicio-meteo.html',
    controller: 'ServicioMeteoCtrl'
  })
  .state('servicio-carretera', {
    url: '/servicio-carretera',
    templateUrl: 'templates/servicio-carretera.html',
    controller: 'ServicioCarreteraCtrl'
  })
  .state('servicio-carta', {
    url: '/servicio-carta',
    templateUrl: 'templates/servicio-carta.html',
    controller: 'ServicioCartaCtrl'
  })
  .state('servicio-padel', {
    url: '/servicio-padel',
    templateUrl: 'templates/servicio-padel.html',
    controller: 'ServicioPadelCtrl'
  })
  .state('servicio-encuestas', {
    url: '/servicio-encuestas',
    templateUrl: 'templates/servicio-encuestas.html',
    controller: 'ServicioEncuestasCtrl'
  })
  .state('servicio-iglesia', {
    url: '/servicio-iglesia',
    templateUrl: 'templates/servicio-iglesia.html',
    controller: 'ServicioIglesiaCtrl'
  })
  .state('servicio-telefonos', {
    url: '/servicio-telefonos',
    templateUrl: 'templates/servicio-telefonos.html',
    controller: 'ServicioTelefonosCtrl'
  })
  .state('fiestas', {
    url: '/fiestas',
    templateUrl: 'templates/fiestas.html',
    controller: 'FiestasCtrl'
  })
  .state('anuncios', {
    url: '/anuncios',
    templateUrl: 'templates/anuncios.html',
    controller: 'AnunciosCtrl'
  })
  .state('mostrar-anuncios', {
    url: '/mostrar-anuncios',
    templateUrl: 'templates/mostrar-anuncios.html',
    controller: 'MostrarAnunciosCtrl'
  })
  .state('boletines', {
    url: '/boletines',
    templateUrl: 'templates/boletines.html',
    controller: 'BoletinesCtrl'
  })
  .state('mostrar-boletines', {
    url: '/mostrar-boletines',
    templateUrl: 'templates/mostrar-boletines.html',
    controller: 'MostrarBoletinesCtrl'
  })
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});

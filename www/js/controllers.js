var app = angular.module('starter.controllers', []);

  app.controller('MenuCtrl', function($scope, $state, $timeout, $ionicPopup, Peticiones) {
      $scope.$on('$ionicView.enter', function(){
            $scope.fechaActual = new Date();
            $scope.fechaFin = new Date(2017, 06, 22, 24);
            $scope.menu = [];
            $scope.translateView = function(nombre) {
                return translate(nombre);
            }
            $timeout(function callAtTimeout() {
            }, 1000);
      });

  });

//////////////////////////////    EVENTOS    /////////////////////

  app.controller('EventosCtrl', function($scope, $timeout, $state, $ionicPopup, Peticiones) {
        $scope.$on('$ionicView.enter', function(){
            $scope.translateView = function(nombre) {
                return translate(nombre);
            }
        });
  });

  //////////////////////////////    EVENTOS-DESTACADOS    /////////////////////

  app.controller('EventosDestacadosCtrl', function($scope, $timeout, $state, $ionicPopup, Peticiones) {
        $scope.$on('$ionicView.enter', function(){
            recogerEventosImportantes();
            $scope.translateView = function(nombre) {
                return translate(nombre);
            }
            $timeout(function callAtTimeout() {
            }, 1500);
        });

        function recogerEventosImportantes(){
            $.when(Peticiones.GetEventosImportantes()).done(function(data, data2, data3){
                var otro = data3.responseXML;
                var array = otro.getElementsByTagName('item');
                var arrayEventos = [];

                if(array.length == 0){
                    $scope.noDataDestacados = translate('NO-EVENTS-DESTACADOS');
                } else{
                    $scope.noDataDestacados = '';
                }

                for(i = 0; i < array.length ; i++){
                    var objetoEventos = [];
                    var eventoId = array[i].getElementsByTagName('event_id')[0].childNodes[0].nodeValue;
                    var eventoName = array[i].getElementsByTagName('event_name')[0].innerHTML;
                    var eventoStartTime = array[i].getElementsByTagName('event_start_time')[0].innerHTML;
                    var eventoEndTime = array[i].getElementsByTagName('event_end_time')[0].innerHTML;
                    var eventoStartDate = array[i].getElementsByTagName('event_start_date')[0].innerHTML;
                    var eventoEndDate = array[i].getElementsByTagName('event_end_date')[0].innerHTML;
                    var eventoContenido = array[i].getElementsByTagName('post_content')[0].innerHTML;
                    var direccionLongitud = array[i].getElementsByTagName('location_longitude')[0].innerHTML;
                    var direccionLatitud = array[i].getElementsByTagName('location_latitude')[0].innerHTML;
                    var guid = array[i].getElementsByTagName('guid')[0].innerHTML;

                    if(guid == ''){
                        guid = translate('IMAGEN-POR-DEFECTO');
                    }

                    objetoEventos.eventoId = eventoId;
                    objetoEventos.eventoName = eventoName;
                    objetoEventos.eventoStartTime = eventoStartTime;
                    objetoEventos.eventoEndTime = eventoEndTime;
                    objetoEventos.eventoStartDate = eventoStartDate;
                    objetoEventos.eventoEndDate = eventoEndDate;
                    objetoEventos.eventoContenido = eventoContenido;
                    objetoEventos.direccionLongitud = direccionLongitud;
                    objetoEventos.direccionLatitud = direccionLatitud;
                    objetoEventos.guid = guid;

                    arrayEventos.push(objetoEventos);
                }
                $scope.datos = arrayEventos;
            })
        }

        $scope.verEvento = function(id) {
            localStorage.setItem('evento.id', id);
            localStorage.setItem('evento.pantalla', '#/eventos-destacados');
            $state.go('eventos-vista');
        }

  })

  //////////////////////////////    EVENTOS-PROXIMOS    /////////////////////

  app.controller('EventosProximosCtrl', function($scope, $timeout, $state, $ionicPopup, Peticiones) {
        $scope.$on('$ionicView.enter', function(){
            recogerEventos();
            $scope.translateView = function(nombre) {
                return translate(nombre);
            }
            $timeout(function callAtTimeout() {
            }, 2000);
        });

        function recogerEventos(){
            $.when(Peticiones.GetEventos()).done(function(data, data2, data3){
                var otro = data3.responseXML;
                var array = otro.getElementsByTagName('item');
                var arrayEventos = [];

                if(array.length == 0){
                    $scope.noDataProximos = translate('NO-EVENTS-DESTACADOS');
                } else{
                    $scope.noDataProximos = '';
                }

                for(i = 0; i < array.length ; i++){
                    var objetoEventos = [];
                    var eventoId = array[i].getElementsByTagName('event_id')[0].childNodes[0].nodeValue;
                    var eventoName = array[i].getElementsByTagName('event_name')[0].innerHTML;
                    var eventoStartTime = array[i].getElementsByTagName('event_start_time')[0].innerHTML;
                    var eventoEndTime = array[i].getElementsByTagName('event_end_time')[0].innerHTML;
                    var eventoStartDate = array[i].getElementsByTagName('event_start_date')[0].innerHTML;
                    var eventoEndDate = array[i].getElementsByTagName('event_end_date')[0].innerHTML;
                    var eventoContenido = array[i].getElementsByTagName('post_content')[0].innerHTML;
                    var direccionLongitud = array[i].getElementsByTagName('location_longitude')[0].innerHTML;
                    var direccionLatitud = array[i].getElementsByTagName('location_latitude')[0].innerHTML;
                    var guid = array[i].getElementsByTagName('guid')[0].innerHTML;

                    if(guid == ''){
                        guid = translate('IMAGEN-POR-DEFECTO');
                    }

                    objetoEventos.eventoId = eventoId;
                    objetoEventos.eventoName = eventoName;
                    objetoEventos.eventoStartTime = eventoStartTime;
                    objetoEventos.eventoEndTime = eventoEndTime;
                    objetoEventos.eventoStartDate = eventoStartDate;
                    objetoEventos.eventoEndDate = eventoEndDate;
                    objetoEventos.eventoContenido = eventoContenido;
                    objetoEventos.direccionLongitud = direccionLongitud;
                    objetoEventos.direccionLatitud = direccionLatitud;
                    objetoEventos.guid = guid;


                    arrayEventos.push(objetoEventos);
                }

                $scope.datos = arrayEventos;
            })
        }

        $scope.verEvento = function(id) {
            localStorage.setItem('evento.id', id);
            localStorage.setItem('evento.pantalla', '#/eventos-proximos');
            $state.go('eventos-vista');
        }

  })

  //////////////////////////////    EVENTOS-HISTORICOS    /////////////////////

  app.controller('EventosHistoricosCtrl', function($scope, $timeout, $state, $ionicPopup, Peticiones) {
        $scope.$on('$ionicView.enter', function(){
            var mes = localStorage.getItem('monthHistorico');
            var year = localStorage.getItem('yearHistorico');

            recogerEventosByMonth(mes, year);
            $scope.translateView = function(nombre) {
                return translate(nombre);
            }
            $timeout(function callAtTimeout() {
            }, 2000);

        });

        function recogerEventosByMonth(month, year){
            $.when(Peticiones.GetEventosByMonth(month, year)).done(function(data, data2, data3){
                var otro = data3.responseXML;
                var array = otro.getElementsByTagName('item');
                var arrayEventos = [];

                if(array.length == 0){
                    $scope.noDataHistoricos = translate('NO-EVENTS-HISTORICOS');
                } else{
                    $scope.noDataHistoricos = '';
                }

                for(i = 0; i < array.length ; i++){
                    var objetoEventos = [];
                    var eventoId = array[i].getElementsByTagName('event_id')[0].childNodes[0].nodeValue;
                    var eventoName = array[i].getElementsByTagName('event_name')[0].innerHTML;
                    var eventoStartTime = array[i].getElementsByTagName('event_start_time')[0].innerHTML;
                    var eventoEndTime = array[i].getElementsByTagName('event_end_time')[0].innerHTML;
                    var eventoStartDate = array[i].getElementsByTagName('event_start_date')[0].innerHTML;
                    var eventoEndDate = array[i].getElementsByTagName('event_end_date')[0].innerHTML;
                    var eventoContenido = array[i].getElementsByTagName('post_content')[0].innerHTML;
                    var direccionLongitud = array[i].getElementsByTagName('location_longitude')[0].innerHTML;
                    var direccionLatitud = array[i].getElementsByTagName('location_latitude')[0].innerHTML;
                    var guid = array[i].getElementsByTagName('guid')[0].innerHTML;

                    if(guid == ''){
                        guid = translate('IMAGEN-POR-DEFECTO');
                    }

                    objetoEventos.eventoId = eventoId;
                    objetoEventos.eventoName = eventoName;
                    objetoEventos.eventoStartTime = eventoStartTime;
                    objetoEventos.eventoEndTime = eventoEndTime;
                    objetoEventos.eventoStartDate = eventoStartDate;
                    objetoEventos.eventoEndDate = eventoEndDate;
                    objetoEventos.eventoContenido = eventoContenido;
                    objetoEventos.direccionLongitud = direccionLongitud;
                    objetoEventos.direccionLatitud = direccionLatitud;
                    objetoEventos.guid = guid;

                    arrayEventos.push(objetoEventos);
                }

                $scope.datos = arrayEventos;
                return arrayEventos;
            })
        }

        $scope.verEvento = function(id) {
            localStorage.setItem('evento.id', id);
            localStorage.setItem('evento.pantalla', '#/eventos-historicos');
            $state.go('eventos-vista');
        }

        $scope.fijarMesHistorico = function(){
            var numero = document.getElementById('selectHistorico');
            var month = numero.options[numero.selectedIndex].value;
            localStorage.setItem('monthHistorico', month);

            var year = document.getElementById('selectYear').value;
            localStorage.setItem('yearHistorico', year);

            $state.go('eventos-historicos');
        }

  })

  //////////////////////////////    EVENTOS-VISTA     /////////////////////

  app.controller('EventosVistaCtrl', function($scope, $timeout, $state, $ionicPopup, Peticiones) {
        $scope.$on('$ionicView.enter', function(){
            var id = localStorage.getItem('evento.id');
            $scope.pantalla = localStorage.getItem('evento.pantalla');
            recogerEventosPorId(id);

            $scope.translateView = function(nombre) {
                return translate(nombre);
            }

            $timeout(function callAtTimeout() {
            }, 1500);
        });

      function recogerEventosPorId(idEvento){
          $.when(Peticiones.GetEventosById(idEvento)).done(function(devuelto, data , data2){
                var otro = data2.responseText;
                var parser = new DOMParser();
                var xml = parser.parseFromString(otro, 'text/xml');
                var array = xml.getElementsByTagName('return');
                var objetoEventos = [];

                if(array.length == 0){
                    $scope.noData = translate('NO-EVENTS-DATA');
                } else{
                    $scope.noData = '';
                }

                for(i = 0; i < array.length ; i++){
                    var eventoId = array[i].getElementsByTagName('event_id')[0].childNodes[0].nodeValue;
                    var eventoName = array[i].getElementsByTagName('event_name')[0].innerHTML;
                    var eventoStartTime = array[i].getElementsByTagName('event_start_time')[0].innerHTML;
                    var eventoEndTime = array[i].getElementsByTagName('event_end_time')[0].innerHTML;
                    var eventoStartDate = array[i].getElementsByTagName('event_start_date')[0].innerHTML;
                    var eventoEndDate = array[i].getElementsByTagName('event_end_date')[0].innerHTML;
                    var eventoContenido = array[i].getElementsByTagName('post_content')[0].innerHTML;
                    var locationAddress = array[i].getElementsByTagName('location_address')[0].innerHTML;
                    var direccionLongitud = array[i].getElementsByTagName('location_longitude')[0].innerHTML;
                    var direccionLatitud = array[i].getElementsByTagName('location_latitude')[0].innerHTML;
                    var locationTown = array[i].getElementsByTagName('location_town')[0].innerHTML;
                    var guid = array[i].getElementsByTagName('guid')[0].innerHTML;
                
                    eventoContenido = eventoContenido.replace(/&gt;/g, '>');
                    eventoContenido = eventoContenido.replace(/&lt;/g, '<');
                    eventoContenido = eventoContenido.replace(/&quot;/g, '"');
                    eventoContenido = eventoContenido.replace(/&apos;/g, "'");
                    eventoContenido = eventoContenido.replace(/&amp;/g, '&');

                    if(guid == ''){
                        guid = translate('IMAGEN-POR-DEFECTO');
                    }

                    objetoEventos.eventoId = eventoId;
                    objetoEventos.eventoName = eventoName;
                    objetoEventos.eventoStartTime = eventoStartTime;
                    objetoEventos.eventoEndTime = eventoEndTime;
                    objetoEventos.eventoStartDate = eventoStartDate;
                    objetoEventos.eventoEndDate = eventoEndDate;
                    objetoEventos.eventoContenido = eventoContenido;
                    objetoEventos.direccionLongitud = direccionLongitud;
                    objetoEventos.direccionLatitud = direccionLatitud;
                    objetoEventos.locationAddress = locationAddress;
                    objetoEventos.locationTown = locationTown;
                    objetoEventos.guid = guid;

                    var direccionMaps = 'https://maps.google.com/maps?q=' + direccionLatitud + ',' + direccionLongitud + '&hl=es;z=14&amp;output=embed';

                    objetoEventos.direccionMaps = direccionMaps;

                    $scope.datos = objetoEventos;
                }
                
            })
        }
  });

  //////////////////////////////    CALENDARIO     /////////////////////

  app.controller('CalendarioCtrl', function($scope, $timeout, $state, Peticiones) {
        var hoy, diasemhoy, diahoy, meshoy, annohoy, tit, ant, pos, f0, mescal, annocal, mesant, mespos, celda0, primeromes, prsem, diaprmes, prcelda, empezar, diames, fila, midia, mimes, mianno, celda, nuevomes, tiempounix, arrayEventos;
        var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
        var lasemana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
        var diassemana = ["L","M","X","J","V","S","D"];
        var arrayEvent = [];

        $scope.$on('$ionicView.enter', function(){
                hoy = new Date();
                diasemhoy = hoy.getDay();
                diahoy = hoy.getDate();
                meshoy = hoy.getMonth();
                annohoy = hoy.getFullYear();
                annocal = annohoy;
                
                var mes = meshoy+1;
                recogerEventosByMonth(mes,annocal);
                $scope.translateView = function(nombre) {
                    return translate(nombre);
                }
                $timeout(function callAtTimeout() {
                }, 2000);
        });

        function recogerEventosByMonth(mes, year){
            $.when(Peticiones.GetEventosByMonth(mes, year)).done(function(data, data2, data3){
                var otro = data3.responseXML;
                var array = otro.getElementsByTagName('item');
                var arrayEventos = [];

                for(i = 0; i < array.length ; i++){
                    var objetoEventos = [];
                    var eventoId = array[i].getElementsByTagName('event_id')[0].childNodes[0].nodeValue;
                    var eventoName = array[i].getElementsByTagName('event_name')[0].innerHTML;
                    var eventoStartTime = array[i].getElementsByTagName('event_start_time')[0].innerHTML;
                    var eventoEndTime = array[i].getElementsByTagName('event_end_time')[0].innerHTML;
                    var eventoStartDate = array[i].getElementsByTagName('event_start_date')[0].innerHTML;
                    var eventoEndDate = array[i].getElementsByTagName('event_end_date')[0].innerHTML;
                    var eventoContenido = array[i].getElementsByTagName('post_content')[0].innerHTML;
                    var direccionLongitud = array[i].getElementsByTagName('location_longitude')[0].innerHTML;
                    var direccionLatitud = array[i].getElementsByTagName('location_latitude')[0].innerHTML;
                    var guid = array[i].getElementsByTagName('guid')[0].innerHTML;
                    var color = array[i].getElementsByTagName('grup_color')[0].innerHTML;

                    if(guid == ''){
                        guid = translate('IMAGEN-POR-DEFECTO');
                    }

                    objetoEventos.eventoId = eventoId;
                    objetoEventos.eventoName = eventoName;
                    objetoEventos.eventoStartTime = eventoStartTime;
                    objetoEventos.eventoEndTime = eventoEndTime;
                    objetoEventos.eventoStartDate = eventoStartDate;
                    objetoEventos.eventoEndDate = eventoEndDate;
                    objetoEventos.eventoContenido = eventoContenido;
                    objetoEventos.direccionLongitud = direccionLongitud;
                    objetoEventos.direccionLatitud = direccionLatitud;
                    objetoEventos.color = color;
                    objetoEventos.guid = guid;

                    arrayEventos.push(objetoEventos);
                }

                $scope.datos = arrayEventos;
                arrayEvent = arrayEventos;
                mostrarCalendario();

            })
        }

        function recogerEventosByMonth2(mes, year){
            $.when(Peticiones.GetEventosByMonth(mes, year)).done(function(data, data2, data3){
                var otro = data3.responseXML;
                var array = otro.getElementsByTagName('item');

                var arrayEventos = [];

                for(i = 0; i < array.length ; i++){
                    var objetoEventos = [];
                    var eventoId = array[i].getElementsByTagName('event_id')[0].childNodes[0].nodeValue;
                    var eventoName = array[i].getElementsByTagName('event_name')[0].innerHTML;
                    var eventoStartTime = array[i].getElementsByTagName('event_start_time')[0].innerHTML;
                    var eventoEndTime = array[i].getElementsByTagName('event_end_time')[0].innerHTML;
                    var eventoStartDate = array[i].getElementsByTagName('event_start_date')[0].innerHTML;
                    var eventoEndDate = array[i].getElementsByTagName('event_end_date')[0].innerHTML;
                    var eventoContenido = array[i].getElementsByTagName('post_content')[0].innerHTML;
                    var direccionLongitud = array[i].getElementsByTagName('location_longitude')[0].innerHTML;
                    var direccionLatitud = array[i].getElementsByTagName('location_latitude')[0].innerHTML;
                    var guid = array[i].getElementsByTagName('guid')[0].innerHTML;
                    var color = array[i].getElementsByTagName('grup_color')[0].innerHTML;

                    if(guid == ''){
                        guid = translate('IMAGEN-POR-DEFECTO');
                    }

                    objetoEventos.eventoId = eventoId;
                    objetoEventos.eventoName = eventoName;
                    objetoEventos.eventoStartTime = eventoStartTime;
                    objetoEventos.eventoEndTime = eventoEndTime;
                    objetoEventos.eventoStartDate = eventoStartDate;
                    objetoEventos.eventoEndDate = eventoEndDate;
                    objetoEventos.eventoContenido = eventoContenido;
                    objetoEventos.direccionLongitud = direccionLongitud;
                    objetoEventos.direccionLatitud = direccionLatitud;
                    objetoEventos.color = color;
                    objetoEventos.guid = guid;

                    arrayEventos.push(objetoEventos);
                }

                $scope.datos = arrayEventos;
                arrayEvent = arrayEventos;
                cabecera();
                escribirdias();
            })
        }

        function mostrarCalendario(){
            tit = document.getElementById('titulos');
            ant = document.getElementById('anterior');
            pos = document.getElementById('posterior');
            // Elementos del DOM en primera fila
            f0 = document.getElementById('fila0');

            mescal = meshoy;
            annocal = annohoy;
            //iniciar calendario:
            cabecera();
            primeralinea();
            escribirdias();
        }

        function cabecera() {
            tit.innerHTML = meses[mescal] + ' ' + annocal;
            mesant = mescal - 1;
            mespos = mescal + 1;
            if (mesant < 0) {
                mesant = 11;
            }
            if (mespos > 11) {
                mespos = 0;
            }
            ant.innerHTML = meses[mesant];
            pos.innerHTML = meses[mespos];
        }
        
        function primeralinea() {
            for (i = 0 ; i < 7 ; i++) {
                celda0 = f0.getElementsByTagName('th')[i];
                celda0.innerHTML = diassemana[i];
            }
         }

         function escribirdias() {
            //Buscar dia de la semana del dia 1 del mes:
            primeromes = new Date(annocal,mescal,'1');
            prsem = primeromes.getDay();
            prsem--;

            if (prsem == -1) {
                prsem = 6;
            }

            //buscar fecha para primera celda:
            diaprmes = primeromes.getDate();
            prcelda = diaprmes-prsem;
            empezar = primeromes.setDate(prcelda);
            diames = new Date();
            diames.setTime(empezar);
            //Recorrer las celdas para escribir el día:
            for (i = 1; i<7 ; i++) {
                fila = document.getElementById('fila' + i);
                for (j = 0; j < 7 ; j++) {
                    midia = diames.getDate();
                    mimes = diames.getMonth();
                    mianno = diames.getFullYear();
                    celda = fila.getElementsByTagName('td')[j];
                    var contenedorCelda = '<div class="contenedorCelda">';
                    contenidoCelda = '<div>' + midia + '</div>';
                    //pintar eventos
                    for(k = 0 ; k < arrayEvent.length ; k ++){
                        var ini = new Date(arrayEvent[k].eventoStartDate);
                        var fin = new Date(arrayEvent[k].eventoEndDate);
                        if(ini.getMonth() == mimes && (ini.getDate() >= midia && fin.getDate() <= midia) && ini.getFullYear() == annocal){
                            celda.id = midia + '/' + mimes + '/' + annocal;
                            contenidoCelda += '<div style="background-color: #' + arrayEvent[k].color + '" class="contenidoCelda" ></div>';
                        }
                    }
                    contenedorCelda += contenidoCelda + '</div>';
                    celda.innerHTML = contenedorCelda;
                    //Recuperar estado inicial al cambiar de mes:
                    celda.style.backgroundColor = '#9bf5ff';
                    celda.style.color = '#492736';
                    celda.style.border = '1px solid #fff';
                    //domingos en rojo
                    if (j == 6 || j == 5) { 
                        celda.style.backgroundColor = '#E68D91';
                    }
                    //dias restantes del mes en gris
                    if (mimes != mescal) {
                        celda.style.color = '#a0babc';
                    }
                    //destacar la fecha actual
                    if (mimes == meshoy && midia == diahoy && mianno == annohoy ) {
                        celda.style.backgroundColor = '#fff';
                        celda.style.border = '1px solid #A1A09F';
                    }
                    //pasar al siguiente día
                    midia = midia+1;
                    diames.setDate(midia);
                }
            }
         }
        
         $scope.mostrarEventosPorDia = function(e) {
            var HaHechoClick;
            if (e == null) {
                HaHechoClick = event.srcElement;
            } else {
                HaHechoClick = e.target;
            }

            if(HaHechoClick.id){
                localStorage.setItem('fechaCalendario', HaHechoClick.id);
                $state.go('calendario-mostrar');
            }

        }

         $scope.mesantes = function() {
            nuevomes = new Date();
            primeromes--;
            nuevomes.setTime(primeromes);
            mescal = nuevomes.getMonth();
            annocal = nuevomes.getFullYear();
            var mes = mescal+1;
            recogerEventosByMonth2(mes,annocal);
         }

         $scope.mesdespues = function() {
            nuevomes = new Date();
            tiempounix = primeromes.getTime();
            tiempounix = tiempounix + (45*24*60*60*1000);
            nuevomes.setTime(tiempounix);
            mescal = nuevomes.getMonth();
            annocal = nuevomes.getFullYear();
            var mes = mescal+1;
            recogerEventosByMonth2(mes,annocal);
         }

  });

   //////////////////////////////    CALENDARIO-MOSTRAR     /////////////////////

  app.controller('CalendarioMostrarCtrl', function($scope,$timeout, $state, Peticiones){
      $scope.$on('$ionicView.enter', function(){
            var fecha = localStorage.getItem('fechaCalendario');
            var day = fecha.split('/')[0];
            var month = fecha.split('/')[1];
            var year = fecha.split('/')[2];
            month++;
            $scope.date = day + '/' + month + '/' + year;
            recogerEventosByDay(day, month, year);
            $scope.translateView = function(nombre) {
                return translate(nombre);
            }
            $timeout(function callAtTimeout() {
            }, 1500);
      });

      function recogerEventosByDay(day, month, year){
            $.when(Peticiones.GetEventosByMonth(month, year)).done(function(data, data2, data3){
                var otro = data3.responseXML;
                var array = otro.getElementsByTagName('item');
                var arrayEventos = [];
                
                if(array.length == 0){
                    $scope.noData = translate('NO-EVENTS-DAY');
                } else{
                    $scope.noData = '';
                }

                for(i = 0; i < array.length ; i++){
                    var objetoEventos = [];
                    var eventoId = array[i].getElementsByTagName('event_id')[0].childNodes[0].nodeValue;
                    var eventoName = array[i].getElementsByTagName('event_name')[0].innerHTML;
                    var eventoStartTime = array[i].getElementsByTagName('event_start_time')[0].innerHTML;
                    var eventoEndTime = array[i].getElementsByTagName('event_end_time')[0].innerHTML;
                    var eventoStartDate = array[i].getElementsByTagName('event_start_date')[0].innerHTML;
                    var eventoEndDate = array[i].getElementsByTagName('event_end_date')[0].innerHTML;
                    var eventoContenido = array[i].getElementsByTagName('post_content')[0].innerHTML;
                    var direccionLongitud = array[i].getElementsByTagName('location_longitude')[0].innerHTML;
                    var direccionLatitud = array[i].getElementsByTagName('location_latitude')[0].innerHTML;
                    var guid = array[i].getElementsByTagName('guid')[0].innerHTML;
                    var fechaIni = new Date(eventoStartDate);
                    var fechaFin = new Date(eventoEndDate);

                    if(guid == ''){
                        guid = translate('IMAGEN-POR-DEFECTO');
                    }

                    if(fechaIni.getDate() >= day && fechaFin.getDate() <= day){
                        objetoEventos.eventoId = eventoId;
                        objetoEventos.eventoName = eventoName;
                        objetoEventos.eventoStartTime = eventoStartTime;
                        objetoEventos.eventoEndTime = eventoEndTime;
                        objetoEventos.eventoStartDate = eventoStartDate;
                        objetoEventos.eventoEndDate = eventoEndDate;
                        objetoEventos.eventoContenido = eventoContenido;
                        objetoEventos.direccionLongitud = direccionLongitud;
                        objetoEventos.direccionLatitud = direccionLatitud;
                        objetoEventos.guid = guid;

                        arrayEventos.push(objetoEventos);
                    }
                }
                $scope.datos = arrayEventos;
                return arrayEventos;

            })
        }

        $scope.verEvento = function(id) {
            localStorage.setItem('evento.id', id);
            localStorage.setItem('evento.pantalla', '#/calendario-mostrar');
            $state.go('eventos-vista');
        }
  })

   //////////////////////////////    FORUM     /////////////////////

  app.controller('ForumCtrl', function($scope, $state, $ionicPopup, Peticiones, $ionicModal) {
      $scope.$on('$ionicView.enter', function(){

            $scope.translateView = function(nombre) {
                return translate(nombre);
            }
      });

        $scope.mostrarEmpresasInscritas = function() {
            var url = 'http://www.ausape.es/ausape/Archivo/7-Forum/2017_XIII_Forum/09_Datos_Evento/F17_Empresas_Inscritas.pdf';
            cordova.InAppBrowser.open(url , '_system' , 'location=yes');
        }

        $scope.mostrarPatrocinan = function() {
            var url = 'http://www.ausape.es/ausape/Archivo/7-Forum/2017_XIII_Forum/09_Datos_Evento/F17_Patrocinadores.pdf';
            cordova.InAppBrowser.open(url , '_system' , 'location=yes');
        }

        $scope.mostrarAgenda = function() {
            var url = 'http://www.ausape.es/ausape/Archivo/7-Forum/2017_XIII_Forum/01_Agenda/F17_Agenda.pdf';
            cordova.InAppBrowser.open(url , '_system' , 'location=yes');
        }
        
        $scope.mostrarMinisite = function() {
            var url = 'http://www.ausape.com/ausape/Forum/Forum2017';
            cordova.InAppBrowser.open(url , '_system' , 'location=yes');
        }

  });

  //////////////////////////////    SESIONES MAGISTRALES     /////////////////////

  app.controller('SesionesMagistralesCtrl', function($scope, $timeout, $state, $ionicModal, $ionicPopup, Peticiones) {
      $scope.$on('$ionicView.enter', function(){
            mostrarMagistrales($scope, Peticiones);
            $scope.translateView = function(nombre) {
                return translate(nombre);
            }
            $timeout(function callAtTimeout() {
            }, 1000);
      });

      $scope.abrirModal = function(id){
            mostrarModal($scope, $ionicModal, Peticiones, id, 4);
      }

  });

  //////////////////////////////    SESIONES DEMO  -->  ID = 1     /////////////////////

  app.controller('SesionesDemoCtrl', function($scope, $ionicModal, $timeout, $state, $ionicPopup, Peticiones) {
      $scope.$on('$ionicView.enter', function(){
            mostrarSesionByType($scope, Peticiones, 1);
            $scope.translateView = function(nombre) {
                return translate(nombre);
            }
            $timeout(function callAtTimeout() {
            }, 1000);
      });

      $scope.abrirModal = function(id){
            mostrarModal($scope, $ionicModal, Peticiones, id, 3);
      }

  });

  //////////////////////////////    FORUM EMPLEO  -->  ID = 2     /////////////////////

  app.controller('SesionesEmpleoCtrl', function($scope, $ionicModal, $timeout, $state, $ionicPopup, Peticiones) {
      $scope.$on('$ionicView.enter', function(){
            mostrarSesionByType($scope, Peticiones, 2);
            $scope.translateView = function(nombre) {
                return translate(nombre);
            }
            $timeout(function callAtTimeout() {
            }, 1000);
      });

      $scope.abrirModal = function(id){
            mostrarModal($scope, $ionicModal, Peticiones, id, 3);
      }

  });

  //////////////////////////////    SESIONES PARALELAS  -->  ID = 3      /////////////////////

  app.controller('SesionesParalelasCtrl', function($scope, $ionicModal, $timeout, $state, Peticiones) {
      $scope.$on('$ionicView.enter', function(){
            mostrarSesionByType($scope, Peticiones, 3);
            $scope.translateView = function(nombre) {
                return translate(nombre);
            }
            $timeout(function callAtTimeout() {
            }, 1000);
      });

      $scope.abrirModal = function(id){
            mostrarModal($scope, $ionicModal, Peticiones, id, 3);
      }


  });

  //////////////////////////////    SESIONES SAP  -->  ID = 4     ///////////////////////////

  app.controller('SesionesSapCtrl', function($scope, $ionicModal, $timeout, $state, $ionicPopup, Peticiones) {
      $scope.$on('$ionicView.enter', function(){
            mostrarSesionByType($scope, Peticiones, 4);
            $scope.translateView = function(nombre) {
                return translate(nombre);
            }
            $timeout(function callAtTimeout() {
            }, 1000);
      });

      $scope.abrirModal = function(id){
            mostrarModal($scope, $ionicModal, Peticiones, id, 3);
      }

  });

  /////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////                  FUNCIONES                  //////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////

  function mostrarSesionByType($scope, Peticiones, tipo) {
    $.when(Peticiones.GetSessionsByType(tipo)).done(function(devuelto, data , data2){
        var otro = data2.responseText;
        var parser = new DOMParser();
        var xml = parser.parseFromString(otro, 'text/xml');
        var array = xml.getElementsByTagName('item');

        var fechaAnterior = "";
        var horaAnterior = "";
        var idAnterior = "";
            
        var arrayCalendario = [];
        var arrayHoras = [];
        var arraySesiones = [];

        if(array.length == 0){
            $scope.noDataSesiones = translate('NO-SESSIONS-DATA');
        } else{
            $scope.noDataSesiones = '';
        }

        for(i = 0; i < array.length ; i++){
            var objetoSesiones = [];
            var objetoHora = [];
            var objetoCalendario = [];
            var sesiId = array[i].getElementsByTagName('sesi_id')[0].childNodes[0].nodeValue;
            var sesiDiaIni = array[i].getElementsByTagName('sesi_dia_inicio')[0].innerHTML;
            var sesiDiaFin = array[i].getElementsByTagName('sesi_dia_fin')[0].innerHTML;
            var sesiImagen = array[i].getElementsByTagName('sesi_imagen')[0].innerHTML;
            var sesiEmpresa = array[i].getElementsByTagName('sesi_empresa')[0].innerHTML;
            var sesiResumen = array[i].getElementsByTagName('sesi_resumen')[0].innerHTML;
            var sesiPeso = array[i].getElementsByTagName('sesi_peso')[0].innerHTML;

            var dateActual = new Date(sesiDiaIni);

            var fechaActual = dateActual.getDate() + '/' + dateActual.getMonth() + '/' + dateActual.getFullYear();

            if(dateActual.getMinutes() == 0){
                var horaActual = dateActual.getHours() + ':0' + dateActual.getMinutes();
            }else{
                var horaActual = dateActual.getHours() + ':' + dateActual.getMinutes();
            }

            var contador = i;
            var contador1 = array.length - 1;

            objetoSesiones.sesiId = sesiId;
            objetoSesiones.sesiDiaIni = sesiDiaIni;
            objetoSesiones.sesiDiaFin = sesiDiaFin;
            objetoSesiones.sesiImagen = sesiImagen;
            objetoSesiones.sesiEmpresa = sesiEmpresa;
            objetoSesiones.sesiResumen = sesiResumen;
            objetoSesiones.sesiPeso = sesiPeso;
            objetoSesiones.idAnterior = idAnterior;

            if((horaActual != horaAnterior || fechaActual != fechaAnterior || (i == (array.length-1)) ) && i != 0){
                if(i == (array.length-1)){
                    arraySesiones.push(objetoSesiones);
                }

                objetoHora.hora = horaAnterior;
                objetoHora.sesiones = arraySesiones;  
                arraySesiones = [];

                arrayHoras.push(objetoHora);
            }

            arraySesiones.push(objetoSesiones);

            if(fechaActual != fechaAnterior || (i == (array.length-1)) ){
                objetoCalendario.fecha = fechaAnterior;
                objetoCalendario.horas = arrayHoras;
                arrayHoras = [];

                arrayCalendario.push(objetoCalendario);
            }

            fechaAnterior = fechaActual;
            horaAnterior = horaActual;
            idAnterior = sesiId;

        }

        $scope.datos = arrayCalendario;
    })
}

function mostrarMagistrales($scope, Peticiones) {
    $.when(Peticiones.GetSessionsMagistrales()).done(function(devuelto, data , data2){
        var otro = data2.responseText;
        var parser = new DOMParser();
        var xml = parser.parseFromString(otro, 'text/xml');
        var array = xml.getElementsByTagName('item');
        var arraySesiones = [];

        if(array.length == 0){
            $scope.noDataMagistrales = translate('NO-SESSIONS-MAGISTRALES');
        } else{
            $scope.noDataMagistrales = '';
        }

        for(i = 0; i < array.length ; i++){
            var objetoSesiones = [];
            var semaId = array[i].getElementsByTagName('sema_id')[0].childNodes[0].nodeValue;
            var semaImagen = array[i].getElementsByTagName('sema_imagen')[0].innerHTML;
            var semaUrl = array[i].getElementsByTagName('sema_url')[0].innerHTML;
            var semaTitulo = array[i].getElementsByTagName('sema_titulo')[0].innerHTML;
            var semaAutor = array[i].getElementsByTagName('sema_autor')[0].innerHTML;
            var semaProfesion = array[i].getElementsByTagName('sema_profesion')[0].innerHTML;
            var semaFrase = array[i].getElementsByTagName('sema_frase')[0].innerHTML;
            var semaPeso = array[i].getElementsByTagName('sema_peso')[0].innerHTML;

            objetoSesiones.semaId = semaId;
            objetoSesiones.semaImagen = semaImagen;
            objetoSesiones.semaUrl = semaUrl;
            objetoSesiones.semaTitulo = semaTitulo;
            objetoSesiones.semaAutor = semaAutor;
            objetoSesiones.semaProfesion = semaProfesion;
            objetoSesiones.semaFrase = semaFrase;
            objetoSesiones.semaPeso = semaPeso;

            arraySesiones.push(objetoSesiones);
        }

        $scope.datos = arraySesiones;
    })
}

function mostrarEnlaces($scope, Peticiones, idSesion, idTipo){
    $.when(Peticiones.GetHref(idSesion, idTipo)).done(function(devuelto, data , data2){
        var otro = data2.responseText;
        var parser = new DOMParser();
        var xml = parser.parseFromString(otro, 'text/xml');
        var array = xml.getElementsByTagName('item');
        var arraySesiones = [];

        for(i = 0; i < array.length ; i++){
            var objetoSesiones = [];
            var enlaceEnlace = array[i].getElementsByTagName('href_href')[0].innerHTML;
            var tituloEnlace = array[i].getElementsByTagName('href_texto')[0].innerHTML;
            var tituloSesion = array[i].getElementsByTagName('sesi_sesion')[0].innerHTML;
            var imagenSesion = array[i].getElementsByTagName('sesi_imagen')[0].innerHTML;

            objetoSesiones.enlaceEnlace = enlaceEnlace;
            objetoSesiones.tituloEnlace = tituloEnlace;
            objetoSesiones.tituloSesion = tituloSesion;
            objetoSesiones.imagenSesion = 'http://ausape.com' + imagenSesion;

            if(enlaceEnlace == ''){
                $scope.noDataModal = translate('NO-ENLACES-DATA');
            } else{
                $scope.noDataModal = '';
            }

            arraySesiones.push(objetoSesiones);
        }

        $scope.enlaces = arraySesiones;
        $scope.tituloSesion = arraySesiones[0].tituloSesion;
        $scope.imagenSesion = arraySesiones[0].imagenSesion;
    })
}

function mostrarModal($scope, $ionicModal, Peticiones, idSesion, idTipo){
    $scope.translateView = function(nombre) {
        return translate(nombre);
    } 
    $scope.modal = $ionicModal.fromTemplateUrl('templates/sesionModal.html', {
        scope: $scope,
        animation: 'slide-in'
    }).then(function(modal) { 
        $scope.modal = modal;
    });

    $scope.abrirModal = function(id) {
        $scope.modal.show();
        mostrarEnlaces($scope, Peticiones, id, idTipo);
    };

    $scope.verEnlace = function(url) {
        cordova.InAppBrowser.open(url, '_system', 'location=yes');
    }

    $scope.cerrarModal = function() {
        $scope.enlaces = "";
        $scope.modal.hide();
    };

    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });
        
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
        // Execute action
    });
        
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
        // Execute action
    });
}

function mostrarModalValoraciones($scope, Peticiones, $ionicModal){
    $scope.modal = $ionicModal.fromTemplateUrl('templates/sesionModal.html', {
        scope: $scope,
        animation: 'slide-in'
    }).then(function(modal) { 
        $scope.modal = modal;
    });

    $scope.abrirModal = function() {
        $scope.modal.show();
        mostrarValoraciones($scope, Peticiones);
    };

    $scope.verEnlace = function(url) {
        cordova.InAppBrowser.open(url, '_system', 'location=yes');
    }

    $scope.cerrarModal = function() {
        $scope.enlaces = "";
        $scope.modal.hide();
    };

    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });
        
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
        // Execute action
    });
        
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
        // Execute action
    });
}

function mostrarValoraciones($scope, Peticiones) {
    $.when(Peticiones.GetValoraciones()).done(function(devuelto, data , data2){
        var otro = data2.responseText;
        var parser = new DOMParser();
        var xml = parser.parseFromString(otro, 'text/xml');
        var array = xml.getElementsByTagName('item');
        var arrayValoraciones = [];

        if(array.length == 0){
            $scope.noDataModal = translate('NO-VALORATIONS-DATA');
        } else{
            $scope.noDataModal = '';
        }

        for(i = 0; i < array.length ; i++){
            var objetoValoraciones = [];
            var hrefHref = array[i].getElementsByTagName('href_href')[0].childNodes[0].nodeValue;
            var hrefTexto = array[i].getElementsByTagName('href_texto')[0].innerHTML;

            objetoValoraciones.enlaceEnlace = hrefHref;
            objetoValoraciones.tituloEnlace = hrefTexto;

            if(hrefHref == ''){
                $scope.noDataModal = translate('NO-ENLACES-DATA');
            } else{
                $scope.noDataModal = '';
            }

            arrayValoraciones.push(objetoValoraciones);
        }
        $scope.enlaces = arrayValoraciones;
        $scope.imagenSesion = translate('FORUM-MENU-VALORACION-IMAGE');
        $scope.tituloSesion = translate('FORUM-MENU-VALORACION');
    })
}

function translate(nombre){
    var request = new XMLHttpRequest();
    request.open("GET", "locales/local-es.json", false);
    request.send();
    var jchon = JSON.parse(request.responseText);
    return jchon[nombre];
}
    

  ///////// FIN //////////



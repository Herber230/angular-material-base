
var appMainModule = 'angularMaterial';

(function()
{

    var app = angular.module(appMainModule, [   
                                                'ui.router',
                                                'ngAnimate', 
                                                'oc.lazyLoad',
                                                'ngMessages',
                                                'ngMaterial',
                                                'md.data.table',
                                                'ngMaterialSidemenu'
                                                                ]);

    app.config(configApp).run(runApp);


    configApp.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', '$httpProvider', '$ocLazyLoadProvider', 'APP_REQUIRES', 'RouteHelpersProvider', '$mdThemingProvider'];

    function configApp($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider, $ocLazyLoadProvider, APP_REQUIRES, helper, $mdThemingProvider) 
    {   
        
        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
            modules: APP_REQUIRES.modules
        });

        $locationProvider.html5Mode(false);
        $urlRouterProvider.otherwise('/app/home');

        //$mdThemingProvider.theme('default')
        //    .dark();
        //    .primaryPalette('pink')
        //    .accentPalette('orange');

        $mdThemingProvider.definePalette('myBarbaPalette', {
            '50': 'ffffff',
            '100': 'e6e6e6',
            '200': 'cccccc',
            '300': 'b3b3b3',
            '400': 'a6a6a6',
            '500': '262626',
            '600': '8c8c8c',
            '700': '808080',
            '800': '666666',
            '900': '4d4d4d',
            'A100': '404040',
            'A200': '333333',
            'A400': '262626',
            'A700': '000000',
            'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                                // on this palette should be dark or light

            'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
            '200', '300', '400', 'A100'],
            'contrastLightColors': undefined    // could also specify this if default was 'dark'
        });

        $mdThemingProvider.theme('default')
            .primaryPalette('myBarbaPalette');

        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: helper.basepath('/views/app.html'),
                controller: 'appController',
                controllerAs: 'vm',
                resolve: helper.resolveFor()
            })
            .state('app.home', {
                url: '/home',
                title: 'Home',
                templateUrl: helper.basepath('/shared/states/home/home.html'),
                controller: 'HomeController',
                controllerAs: 'vm',
                resolve: helper.resolveFor('HomeCtrl'),
                data: { displayRoute: ["Inicio"] }
            })
            .state('app.vista', {
                url: '/vista',
                title: 'Vista',
                templateUrl: helper.basepath('/shared/states/vista/vista.html'),
                controller: 'VistaController',
                controllerAs: 'vm',
                resolve: helper.resolveFor('VistaCtrl'),
                data: { displayRoute: ["Catálogos"] }
            })
            .state('app.vista2', {
                url: '/vista2',
                title: 'Vista2',
                templateUrl: helper.basepath('/shared/states/vista2/vista2.html'),
                controller: 'Vista2Controller',
                controllerAs: 'vm',
                resolve: helper.resolveFor('Vista2Ctrl'),
                data: { displayRoute: ["Movimientos"] }
            })
            .state('app.vista3', {
                url: '/vista3',
                title: 'Vista3',
                templateUrl: helper.basepath('/shared/states/vista3/vista3.html'),
                controller: 'Vista3Controller',
                controllerAs: 'vm',
                resolve: helper.resolveFor('Vista3Ctrl'),
                data: { displayRoute: ["Reportes"] }
            })
            .state('app.subvista1', {
                url: '/subvista1',
                title: 'Subvista 1',
                templateUrl: helper.basepath('/shared/states/subvista1/subvista1.html'),
                controller: 'Subvista1Controller',
                controllerAs: 'vm',
                resolve: helper.resolveFor('Subvista1Ctrl'),
                data: { displayRoute: ["Vista", "Subvista 1"] }
            })
            .state('app.subvista2', {
                url: '/subvista2',
                title: 'Subvista 2',
                templateUrl: helper.basepath('/shared/states/subvista2/subvista2.html'),
                controller: 'Subvista2Controller',
                controllerAs: 'vm',
                resolve: helper.resolveFor('Subvista2Ctrl'),
                data: { displayRoute: ["Vista", "Subvista 2"] }
            })
            .state('app.subvista3', {
                url: '/subvista3',
                title: 'Subvista 3',
                templateUrl: helper.basepath('/shared/states/subvista3/subvista3.html'),
                controller: 'Subvista3Controller',
                controllerAs: 'vm',
                resolve: helper.resolveFor('Subvista3Ctrl'),
                data: { displayRoute: ["Vista 2", "Subvista 3"] }
            })
            .state('app.subvista4', {
                url: '/subvista4',
                title: 'Subvista 4',
                templateUrl: helper.basepath('/shared/states/subvista4/subvista4.html'),
                controller: 'Subvista4Controller',
                controllerAs: 'vm',
                resolve: helper.resolveFor('Subvista4Ctrl'),
                data: { displayRoute: ["Vista 3", "Subvista 4"] }
            })
            .state('app.subvista5', {
                url: '/subvista5',
                title: 'Subvista 5',
                templateUrl: helper.basepath('/shared/states/subvista5/subvista5.html'),
                controller: 'Subvista5Controller',
                controllerAs: 'vm',
                resolve: helper.resolveFor('Subvista5Ctrl'),
                data: { displayRoute: ["Vista 3", "Subvista 5"] }
            })
            .state('app.subvista6', {
                url: '/subvista6',
                title: 'Subvista 6',
                templateUrl: helper.basepath('/shared/states/subvista6/subvista6.html'),
                controller: 'Subvista6Controller',
                controllerAs: 'vm',
                resolve: helper.resolveFor('Subvista6Ctrl'),
                data: { displayRoute: ["Vista 3", "Subvista 6"] }
            });
    };



    //RUN FUNCTION _______________________________________________________________________________________________________________________________________________________ 
    //====================================================================================================================================================================
    runApp.$inject = [];
    
    function runApp()
    {
        
    };
    //====================================================================================================================================================================
    



    //CONSTANTS __________________________________________________________________________________________________________________________________________________________ 
    //====================================================================================================================================================================
        
    //Constante que es usada para definir, los scripts y módulos que podrán ser cargados en el resolveFor de las Rutas para poder realizar el Lazy Loading.
    //Es posible crear grupos de scripts. Se creará una entrada por cada controlador, el cual será cargado como necesario en su respectiva ruta.
    //Podrán cargarse además de js, css. 
    //Otra manera de agrupar es por módulos, los cuales serán cargados con un nombre y una colección de archivos.
    
    app.constant('AppConfig',{'url':'http://localhost:8080/CRUDmspas/'}) 

    app.constant('APP_REQUIRES', {
        scripts: {
            //CSS ========================================================================================================================================================
            
                                                        

            //Controllers for Views ======================================================================================================================================
            'HomeCtrl':                             ['app/shared/states/home/homeController.js'],
            'VistaCtrl':                            ['app/shared/states/vista/vistaController.js'],
            'Subvista1Ctrl':                        ['app/shared/states/subvista1/subvista1Controller.js'],
            'Subvista2Ctrl':                        ['app/shared/states/subvista2/subvista2Controller.js'],
            'Subvista3Ctrl':                        ['app/shared/states/subvista3/subvista3Controller.js'],
            'Subvista4Ctrl':                        ['app/shared/states/subvista4/subvista4Controller.js'],
            'Subvista5Ctrl':                        ['app/shared/states/subvista5/subvista5Controller.js'],
            'Subvista6Ctrl':                        ['app/shared/states/subvista6/subvista6Controller.js'],
            'Vista2Ctrl':                           ['app/shared/states/vista2/vista2Controller.js'],
            'Vista3Ctrl':                           ['app/shared/states/vista3/vista3Controller.js']

            //JavaScript Utils ===========================================================================================================================================

        },

        //Modules ========================================================================================================================================================
        modules: [
            
        ]
    });

    //====================================================================================================================================================================
        
    app.provider('RouteHelpers', RouteHelpersProvider);

    RouteHelpersProvider.$inject = ['APP_REQUIRES'];
    function RouteHelpersProvider(APP_REQUIRES) 
    {
        return {
            // provider access level
            basepath: basepath,
            resolveFor: resolveFor,
            // controller access level
            $get: function() 
            {
                return {
                    basepath: basepath,
                    resolveFor: resolveFor
                };
            }
        };

        // Set here the base of the relative path
        // for all app js or css to load
        function basepath(uri) 
        {
            return 'app/' + uri;
        }

        // Generates a resolve object by passing script names
        // previously configured in constant APP_REQUIRES
        function resolveFor() 
        {
            var _args = arguments;
            return {
                deps: ['$ocLazyLoad','$q', function ($ocLL, $q) 
                {
                    // Creates a promise chain for each argument
                    var promise = $q.when(1); // empty promise
                    for(var i=0, len=_args.length; i < len; i ++)
                    {
                        promise = andThen(_args[i]);
                    }
                    return promise;

                    // creates promise to chain dynamically
                    function andThen(_arg) 
                    {
                        // also support a function that returns a promise
                        if(typeof _arg === 'function')
                            return promise.then(_arg);
                        else
                        return promise.then(function() 
                        {
                            // if is a module, pass the name. If not, pass the array
                            var whatToLoad = getRequired(_arg);
                            // simple error check
                            if(!whatToLoad) return $.error('Route resolve: Bad resource name [' + _arg + ']');
                            // finally, return a promise
                            return $ocLL.load( whatToLoad );
                        });
                    }
                    
                    // check and returns required data
                    // analyze module items with the form [name: '', files: []]
                    // and also simple array of script files (for not angular js)
                    function getRequired(name) 
                    {
                        if (APP_REQUIRES.modules)
                            for(var m in APP_REQUIRES.modules)
                                if(APP_REQUIRES.modules[m].name && APP_REQUIRES.modules[m].name === name)
                                    return APP_REQUIRES.modules[m];
                        return APP_REQUIRES.scripts && APP_REQUIRES.scripts[name];
                    }

                }]
            };
        }
    };
    //====================================================================================================================================================================
        

})();


(function(){
    'use strict';

    angular
        .module(appMainModule)
        .controller('appController', controller);

    controller.$inject = ['$state', '$mdSidenav', '$location'];

    //Declaración de la función
    function controller($state, $mdSidenav, $location)
    {

        var vm = this;

        function activate()
        {

        };

        vm.getNavigationRoute = function()
        {
            if ($state && $state.current)
            {
                var displayRoute = '';
                $state.current.data.displayRoute.forEach((e) => { displayRoute += e + ' > '; } );
                displayRoute = displayRoute.substr(0, displayRoute.length - 2);

                return displayRoute;
            }
        }

        //NAVBAR ELEMENTS ________________________________________________________________________________________________________________________________________________ 
        //================================================================================================================================================================
        
        vm.navbarElements = [
            {
                name: "Inicio",
                href: "#!/app/home",
                icon: "home",
                click: () => { $state.go('app.home'); },
                state: "app.home"
            },
            {
                name: "Catálogos",
                href: "#!/app/vista",
                icon: "folder",
                state: "app.vista",
                click: () => { $state.go('app.vista'); },
                submenuItems: [
                    {
                        name: "Materiales",
                        href: "#!/app/subvista1",
                        state: "app.subvista1"
                    },
                    {
                        name: "Activos Fijos y Fungibles",
                        href: "#!/app/subvista2",
                        state: "app.subvista2"
                    },
                    {
                        name: "Estados de Artículos",
                        href: "#!/app/subvista3",
                        state: "app.subvista3"
                    },
                    {
                        name: "Características de Artículos",
                        href: "#!/app/subvista1",
                        state: "app.subvista1"
                    },
                    {
                        name: "Marcas y Modelos",
                        href: "#!/app/subvista2",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                        state: "app.subvista2"
                    },
                    {
                        name: "Unidades de Medida",
                        href: "#!/app/subvista3",
                        state: "app.subvista3"
                    },
                    {
                        name: "Grupos y Subgrupos de Artículos",
                        href: "#!/app/subvista1",
                        state: "app.subvista1"
                    },
                    {
                        name: "Nomenclatura Contable",
                        href: "#!/app/subvista2",
                        state: "app.subvista2"
                    },
                    {
                        name: "Renglones",
                        href: "#!/app/subvista3",
                        state: "app.subvista3"
                    },
                    {
                        name: "Ejercicios Contables",
                        href: "#!/app/subvista1",
                        state: "app.subvista1"
                    },
                    {
                        name: "Bodegas",
                        href: "#!/app/subvista2",
                        state: "app.subvista2"
                    },
                    {
                        name: "Libros",
                        href: "#!/app/subvista3",
                        state: "app.subvista3"
                    },
                    {
                        name: "Propietarios",
                        href: "#!/app/subvista1",
                        state: "app.subvista1"
                    },
                    {
                        name: "Proveedores",
                        href: "#!/app/subvista2",
                        state: "app.subvista2"
                    },
                    {
                        name: "Tipos de Documentos",
                        href: "#!/app/subvista3",
                        state: "app.subvista3"
                    },
                    {
                        name: "Personas Externas",
                        href: "#!/app/subvista1",
                        state: "app.subvista1"
                    },
                    {
                        name: "Entidades Externas",
                        href: "#!/app/subvista2",
                        state: "app.subvista2"
                    }
                ]
            },
            {
                name: "Movimientos de Almacén",
                href: "#!/app/vista2",
                icon: "store mall directory",
                state: "app.vista2",
                click: () => { $state.go('app.vista2'); },
                submenuItems: [
                    {
                        name: "Solicitud de Ingreso de Expediente",
                        href: "#!/app/subvista1",
                        state: "app.subvista1"
                    },
                    {
                        name: "Buzón de Solicitudes de Ingreso",
                        href: "#!/app/subvista2",
                        state: "app.subvista2"
                    },
                    {
                        name: "Buzón de Requisiciones de Almacén",
                        href: "#!/app/subvista3",
                        state: "app.subvista3"
                    },
                    {
                        name: "Solicitud de Egreso de Bienes",
                        href: "#!/app/subvista1",
                        state: "app.subvista1"
                    },
                    {
                        name: "Buzón de Solicitudes de Egreso",
                        href: "#!/app/subvista2",
                        state: "app.subvista2"
                    },
                    {
                        name: "Generación y Consulta de Kardex",
                        href: "#!/app/subvista3",
                        state: "app.subvista3"
                    },
                    {
                        name: "Generación y Consulta de Libros",
                        href: "#!/app/subvista1",
                        state: "app.subvista1"
                    }
                ]
            },
            {
                name: "Movimientos de Inventarios",
                href: "#!/app/vista2",
                icon: "local_offer",
                state: "app.vista2",
                click: () => { $state.go('app.vista2'); },
                submenuItems: [
                    {
                        name: "Buzón Requisiciones de Inventarios",
                        href: "#!/app/subvista1",
                        state: "app.subvista1"
                    },
                    {
                        name: "Solicitud de Ingreso de Expediente",
                        href: "#!/app/subvista2",
                        state: "app.subvista2"
                    },
                    {
                        name: "Buzón de Solicitudes de Ingreso",
                        href: "#!/app/subvista3",
                        state: "app.subvista3"
                    },
                    {
                        name: "Buzón Solicitudes de Códigos de Inv.",
                        href: "#!/app/subvista1",
                        state: "app.subvista1"
                    },
                    {
                        name: "Re-impresión de Etiquetas",
                        href: "#!/app/subvista2",
                        state: "app.subvista2"
                    },
                    {
                        name: "Solicitud de Traslado de Bienes",
                        href: "#!/app/subvista3",
                        state: "app.subvista3"
                    },
                    {
                        name: "Buzón de Solicitudes de Traslado",
                        href: "#!/app/subvista1",
                        state: "app.subvista1"
                    },
                    {
                        name: "Solicitud Tarjeta Responsabilidad",
                        href: "#!/app/subvista2",
                        state: "app.subvista2"
                    },
                    {
                        name: "Buzón Tarjeta Responsabilidad",
                        href: "#!/app/subvista3",
                        state: "app.subvista3"
                    },
                    {
                        name: "Buzón Solicitud Solvencias",
                        href: "#!/app/subvista1",
                        state: "app.subvista1"
                    },
                    {
                        name: "Buzón Tarjeta Responsabilidad",
                        href: "#!/app/subvista2",
                        state: "app.subvista2"
                    },
                    {
                        name: "Generación y Consulta de Libros",
                        href: "#!/app/subvista3",
                        state: "app.subvista3"
                    },
                    {
                        name: "Boleta de Pago Bienes",
                        href: "#!/app/subvista1",
                        state: "app.subvista1"
                    }
                ]
            },
            {
                name: "Reportes",
                href: "#!/app/vista3",
                icon: "class",
                state: "app.vista3",
                click: () => { $state.go('app.vista3'); },
                submenuItems: [
                    {
                        name: "Submenu 4",
                        href: "#!/app/subvista4",
                        state: "app.subvista4"
                    },
                    {
                        name: "Submenu 5",
                        href: "#!/app/subvista5",
                        state: "app.subvista5"
                    },
                    {
                        name: "Submenu 6",
                        href: "#!/app/subvista6",
                        state: "app.subvista6"
                    }
                ]
            },
            {
                name: "Servicios",
                href: "#!/app/vista3",
                icon: "info",
                state: "app.vista3",
                click: () => { $state.go('app.vista3'); },
                submenuItems: [
                    {
                        name: "Requisición de Egreso de Bienes",
                        href: "#!/app/subvista4",
                        state: "app.subvista4"
                    },
                    {
                        name: "Consulta Tarjeta Auxiliar",
                        href: "#!/app/subvista5",
                        state: "app.subvista5"
                    },
                    {
                        name: "Boleta de Pago Bienes",
                        href: "#!/app/subvista6",
                        state: "app.subvista6"
                    }
                ]
            },
            {
                name: "Consultas",
                href: "#!/app/vista3",
                icon: "search",
                state: "app.vista3",
                click: () => { $state.go('app.vista3'); },
                submenuItems: [
                    {
                        name: "Busqueda de Artículos",
                        href: "#!/app/subvista4",
                        state: "app.subvista4"
                    },
                    {
                        name: "Consulta de Existencias",
                        href: "#!/app/subvista5",
                        state: "app.subvista5"
                    }
                ]
            }
        ];

        vm.rightbarElements = [
            
        ];

        vm.clickElement = function(element)
        {
            if (element && element.click)
                element.click();
        };

        vm.showMobileMainHeader = true;

        vm.openSideNavPanel = function() 
        {
            $mdSidenav('left').open();
        };

        vm.closeSideNavPanel = function() 
        {
            $mdSidenav('left').close();
        };

        vm.goToHome = function()
        {
            $state.go("app.home");
        };
        
        //Configuraciones del proyecto, nombre y quién lo desarrolla
        vm.projectName = "Sistema de Almacén e Inventarios";
        vm.poweredBy = "Powered By SIAMP";

        activate();
    };

})();
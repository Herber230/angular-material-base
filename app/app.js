
var appMainModule = 'angularMaterial';

(function()
{

    var app = angular.module(appMainModule, [   
                                                'ui.router',
                                                'ngAnimate', 
                                                'oc.lazyLoad',
                                                'ngMessages',
                                                'ngMaterial',
                                                'md.data.table'
                                                                ]);

    app.config(configApp).run(runApp);


    configApp.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', '$httpProvider', '$ocLazyLoadProvider', 'APP_REQUIRES', 'RouteHelpersProvider'];

    function configApp($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider, $ocLazyLoadProvider, APP_REQUIRES, helper) 
    {   
        
        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
            modules: APP_REQUIRES.modules
        });

        $locationProvider.html5Mode(false);
        $urlRouterProvider.otherwise('/app/home');

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
                resolve: helper.resolveFor('HomeCtrl')
            })
            .state('app.vista', {
                url: '/vista',
                title: 'Vista',
                templateUrl: helper.basepath('/shared/states/vista/vista.html'),
                controller: 'VistaController',
                controllerAs: 'vm',
                resolve: helper.resolveFor('VistaCtrl')
            })
            .state('app.vista2', {
                url: '/vista2',
                title: 'Vista2',
                templateUrl: helper.basepath('/shared/states/vista2/vista2.html'),
                controller: 'Vista2Controller',
                controllerAs: 'vm',
                resolve: helper.resolveFor('Vista2Ctrl')
            })
            .state('app.vista3', {
                url: '/vista3',
                title: 'Vista3',
                templateUrl: helper.basepath('/shared/states/vista3/vista3.html'),
                controller: 'Vista3Controller',
                controllerAs: 'vm',
                resolve: helper.resolveFor('Vista3Ctrl')
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
            'HomeCtrl':                           ['app/shared/states/home/homeController.js'],
            'VistaCtrl':                           ['app/shared/states/vista/vistaController.js'],
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

    controller.$inject = ['$state', '$mdSidenav'];

    //Declaración de la función
    function controller($state, $mdSidenav)
    {

        var vm = this;

        function activate()
        {
            
        };

        //NAVBAR ELEMENTS ________________________________________________________________________________________________________________________________________________ 
        //================================================================================================================================================================
        
        vm.navbarElements = [
            {
                name: "Inicio",
                href: "#!/app/home",
                click: () => { vm.navCollapsed = true; }
            },
            {
                name: "Otra Vista",
                href: "#!/app/vista",
                click: () => { vm.navCollapsed = true; }
            },
            {
                name: "Vista 2",
                href: "#!/app/vista2",
                click: () => { vm.navCollapsed = true; }
            },
            {
                name: "Vista 3",
                href: "#!/app/vista3",
                click: () => { vm.navCollapsed = true; }
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
        vm.openSideNavPanel = function() {
            $mdSidenav('left').open();
        };
        vm.closeSideNavPanel = function() {
            $mdSidenav('left').close();
        };
        
        //Configuraciones del proyecto, nombre y quién lo desarrolla

        vm.projectName = "Angular Material Example";
        vm.poweredBy = "Powered By Barbarotto";

        activate();
    };

})();
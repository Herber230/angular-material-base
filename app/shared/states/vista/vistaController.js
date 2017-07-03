(function () {
    'use strict';

    angular.module(appMainModule).controller('VistaController', controller);

    controller.$inject = ['$http', 'AppConfig', 'colorTema', 'EmpleadoService'];

    function controller($http, AppConfig, color, EmpleadoService) {
        var vm = this;
        vm.colorTema = color;
        // Properties & Fields ===============================================================================================================================================


        //====================================================================================================================================================================



        // Methods ===========================================================================================================================================================

        function init() {

        };



        vm.cargarEmpleados = function () {
            EmpleadoService
                .getListarEmpleados(
                (responseSuccess) => {

                    vm.listadoEmpleados = responseSuccess.data;

                },
                function () {
                    swal(
                        'Error!',
                        'No se encontro el servidor!',
                        'error'
                    )
                }
                ,
                null);
        }


        // vm.cargarEmpleados = function () {
        //     var url = AppConfig.url + 'employee/'
        //     $http({
        //         url: url,
        //         method: 'GET'
        //     }).then((response) => {
        //         vm.listadoEmpleados = response.data;


        //     },
        //         (error) => {
        //             console.log(error);
        //             swal(
        //                 'Error!',
        //                 'No se encontro el servidor!',
        //                 'error'
        //             )
        //         });


        // }


        //Call constructor
        init();
    };

})();
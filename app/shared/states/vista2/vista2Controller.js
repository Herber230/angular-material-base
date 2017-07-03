(function () {
    'use strict';

    angular.module(appMainModule).controller('Vista2Controller', controller);

    controller.$inject = ['$http', 'AppConfig', 'EmpleadoService'];

    function controller($http, AppConfig, EmpleadoService) {
        var vm = this;

        // Properties & Fields ===============================================================================================================================================


        //====================================================================================================================================================================



        // Methods ===========================================================================================================================================================

        vm.clearValue = function () {
            // vm.empelado.firstName == undefined;
            // vm.empleado.lastName = undefined;
            // vm.empleado.email = undefined;
            // vm.empleado.phone = undefined;
            vm.empleado = {};
            vm.userForm.$setPristine();
        };


        vm.save = function () {
            EmpleadoService.saveEmpleado(
                vm.empleado,
                (responseSuccess) => {
                    swal(
                        'Bien hecho!',
                        'Guardado con exito!',
                        'success'
                    )
                }, (responseSuccess) => {
                    swal(
                        'Error!',
                        'No se encontro el servidor!',
                        'error'
                    )
                }
            )};



        function init() {

        };


        //Call constructor
        init();
    };

})();
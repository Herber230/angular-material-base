// Service =================================================================================
(function () {
    'use strict';

    angular
        .module(appMainModule)
        .service('EmpleadoService', service);

    service.$inject = ['$http', 'AppConfig'];

    function service($http, AppConfig) {
        var vm = this;

        // Properties and fields ====================


        // Fields



        // Properties Getters and Setters

        //Por callback
        vm.getListarEmpleados = function (actionSuccess, actionError, filters) {
            var url = AppConfig.url + 'employee/';

            var a = actionSuccess;
            var b = actionError;

            if (filters)
                url += '?' + filters;

            $http({
                url: url,
                method: 'GET'
            }).then(actionSuccess, actionError);
        }

        vm.saveEmpleado = function (empleado, actionSuccess, actionError) {

            var url = AppConfig.url + 'employee/'
            $http({
                url: url,
                method: 'POST',
                data: empleado
            }).then(actionSuccess, actionError);
        }




        // Asi se usaria en el controlador

        // serviceEmpleados
        //     .getListarEmpleados((responseSuccess) => {

        //     },
        //     null,
        //     'nombre=Pedro');





        // por promise
        // vm.getListarEmpleados = function (filters) {
        //     var url = AppConfig + 'empleados';

        //     if (filters)
        //         url += '?' + filters;

        //     return $http({
        //         url: url,
        //         method: 'GET'
        //     });
        // }

        // // Asi se usaria en el controlador
        // serviceEmpleados
        //     .getListarEmpleados('nombre=pedro').then((responseSuccess) => {

        //     });


        return vm;
    };

})();

(function () {
    'use strict';

    angular.module(appMainModule).controller('Vista2Controller', controller);

    controller.$inject = ['$http','AppConfig'];

    function controller($http, Appconfig) {
        var vm = this;

        // Properties & Fields ===============================================================================================================================================


        //====================================================================================================================================================================



        // Methods ===========================================================================================================================================================

        vm.clearValue = function () {
            vm.nombre = undefined;
            vm.apellido = undefined;
            vm.clientEmail = "";
            vm.telefono = '';
            vm.userForm.$setPristine();
        };


        vm.save = function () {
            var url = AppConfig.url + 'user/'
            $http({
                url: url,
                method: 'POST',
                data: vm.user
            }).then((response) => {
                vm.empleado = {};
                swal(
                    'Bien hecho!',
                    'Guardado con exito!',
                    'success'
                )
            },
                (error) => {
                    swal(
                        'Error!',
                        'Datos incorrectos!',
                        'error'
                    )
                });




        };



        function init() {

        };


        //Call constructor
        init();
    };

})();
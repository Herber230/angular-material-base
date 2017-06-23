(function () {
    'use strict';

    angular.module(appMainModule).controller('VistaController', controller);

    controller.$inject = ['$http', 'AppConfig'];

    function controller($http, AppConfig) {
        var vm = this;

        // Properties & Fields ===============================================================================================================================================


        //====================================================================================================================================================================



        // Methods ===========================================================================================================================================================

        function init() {

        };


        vm.cargarEmpleados = function () {
            var url = AppConfig.url + 'employee/list'
            $http({
                url: url,
                method: 'GET'
            }).then((response) => {
                vm.listadoEmpleados = response.data;


            },
                (error) => {
                    console.log(error);
                    swal(
                        'Error!',
                        'No se encontro el servidor!',
                        'error'
                    )
                });


        }


        //Call constructor
        init();
    };

})();
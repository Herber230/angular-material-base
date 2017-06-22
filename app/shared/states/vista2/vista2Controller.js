(function () {
    'use strict';

    angular.module(appMainModule).controller('Vista2Controller', controller);

    controller.$inject = ['$http', 'AppConfig'];

    function controller($http, AppConfig) {
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
            var url = AppConfig.url + 'employee/create'
            $http({
                url: url,
                method: 'POST',
                data: vm.empleado
            }).then((response) => {
                vm.empleado = {};
                swal(
                    'Bien hecho!',
                    'Guardado con exito!',
                    'success'

                )
                // swal({
                //     title: "Desea guardar nuevo empleado?",
                //     text: "La información ingresada sera guardada!",
                //     type: "warning",
                //     showCancelButton: true,
                //     confirmButtonColor: "#DD6B55",
                //     confirmButtonText: "Si, deseo guardarlo!",
                //     closeOnConfirm: false
                // },
                //     function () {
                //         swal("Guardado", "El empleado fue creado!", "success");
                //     });

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
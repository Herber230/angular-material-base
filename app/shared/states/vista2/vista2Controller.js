(function () {
    'use strict';

    angular.module(appMainModule).controller('Vista2Controller', controller);

    controller.$inject = [];

    function controller() {
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

             swal(
                    'Good job!',
                    'You clicked the button!',
                    'success'
                )

        };



        function init() {

        };


        //Call constructor
        init();
    };

})();
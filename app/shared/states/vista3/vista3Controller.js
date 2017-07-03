(function(){
    'use strict';

    angular.module(appMainModule).controller('Vista3Controller', controller);

    controller.$inject = [];

    function controller()
    {
        var vm = this;

        // Properties & Fields ===============================================================================================================================================


        //====================================================================================================================================================================



        // Methods ===========================================================================================================================================================

        function init()
        {

        };


        vm.items = [ { displayName: 'Sub-Vista 4', stateName: 'app.vista3.subvista4'}, 
                     { displayName: 'Sub-Vista 5', stateName: 'app.vista3.subvista5'},
                     { displayName: 'Sub-Vista 6', stateName: 'app.vista3.subvista6'} ];

        //Call constructor
        init();
    };

})();
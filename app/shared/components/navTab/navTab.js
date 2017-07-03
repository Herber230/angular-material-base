(function(){

    'use strict';

    componentController.$inject = ['$state'];

    function componentController($state)
    {
        var vm = this;
        vm.$onInit = function()
        {
            //Call constructor
            init();
        }
        // Fields & Properties ========================================================================================

        // ============================================================================================================


        // Methods ====================================================================================================
        
        function init()
        {
            if (vm.items && vm.items.length > 0)
                for (var i = 0; i < vm.items.length; i++)
                    if (vm.items[i].stateName == $state.current.name)
                        vm.selectedIndex = i;                
        };

        vm.goItem = function(item)
        {
            $state.go(item.stateName);
        };

        // ============================================================================================================
    };

    var component = 
    {
        templateUrl: 'app/shared/components/navTab/navTab.html',
        controller: componentController,
        controllerAs: 'vm',
        bindings: {
            items: '='
        }
    };

    angular.module(appMainModule).component('navTab', component);

})();
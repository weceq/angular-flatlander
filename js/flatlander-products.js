(function(){
    var app = angular.module('store-products', []);
    app.directive("productDescription", function() {
        return {
            restrict: 'A',
            templateUrl: "product-description.html"
        };
    });
    app.directive("productPanels", function() {
        return {
            restrict: 'E',
            templateUrl: "product-panels.html",
            controller: function(){
                this.tab = 1;

                this.setTab = function(tab) {
                    this.tab = tab;
                };
                this.isSelected = function(tab) {
                    return this.tab === tab;
                };
            },
            controllerAs: "panel"
        };
    });
})(); 

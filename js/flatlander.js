(function(){
    var app = angular.module('store', []);
    app.controller('StoreController', function(){
        this.product = gem;
    });
    var gem = {
        name: 'Dodecahedron',
        price: 2.89,
        description: 'Lorem ipsum, lorem ipsum...'
    };
})();

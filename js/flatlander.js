(function(){
    var app = angular.module('store', []);
    app.controller('StoreController', function(){
        this.products = gems;
    });
    var gems = [
    {
        name: 'Dodecahedron',
        price: 2.89,
        description: 'Lorem ipsum, lorem ipsum...',
        canPurchase: true,
        soldOut: false,
    },
    {
        name: 'Hexagon gem',
        price: 2.89,
        description: 'Lorem ipsum, lorem ipsum...',
        canPurchase: true,
        soldOut: false,
    },
    {
        name: 'Square gem',
        price: 2.89,
        description: 'Lorem ipsum, lorem ipsum...',
        canPurchase: true,
        soldOut: false,
    }];
})();

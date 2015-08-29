(function(){
    var app = angular.module('store', ['store-products']);
    app.controller('StoreController', ['$http', function($http){
        var store = this;
        store.products = [];
        $http.get('products.json').success(function(data){
            store.products = data;
        });
    }]);
    app.controller('GalleryController', function(){
        this.current = 0;

        this.setCurrent = function(current) {
            this.current = current;
        };
    });
    app.controller('ReviewController', function(){
        this.review = {};
        this.addReview = function(product){
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {}
        };
    });
})();

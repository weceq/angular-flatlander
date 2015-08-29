(function(){
    var app = angular.module('store', ['store-products']);
    app.controller('StoreController', function(){
        this.products = gems;
    });
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
   var gems = [
    {
        name: 'Dodecahedron',
        price: 2,
        description: 'Lorem ipsum, lorem ipsum...',
        canPurchase: true,
        soldOut: false,
        images: [
        {
            full: "img/gem-1-full.png",
            thumb: "img/gem-1-thumb.png"
        },
        {
            full: "img/gem-2-full.png",
            thumb: "img/gem-2-thumb.png"
        },
        {
            full: "img/gem-3-full.png",
            thumb: "img/gem-3-thumb.png"
        }],
        reviews: [
        {
            stars: 4,
            body: "first comment",
            author: "annonymous"
        },
        {
            stars: 2,
            body: "second comment",
            author: "annonymous2"
        },
        {
            stars: 5,
            body: "third comment",
            author: "annonymous3"
        }]
    },
    {
        name: 'Hexagon gem',
        price: 2.89,
        description: 'Lorem ipsum, lorem ipsum...',
        canPurchase: true,
        soldOut: false,
        images: [
        {
            full: "img/gem-1-full.png",
            thumb: "img/gem-1-thumb.png"
        },
        {
            full: "img/gem-2-full.png",
            thumb: "img/gem-2-thumb.png"
        },
        {
            full: "img/gem-3-full.png",
            thumb: "img/gem-3-thumb.png"
        }],
        reviews: [
        {
            stars: 4,
            body: "first comment",
            author: "annonymous"
        },
        {
            stars: 2,
            body: "second comment",
            author: "annonymous2"
        },
        {
            stars: 5,
            body: "third comment",
            author: "annonymous3"
        }]
    },
    {
        name: 'Square gem',
        price: 2.09,
        description: 'Lorem ipsum, lorem ipsum...',
        canPurchase: true,
        soldOut: false,
        images: [
        {
            full: "img/gem-1-full.png",
            thumb: "img/gem-1-thumb.png"
        },
        {
            full: "img/gem-2-full.png",
            thumb: "img/gem-2-thumb.png"
        },
        {
            full: "img/gem-3-full.png",
            thumb: "img/gem-3-thumb.png"
        }],
        reviews: [
        {
            stars: 4,
            body: "first comment",
            author: "annonymous"
        },
        {
            stars: 2,
            body: "second comment",
            author: "annonymous2"
        },
        {
            stars: 5,
            body: "third comment",
            author: "annonymous3"
        }]
    }];
})();

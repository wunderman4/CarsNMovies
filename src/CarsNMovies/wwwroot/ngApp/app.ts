namespace CarsNMovies {

    angular.module('CarsNMovies', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: CarsNMovies.Controllers.HomeController,
                controllerAs: 'c'
            })
            .state('cars', {
                url: '/cars',
                templateUrl: '/ngApp/views/cars.html',
                controller: CarsNMovies.Controllers.CarsController,
                controllerAs: 'c'
            })
            .state(`movies`, {
                url: `/movies`,
                templateUrl: `/ngApp/views/movies.html`,
                controller: CarsNMovies.Controllers.MoviesController,
                controllerAs: `c`
            })
            .state(`carDetails`, {
                url: `/carDeatils/:id`,
                templateUrl: `ngApp/views/carDetails.html`,
                controller: CarsNMovies.Controllers.CarDetailsController,
                controllerAs:`c`
            })
            .state(`movieDetails`, {
                url: `/movieDetails/:id`,
                templateUrl: `/ngApp/views/movieDetails.html`,
                controller: CarsNMovies.Controllers.MovieDetailsController,
                controllerAs:`c`
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });

    

}

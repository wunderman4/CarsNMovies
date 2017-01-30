namespace CarsNMovies.Controllers {

    let carsArray;
    let moviesArray;
    let carImport = `images/CarsNMovies/AudiRS6Croped.jpg`;
    let movieImport = `images/CarsNMovies/TheDarkKnightCropped.jpg`;
    let moviesArray2 = [
        { id: 1, image:`images/CarsNMovies/StarWars.jpg`}
    ];

    export class HomeController {
        public car;
        public movie;
        constructor(private $stateParams: ng.ui.IStateParamsService) {
            this.car = carImport;
            this.movie = movieImport;
        }  
    }


    export class CarsController {
        public cars;
        constructor(private $http: ng.IHttpService) {
            this.$http.get(`api/cars`).then((res) => {
                this.cars = res.data;
                carsArray = this.cars
            })
        }

    }

    export class MoviesController {
        public movies;
        constructor(private $http: ng.IHttpService) {
            this.$http.get(`api/movies`).then((res) => {
                this.movies = res.data;
                moviesArray = this.movies;
            })
        }
    }
    export class CarDetailsController {
        public car;
        constructor(private $stateParams: ng.ui.IStateParamsService) {
            this.car = carsArray.filter((m) => { return m.id == $stateParams[`id`] })[0];
        }
    }
    export class MovieDetailsController {
        public movie;
        constructor(private $stateParams: ng.ui.IStateParamsService) {
            this.movie = moviesArray.filter((m) => { return m.id == $stateParams[`id`] })[0];
            //this.movie = moviesArray2.filter((m) => { return m.id == $stateParams[`id`] })[0];
        }
    }
}

var app = angular.module('WebTools', ['ngRoute']);
app.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider
                .when("/", {
                    templateUrl: "partials/welcome.jade",
                })
                .when("/uaParser", {
                    templateUrl: "partials/uaParser.jade"
                })
                .otherwise({ redirectTo: "/" });
        }
    ]
);
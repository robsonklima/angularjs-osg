app.config(function ($routeProvider, $httpProvider) {
    // avoid browser cash
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    // init and login
    $routeProvider.when("/", {
       templateUrl: "views/login.html"
    });
    $routeProvider.when("/login", {
       templateUrl: "views/login.html"
    });

    // Main
    $routeProvider.when("/sessao", {
       templateUrl: "views/sessao.html"
    });
    $routeProvider.when("/sessaoDetalhes", {
       templateUrl: "views/sessaoDetalhes.html",
       controller: "sessaoDetalhesCtrl"
    });

    // Error
    $routeProvider.when("/erro", {
       templateUrl: "views/erro.html"
    });

    // Redirect
    $routeProvider.otherwise({redirectTo: "/erro"});
});

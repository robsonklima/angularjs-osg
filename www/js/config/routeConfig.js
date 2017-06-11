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
    $routeProvider.when("/sessoes", {
       templateUrl: "views/sessoes.html",
       controller: "sessoesCtrl"
    });
    $routeProvider.when("/sessao/:id", {
       templateUrl: "views/sessao.html",
       controller: "sessaoCtrl"
    });

    // Error
    $routeProvider.when("/erro", {
       templateUrl: "views/erro.html"
    });

    // Redirect
    $routeProvider.otherwise({redirectTo: "/erro"});
});

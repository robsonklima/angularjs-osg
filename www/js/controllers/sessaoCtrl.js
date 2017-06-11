app.controller("sessaoCtrl", function ($scope, constants, $location, $routeParams, $route, vereadorApiService, sessoesApiService) {
    $scope.sessaoIniciada = constants.sessaoIniciada;

    var findById = function() {
        sessoesApiService.findById($route.current.params.id).success(function(data, status) {
            $scope.sessao = data.sessoes[0];
        }).error(function(data, status) {
          $scope.error = 'Unable to fetch items.';
        });
    };

    $scope.iniciaSessao = function() {
        $scope.sessao.status = constants.sessaoIniciada;

        sessoesApiService.update($scope.sessao).success(function(data) {
          // to do
        }).error(function (data, status) {
            $scope.error = 'Unable to update item.';
        });
    };

    $scope.terminaSessao = function() {
        $scope.sessao.status = constants.sessaoTerminada;
          // to do
        sessoesApiService.update($scope.sessao).success(function(data) {
          $location.path('/sessoes');
        }).error(function (data, status) {
            $scope.error = 'Unable to update item.';
        });
    };

    var find = function() {
        vereadorApiService.find().success(function(data, status) {
          $scope.vereadores = data.vereadores;
        }).error(function(data, status) {
          $scope.error = 'Unable to fetch items.';
        });
    };

    $scope.registraSaida = function(vereador) {
        var sessaoVereador = {
          "sessao_id": $scope.sessao.sessao_id,
          "vereador_id": vereador.vereador_id,
          "datahoraevento": new Date(),
          "evento": constants.vereadorAusente,
        };

        sessoesApiService.registraPresenca(sessaoVereador).success(function(data, status) {
            console.log(data);
        }).error(function(data, status) {
            alert('Unable to update item.');
        });
    };

    find();
    findById();
});

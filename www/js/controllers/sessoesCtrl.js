app.controller("sessoesCtrl", function ($scope, $location, vereadorApiService, sessoesApiService) {

    var find = function() {
        sessoesApiService.find().success(function(data, status, headers, config) {
          $scope.sessoes = data.sessoes;
        }).error(function(data, status, headers, config) {
          $scope.error = 'Unable to fetch items.';
        });
    };

    find();
});

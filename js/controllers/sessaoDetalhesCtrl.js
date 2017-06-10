app.controller("sessaoDetalhesCtrl", function ($scope, $mdDialog, vereadorApiService) {

    $scope.vereadores = [];

    var find = function() {
        vereadorApiService.find().success(function(data, status, headers, config) {
          $scope.vereadores = data.councilmen;
        }).error(function(data, status, headers, config) {
          $scope.error = 'Unable to fetch items.';
        });
    };

    $scope.click = function(councilman) {
        //alert("Você clicou no id: " + obj._id);
        councilman.is_present = councilman.is_present ? false : true;

        vereadorApiService.update(councilman).success(function(data, status) {
            console.log('Councilman ' + data.councilman.name + ' updated.');
        }).error(function(data, status) {
            alert('Unable to update item.');
        });
    };

    find();
});

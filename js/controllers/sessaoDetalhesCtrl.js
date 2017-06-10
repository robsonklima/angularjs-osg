app.controller("sessaoDetalhesCtrl", function ($scope, $mdDialog, vereadorApiService) {

    $scope.vereadores = [];

    var find = function() {
        vereadorApiService.find().success(function(data, status, headers, config) {
          $scope.vereadores = data.councilmen;
        }).error(function(data, status, headers, config) {
          $scope.error = 'Unable to fetch items.';
        });
    };

    $scope.click = function(obj) {
        // alert("Você clicou no id: " + obj._id);
        obj.is_present = obj.is_present ? false : true;

        vereadorApiService.update(obj).success(function(data, status) {
            // alert('Item ' + data.councilman.name + ' updated.');
        }).error(function(data, status) {
            alert('Unable to update item.');
        });
    };

    find();
});

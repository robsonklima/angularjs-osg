app.factory("vereadorApiService", function($http, constants) {

    var _find = function() {
        return $http({
            url: constants.apiUrl + 'councilmen/',
            method: 'GET'
        });
    }

    var _findById = function(id) {
        return $http({
            url: constants.apiUrl + 'councilmen/' + id,
            method: 'GET'
        });
    }

    var _insert = function(obj) {
        return $http({
            url: constants.apiUrl + 'councilmen/',
            method: 'POST',
            data: obj
        });
    }

    var _update = function(obj) {
        return $http({
           url: constants.apiUrl + 'councilmen/' + obj._id,
           method: 'PATCH',
           data: obj
        })
    }

    var _remove = function(obj) {
        return $http({
           url: constants.apiUrl + 'councilmen/' + obj._id,
           method: 'DELETE'
        });
    }

    return {
        find: _find,
        findById: _findById,
        insert: _insert,
        update: _update,
        remove: _remove
    };
});

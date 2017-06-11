app.factory("vereadorApiService", function($http, constants) {

    var _find = function() {
        return $http({
            url: constants.apiUrl + 'api/vereadores/',
            method: 'GET'
        });
    }

    var _findById = function(id) {
        return $http({
            url: constants.apiUrl + 'api/vereadores/' + id,
            method: 'GET'
        });
    }

    var _insert = function(obj) {
        return $http({
            url: constants.apiUrl + 'api/vereadores/',
            method: 'POST',
            data: obj
        });
    }

    var _update = function(obj) {
        return $http({
           url: constants.apiUrl + 'api/vereadores/' + obj._id,
           method: 'PATCH',
           data: obj
        })
    }

    var _remove = function(obj) {
        return $http({
           url: constants.apiUrl + 'api/vereadores/' + obj._id,
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

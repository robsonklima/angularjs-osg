app.factory("sessoesApiService", function($http, constants) {

    var _find = function() {
        return $http({
            url: constants.apiUrl + 'api/sessoes/',
            method: 'GET'
        });
    }

    var _findById = function(id) {
        return $http({
            url: constants.apiUrl + 'api/sessoes/' + id,
            method: 'GET'
        });
    }

    var _update = function(sessao) {
        return $http({
           url: constants.apiUrl + 'api/sessoes/' + sessao.sessao_id,
           method: 'PUT',
           data: sessao
        })
    }

    var _registraPresenca = function(sessaoVereador) {
        return $http({
            url: constants.apiUrl + 'api/sessoesvereadores/',
            method: 'POST',
            data: sessaoVereador
        });
    }

    return {
        find: _find,
        findById: _findById,
        update: _update,
        registraPresenca: _registraPresenca
    };
});

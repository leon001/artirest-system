'use strict';

angular.module('artirestApp')
    .factory('ArtifactModel', function ($resource, DateUtils) {
        return $resource('api/artifactModels/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    data.createdAt = DateUtils.convertDateTimeFromServer(data.createdAt);
                    data.updatedAt = DateUtils.convertDateTimeFromServer(data.updatedAt);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    });

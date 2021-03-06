angular.module('clickaroos.models.campaign', [])

.factory('Campaign', ['$http', '$q', 'appServerUrl', function($http, $q, appServerUrl) {
  var factory = {};

  factory.getCampaignData = function(campaignID) {
    var deferred = $q.defer();
    
    console.log('getCampaignData called');
    console.log('campaignID: ', campaignID);

    $http.get(appServerUrl + '/api/campaigns/' + campaignID)
      .success(function(data, status, headers, config) {
        console.log('getCampaignData success');
        deferred.resolve(data);
      })
      .error(function(data, status, headers, config) {
        console.log('getCampaignData error');
        deferred.reject(new Error(data));
      });

      return deferred.promise;
  };

  factory.getAllCampaignData = function() {
    var deferred = $q.defer();

    $http.get('/api/campaigns')
      .success(function(data, status, headers, config) {
        // console.log('getAllCampaignData called');
        // console.log('data from server: ', data);
        deferred.resolve(data);
      })
      .error(function(data, status, headers, config) {
        console.log('ERROR');
        deferred.reject(new Error(data));
      });

      return deferred.promise;
  };

  return factory;
}]);

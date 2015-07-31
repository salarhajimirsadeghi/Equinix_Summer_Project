
angular.module('starter.controllers', [])

// .controller('MainCtrl', function($scope, $http) {
//   //console.log("Made it");
//  $http.get('http://localhost:5000' ).then(function(result) {
//     // console.log(err);
//     console.log("No Error");
//     console.log('Success', result);
//     $scope.alertCounters = result.data[0].alertCount;
//     // For JSON responses, resp.data contains the result
//   } ,function(err) {
   
//     // console.log(err);
//     console.log("Error Here");
//     console.log(JSON.stringify(err));
    
//   })
// })


.controller('loginCtrl', function($scope){


})

// .controller('AlertsCtrl', function($scope, Alerts) {
//   // With the new view caching in Ionic, Controllers are only called
//   // when they are recreated or on app start, instead of every page change.
//   // To listen for when this page is active (for example, refresh to data),
//   // listen for the $ionicView.enter event:
//   //
//   //$scope.$on('$ionicView.enter', function(e) {
//   //});

//   $scope.alerts = [];
//   Alerts.all(function(alerts){
//     $scope.alerts = alerts;
//   });
//   $scope.remove = function(alert) {
//     Alerts.remove(alert);
//   };
// })


.controller('DataCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

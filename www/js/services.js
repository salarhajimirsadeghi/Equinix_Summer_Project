
angular.module('starter.services', [])

.controller('MainCtrl', function($scope, $http) {
  //console.log("Made it");
 $http.get('http://localhost:5000' ).then(function(result) {
    // console.log(err);
    console.log("No Error");
    console.log('Success', result);
    $scope.alertCounters = result.data[0].alertCount;
    // For JSON responses, resp.data contains the result
  } ,function(err) {
   
    // console.log(err);
    console.log("Error Here");
    console.log(JSON.stringify(err));
    
  })

})

.controller('SearchCtrl', function($http, $scope, $stateParams) {
  alerts.log("HI");
  console.log($scope);
  //console.log($stateParams);
  $state.go('/tab.search');
})

.controller("CompCtrl", function($scope, $http){
  
  $http.get("http://localhost:5001/allAlerts").then(function(result){
    console.log($scope);
    console.log("No Error");
    console.log('Success', result);
    $scope.companies = result.data;
  }, function(err){
    console.log("Error Presenting All Company Name Data");
  })
})

.controller('AlertDetailCtrl', function($http, $scope, $stateParams) {
  //console.log($scope);
  console.log($stateParams);
 $http.get("http://localhost:5001/alerts/" + $stateParams.companyName ).then(function(result){
    console.log("Error on Detail");
    console.log('Success', result);
    $scope.companies = result.data;
  }, function(err){
    console.log("Error Presenting Company Information");
  })
})

// .factory('Alerts', function() {
//   // Might use a resource here that returns a JSON array

//   // Some fake testing data
//   var alerts = [{
//     id: 0,
//     name: 'Ben Sparrow',
//     lastText: 'You on your way?',
//     face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
//   }, {
//     id: 1,
//     name: 'Max Lynx',
//     lastText: 'Hey, it\'s me',
//     face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
//   }, {
//     id: 2,
//     name: 'Adam Bradleyson',
//     lastText: 'I should buy a boat',
//     face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
//   }, {
//     id: 3,
//     name: 'Perry Governor',
//     lastText: 'Look at my mukluks!',
//     face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
//   }, {
//     id: 4,
//     name: 'Mike Harrington',
//     lastText: 'This is wicked good ice cream.',
//     face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
//   }];

//   return {
//     all: function(callback) {
//       // alert(callback);
//       // alert("got here");
      
//   //     $http.get('/someUrl').
//   // success(function(data, status, headers, config) {
//   //   // this callback will be called asynchronously
//   //   // when the response is available
//   // }).
//   // error(function(data, status, headers, config) {
//   //   // called asynchronously if an error occurs
//   //   // or server returns response with an error status.
//   // });
//        callback(alerts);
//     },
//     remove: function(alert) {
//       alerts.splice(alerts.indexOf(alert), 1);
//     },
//     get: function(alertId) {
//       for (var i = 0; i < alerts.length; i++) {
//         if (alerts[i].id === parseInt(alertId)) {
//           return alerts[i];
//         }
//       }
//       return null;
//     }
//   };
// });

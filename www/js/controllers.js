angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $cordovaSocialSharing) {
  $scope.share = function() {
    $cordovaSocialSharing
      .share("Mic Check, 1..2", "Re: Re: Re: Fwd: Fwd: You gotta read this", null, "http://raisemore.com") // Share via native share sheet
      .then(function(result) {
        // alert("We sent your message");
      }, function(err) {
        alert(err);
        // An error occured. Show a message to the user
      });
  };
});

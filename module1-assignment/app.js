(function () {
'use strict'

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
  var emptyFieldFound = false;
  var removedEmpty = "Remove invalid empty entries.";
  $scope.buttonClick = function () {
    // Grab the text string and split on the comma
    // Check to see if there is anything to evaluate
    if($scope.lunchDishes === undefined) {
      $scope.lunchMessage = "There is nothing to evaluate!";
    } else {
      // var count = splitString($scope.lunchDishes);
      var count = splitString($scope.lunchDishes);
      // $scope.lunchMessage = "count is " + count;
      if(count === 0) {
        $scope.lunchMessage = "Please enter valid entries."
      } else if(count <= 3) {
        if(emptyFieldFound) {
          $scope.lunchMessage = "Enjoy!  Removed empty entries.";

        } else {
          $scope.lunchMessage = "Enjoy!";
        }
      } else {
        if(emptyFieldFound) {
          $scope.lunchMessage = "Too much!  Removed empty entries.";

        } else {
          $scope.lunchMessage = "Too much!";        }
      }
    }
  };

  /*
  * Grab the string and split it based on the comma seperator, if empty string
  * then ignore it as an invalid entry.
  *
  * Return number of valid comma delimited entries.
  */
  function splitString(string) {
    var arrayOfStrings = string.split(',');
    var outArray = [];
    var count = 0;
    for(var i = 0; i < arrayOfStrings.length; i++) {
      if(arrayOfStrings[i] === "") {
        console.log("found empty");
        emptyFieldFound = true;
      } else {
        console.log("Adding " + arrayOfStrings[i] + " to outArray");
        outArray[count++] = arrayOfStrings[i];
      }
    }
    console.log(outArray.length);
    return outArray.length;
  };
}
})();

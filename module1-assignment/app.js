(function () {
'use strict'

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
  var emptyFieldFound = false;
  $scope.buttonClick = function () {
    var removedEmpty = " Removed invalid empty entries.";
    emptyFieldFound = false;
    // Check to see if there is anything to evaluate
    if($scope.lunchDishes === undefined) {
      $scope.lunchMessage = "There is nothing to evaluate!";
    } else {
      var msg = "";
      var count = splitString($scope.lunchDishes);
      if(count == 0) {
        msg = "Please enter data first."
      } else if(count <= 3) {
        msg = "Enjoy!";
      } else {
        msg = "Too much!";
      }
      if(emptyFieldFound) {
        msg += removedEmpty;
      }
      $scope.lunchMessage = msg;
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

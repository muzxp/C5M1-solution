(function () {
    'use strict';

    angular.module('LunchCheckerApp', [])
    .controller('LunchCheckerController', LunchCheckerController);

    LunchCheckerController.$inject = ['$scope'];

    function LunchCheckerController($scope) {
	$scope.checkTooMuch = function () {
	    const lst = $scope.lunch.split(/\s*,\s*/).map(x=>x.replace(/\s*/,'')).filter(x=>x.length>0);
	    const len = lst.length;
	    //console.log(lst + ":" + len);
	    
	    let ans=""; 
    	    if (lst.length > 3) {
		ans = "Too Much!";
	    } else if (lst.length > 0) {
 		ans = "Enjoy!";
	    } else {
 		ans = "Please enter data first";
	    }
	    $scope.ifAteTooMuch = ans;
	}
    }
})();

/*
,
,,,
sushi,bread,soup
sushi,bread,soup,meat
sushi, bread , soup
sushi X, bread , soup
   sushi,bread,soup, meat
,
,,,
*/

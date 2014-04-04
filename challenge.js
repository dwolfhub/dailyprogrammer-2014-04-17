(function (nArray) {
  'use strict';

  var processPascalTriangle = function (n) {
    var triangle = [['1']],
      printTriangle = function () {
        for (var i = 0; i < triangle.length; i++) {
          console.log.apply(console, triangle[i]);
        }
      };

    for (var i = 1; i < n; i++) {
      triangle[i] = ['1'];
      for (var j = 0; j < triangle[i-1].length - 1; j++) {
        triangle[i].push((Number(triangle[i-1][j]) + Number(triangle[i-1][j+1])).toString());
      }
      triangle[i].push('1');
    }

    printTriangle();
  };

  nArray.forEach(processPascalTriangle);

}).call(this, [2, 6, 14]);
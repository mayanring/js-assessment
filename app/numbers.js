if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        return (num >> (bit-1)) & 1;
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        var resultArray = [];
        for (var i = 0; i < 8; i++) {
            if ((num >> i) & 1) {
                resultArray.push(1);
            }
            else {
                resultArray.push(0);
            }
        }

        return resultArray.reverse().join('');
    },

    multiply: function(a, b) {

    }
  };
});


if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        return str.search(/\d+/) !== -1;
    },

    containsRepeatingLetter : function(str) {
        return str.search(/([A-Za-z])\1+/) !== -1;
    },

    endsWithVowel : function(str) {
        return str.search(/[aeiouAEIOU]$/) !== -1;
    },

    captureThreeNumbers : function(str) {
        var result = str.match(/(\d{3})/);
        if (result && result[1]) {
            return result[1];
        }

        return false;
    },

    matchesPattern : function(str) {
        return str.search(/^\d{3}-\d{3}-\d{4}$/) !== -1;
    },
    isUSD : function(str) {
    }
  };
});

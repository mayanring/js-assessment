if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        var index = -1;

        arr.forEach(function(val, i) {
            if (val === item) {
                index = i;
            }
        });

        return index;
    },

    sum : function(arr) {
        var sum = 0;
        sum = arr.reduce(function(prev, current, i, array) {
            return prev + current;
        });

        return sum;
    },

    remove : function(arr, item) {
        result = [];
        arr.forEach(function(val, i) {
            if (val !== item) {
                result.push(val);
            }
        });

        return result;
    },

    removeWithoutCopy : function(arr, item) {

    },

    append : function(arr, item) {

    },

    truncate : function(arr) {

    },

    prepend : function(arr, item) {

    },

    curtail : function(arr) {

    },

    concat : function(arr1, arr2) {

    },

    insert : function(arr, item, index) {

    },

    count : function(arr, item) {

    },

    duplicates : function(arr) {

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});

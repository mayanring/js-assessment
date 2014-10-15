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
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                arr.splice(i, 1);
                i--;  // the deletion of the item forces us to redo the index.
            }
        }

        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        /*
            grunt solution:

            var a = [item];
            var result = a.concat(arr);
            return result;
        */


        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var count = 0;
        count = arr.reduce(function(prev, current) {
            return current === item ? prev + 1 : prev;
        }, 0);

        return count;
    },

    duplicates : function(arr) {
        var dupes = [];

        for (var i = 0; i < arr.length; i++) {
            var target = arr[i];
            var occurences = 0;

            occurences = arr.reduce(function(prev, current) {
                var count = prev;
                if (current === target) {
                    count++;
                }

                return count;
            }, 0);

            if (occurences > 1 && dupes.indexOf(target) === -1) {
                dupes.push(target);
            }
        }

        return dupes;
    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});

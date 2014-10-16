if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function(poop) {
            return str + ', ' + poop;
        };
    },

    makeClosures : function(arr, fn) {
        var fnArray = [];

        arr.forEach(function(val) {
            fnArray.push(function() {
               return fn(val);
            });
        });

        return fnArray;
    },

    partial : function(fn, str1, str2) {
        return function(punctuation) {
            var strArgs = [str1, str2, punctuation];
            return fn.apply(null, strArgs);
        }
    },

    useArguments : function() {
        if (arguments.length === 1) {
            return arguments[0];
        }

        if (arguments.length > 1) {
            var sum = 0;
            for (var i = 0; i < arguments.length; i++) {
                sum += arguments[i];
            }

            return sum;
        }
    },

    callIt : function(fn) {
        var args = Array.prototype.slice.call(arguments, 1, arguments.length);
        fn.apply(null, args);
    },

    partialUsingArguments : function(fn) {
        var outerArgs = Array.prototype.slice.call(arguments, 1, arguments.length);

        return function() {
            var innerArgs = Array.prototype.slice.call(arguments);
            var args = outerArgs.concat(innerArgs);
            return fn.apply(null, args);
        }
    },

    curryIt : function(fn) {

    }
  };
});

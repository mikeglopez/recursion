// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	if (obj === null) {
		return 'null';
	}
	else if (typeof obj === 'function' || typeof obj === 'undefined') {
		return;
	}
	else if (typeof obj === 'boolean') {
		return '' + obj;
	}
	else if (typeof obj === 'number') {
		return '' + obj;
	}
	else if (typeof obj === 'string') {
		return '"' + obj + '"';
	}
	else if (Array.isArray(obj)) {
  		var arr = [];
  		if (obj.length > 0) {
  			obj.forEach(function(item) {
  				arr.push(stringifyJSON(item));
  			});
  		}
  		return '[' + arr + ']';
  	}
	else if (typeof obj === 'object') {
		return;
	}
};

console.log(typeof stringifyJSON([1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999]));



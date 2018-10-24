// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	if (typeof obj === 'function' || typeof obj === 'undefined') {
		return '';
	}
	else if (obj === null) {
		return 'null';
	}
	else if (typeof obj === 'boolean' || typeof obj === 'number') {
		return '' + obj;
	}
	else if (typeof obj === 'string') {
		return '"' + obj + '"';
	}
	else if (Array.isArray(obj)) {
  		var outputArr = [];
  		if (obj.length > 0) {
  			obj.forEach(function(item) {
  				outputArr.push(stringifyJSON(item));
  			});
  		}
  		return '[' + outputArr + ']';
  	}
	else if (typeof obj === 'object') {
		var outputObj = [];
		if (Object.keys(obj).length > 0) {
			for (var key in obj) {
				if(stringifyJSON(obj[key]).length > 0) {
					outputObj.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
				}
			}
		}
		return '{' + outputObj.join(',') + '}';
	}
};
// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
	var outputArr = [];
	function containsClass(container) {
		var containerList = container.classList;
		if (containerList && containerList.contains(className)) {
			outputArr.push(container);
		}
		if (container.childNodes) {
			container.childNodes.forEach(function(item) {
				containsClass(item);
			});
		}
	}
	containsClass(document.body);
	return outputArr;
};
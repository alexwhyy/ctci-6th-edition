// Implement an algorithm to see if a string has all unique characters
function isUnique(str) {
	let seen = {};
	for (var i = 0; i < str.length; i++) {
		if (seen[str.charAt(i)]) {
			return false;
		}
		seen[str.charAt(i)] = true;
	}
	return true;
}

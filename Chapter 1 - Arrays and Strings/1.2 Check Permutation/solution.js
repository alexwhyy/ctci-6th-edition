// Given two strings, write a method to determine if one is a permutation of the other

// time: O(n) where n is the length of a and b
function isPermutation(a, b) {
	let aCounts = {};
	let bCounts = {};
	if (a.length != b.length) return false;
	for (var i = 0; i < a.length; i++) {
		aCounts[a.charAt(i)] ? aCounts[a.charAt(i)] += 1 : aCounts[a.charAt(i)] = 1;
		bCounts[b.charAt(i)] ? bCounts[b.charAt(i)] += 1 : bCounts[b.charAt(i)] = 1;
	}
	for (var c in aCounts) {
		if (aCounts[c] != bCounts[c]) return false;
	}
	return true;
}

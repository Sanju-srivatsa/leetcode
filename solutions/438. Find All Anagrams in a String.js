/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const map = {};
  for (let c of p) {
    map[c] = ~~map[c] + 1;
  }
  let counter = p.length;
  let result = [];
  for (let i = 0, j = 0; j < s.length; j++) {
    // Step 1. count the character
    if (map[s[j]]-- > 0) {
      counter--; // Found a character in t
    }
 while (counter === 0) {
      if (j - i + 1 === p.length) {
        result.push(i);
      }
​
      if (map[s[i++]]++ === 0) {
        counter++; // Make it invalid
      }
    }
  }
​
  return result;  
};

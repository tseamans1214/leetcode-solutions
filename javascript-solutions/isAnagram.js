/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sMap = new Map();
    let tMap = new Map();
    // if s has less characters than t, then t cannot be an anagram of s
    if (s.length < t.length) {
        return false;
    }
    for (let i=0; i<s.length; i++) {
        // Add to counter if map has current character already
        if (sMap.has(s[i])) {
            sMap.set(s[i], sMap.get(s[i]) + 1);
        // Else add a new key value pair with 1 as the value
        } else {
            sMap.set(s[i], 1);
        }
        // Check to make sure i is less than t.length
        if (i <t.length) {
            // Add ot counter if map has current character already
            if (tMap.has(t[i])) {
                tMap.set(t[i], tMap.get(t[i]) + 1);
            // else add a new key value pair with 1 as the value
            } else {
                tMap.set(t[i], 1);
            }
        }
    }
    // loop through all of s characters
    for (let i=0; i<s.length; i++) {
        // if current character doesn't occur the same amount in both maps
        //  return false
        if (sMap.get(s[i]) != tMap.get(s[i])) {
            return false;
        }
    }
    // else it is an anagram so return true
    return true;
};

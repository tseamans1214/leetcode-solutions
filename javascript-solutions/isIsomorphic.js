/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    // if both strings' lengths are not equal, they are not isomorphic
    if (s.length != t.length) {
        return false;
    }
    // use a map to store a mapping from characters of string s to string t
    let hashMap = new Map();
    // use an array to store a pool of already mapped characters
    let set = [];

    // Loop through both strings
    for (let i=0; i<s.length; i++) {
        let sChar = s.charAt(i);
        let tChar = t.charAt(i);
        
        // if the current s char is seen before
        if (hashMap.has(s.charAt(i))) {
            // return false if the first occurrence of current s char is mapped
            //  to a differt char
            if (hashMap.get(sChar) != tChar) {
                return false;
            }
        // Else current s char hasn't been mapped yet
        } else {
            // return false if t's current char is already mapped to some other
            //  char in s
            if (set.includes(tChar)) {
                return false;
            }
            // map t current char to s current char
            hashMap.set(sChar, tChar);
            // record mapped character
            set.push(tChar);
        }
    }
    return true;
    
};

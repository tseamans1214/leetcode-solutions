// Problem: Interleaving String
// Description: Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.
// An interleaving of two strings s and t is a configuration where s and t are divided into n and m 
// substrings
//  respectively, such that:

// s = s1 + s2 + ... + sn
// t = t1 + t2 + ... + tm
// |n - m| <= 1
// The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
// Note: a + b is the concatenation of strings a and b.
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    const m = s1.length, n = s2.length;
    if (m + n !== s3.length) return false;

    // Create a 2D DP array
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(false));

    // Base case: Empty strings
    dp[0][0] = true;

    // Fill first row
    for (let i = 1; i <= m; i++) {
        dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];
    }

    // Fill first column
    for (let j = 1; j <= n; j++) {
        dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1];
    }

    // Fill the rest of the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
        const matchS1 = dp[i - 1][j] && s1[i - 1] === s3[i + j - 1];
        const matchS2 = dp[i][j - 1] && s2[j - 1] === s3[i + j - 1];
        dp[i][j] = matchS1 || matchS2;
        }
    }

    return dp[m][n];
};

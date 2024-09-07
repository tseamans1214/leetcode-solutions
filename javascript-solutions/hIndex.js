//Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.
//According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let h = citations.length;
    let hCount = 0;
    for (let i=0; i<citations.length && h > 0; i++) {
        // If the current paper has h or more citations, increment the hCount
        if (citations[i] >= h) {
            hCount++;
            // If the number of papers with at least h citations equals h, then return h
            if (hCount == h) {
                return h;
            }
        } else {
            // If there is not enough papers left to reach h, reduce h by 1 and start loop over again
            if (citations.length - i -1 < h - hCount) {
                i = -1;
                hCount = 0;
                h--;
            }
        }
    }
    return h;
};

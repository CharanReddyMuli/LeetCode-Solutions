class Solution {
    /**
     * @param {string} haystack
     * @param {string} needle
     * @return {number}
     */
    strStr(haystack, needle) {
        let n = haystack.length;
        let m = needle.length;
        for (let i = 0; i <= n - m; i++) {
            if (haystack.substring(i, i + m) === needle) {
                return i;
            }
        }
        return -1;
    }
}
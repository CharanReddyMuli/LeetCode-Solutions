class Solution {
    strStr(haystack: string, needle: string): number {
        let n: number = haystack.length;
        let m: number = needle.length;
        for (let i: number = 0; i <= n - m; i++) {
            if (haystack.substring(i, i + m) === needle) {
                return i;
            }
        }
        return -1;
    }
}
/*
 * 1297. Maximum Number of Occurrences of a Substring
 *
 * Q: https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/
 * A: https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/discuss/461476/Javascript-and-C%2B%2B-solutions
 */
let maxFreq = function(s, T, min, _, cand = new Map()) {
    let i = 0, j = 0, cnt = 0, ans = 0, m = new Array(123).fill(0), N = s.length;
    while (j <= N) {
        if (j - i > min) if (--m[s.charCodeAt(i++)] == 0) --cnt;
        if (j - i == min && cnt <= T) cand.set(s.substr(i, j - i), 1 + (cand.get(s.substr(i, j - i)) || 0)), ans = Math.max(ans, cand.get(s.substr(i, j - i) || 0));
        if (j - i <= min) if (++m[s.charCodeAt(j++)] == 1) ++cnt;
    }
    return ans;
};
console.log(maxFreq("aababcaab", 2, 3, 4));
console.log(maxFreq("aaaa", 1, 3, 3));
console.log(maxFreq("aabcabcab", 2, 2, 3));
console.log(maxFreq("abcde", 2, 3, 3));

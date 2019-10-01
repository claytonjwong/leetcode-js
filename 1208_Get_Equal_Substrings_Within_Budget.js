/*

1208. Get Equal Substrings Within Budget

https://leetcode.com/problems/get-equal-substrings-within-budget/


*/

/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = (s, t, maxCost, cost=0, ans=0) => {
    var diff = ((a, b) => {
        return Math.abs(a.charCodeAt(0) - b.charCodeAt(0));
    });
    const n = s.length;
    for (let i=0, j=0; i < n && j < n; ++j) {
        for (cost += diff(s[j], t[j]); i <= j && cost > maxCost; ++i)
            cost -= diff(s[i], t[i]);
        ans = Math.max(ans, j-i+1); // +1 for i..j inclusive     
    }
    return ans;
};

console.log(equalSubstring("abcd", "acde", 0));

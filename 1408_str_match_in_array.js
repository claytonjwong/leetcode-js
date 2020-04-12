/*
 * 1408. String Matching in an Array
 *
 * Q: https://leetcode.com/problems/string-matching-in-an-array/
 * A: https://leetcode.com/problems/string-matching-in-an-array/discuss/575927/Javascript-and-C%2B%2B-solutions
 */

let stringMatching = (words, ans = new Set()) => {
    words.forEach(word => {
        words.forEach(sub => {
            if (word != sub && word.indexOf(sub) > -1)
                ans.add(sub);
        });
    });
    return [...ans];
};